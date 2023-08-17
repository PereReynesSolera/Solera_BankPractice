package com.banksolera.bank_exercice.services;

import com.banksolera.bank_exercice.entities.User;
import io.jsonwebtoken.Claims;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;
import java.security.InvalidAlgorithmParameterException;
import java.security.KeyPair;
import java.security.KeyPairGenerator;
import java.security.NoSuchAlgorithmException;
import java.security.NoSuchProviderException;
import java.security.Security;
import java.util.Date;
import java.util.HashMap;
import java.util.Map;
import java.util.Optional;
import java.util.function.Function;
import lombok.SneakyThrows;
import org.bouncycastle.jce.ECNamedCurveTable;
import org.bouncycastle.jce.provider.BouncyCastleProvider;
import org.bouncycastle.jce.spec.ECParameterSpec;
import org.springframework.stereotype.Service;

@Service
public class JwtService {

    private KeyPair keyPair = null;
    public KeyPair getKey() throws NoSuchAlgorithmException, NoSuchProviderException, InvalidAlgorithmParameterException {
        if (this.keyPair == null) {
            Security.addProvider(new BouncyCastleProvider());

            ECParameterSpec ecSpec = ECNamedCurveTable.getParameterSpec("P-256");

            KeyPairGenerator keyPairGenerator = KeyPairGenerator.getInstance("ECDSA", "BC");
            keyPairGenerator.initialize(ecSpec);
            this.keyPair = keyPairGenerator.generateKeyPair();

            System.out.println(keyPair);
        }
        return keyPair;
    }

    public String getToken(User user)
            throws InvalidAlgorithmParameterException, NoSuchAlgorithmException, NoSuchProviderException {
        return getToken(new HashMap<>(), user);
    }

    public String getToken(Map<String,Object> extraClaims, User user)
            throws InvalidAlgorithmParameterException, NoSuchAlgorithmException, NoSuchProviderException {
        return Jwts.builder().setClaims(extraClaims)
                .setSubject(user.getUserName())
                .setIssuedAt(new Date(System.currentTimeMillis()))
                .setExpiration(new Date(System.currentTimeMillis()+1000*60*24))
                .signWith(getKey().getPrivate(), SignatureAlgorithm.ES256)
                .compact();
    }

    public String getUserNameFromToken(String token) {
        return getClaim(token, Claims::getSubject);
    }

    public boolean isTokenValid(String token, User user) {
        final String username=getUserNameFromToken(token);
        return (username.equals(user.getUserName()) && !isTokenExpired(token));
    }

    @SneakyThrows
    private Claims getAllClaims(String token) {
        return Jwts.parserBuilder().setSigningKey(getKey().getPublic()).build().parseClaimsJws(token).getBody();
    }

    public <T> T getClaim(String token, Function<Claims,T> claimsResolver)
    {
        Claims claims=getAllClaims(token);
        return claimsResolver.apply(claims);
    }

    private Date getExpiration(String token)
    {
        return getClaim(token, Claims::getExpiration);
    }

    private boolean isTokenExpired(String token)
    {
        return getExpiration(token).before(new Date());
    }
}
