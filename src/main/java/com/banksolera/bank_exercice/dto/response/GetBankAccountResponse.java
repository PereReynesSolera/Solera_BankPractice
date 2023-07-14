package com.banksolera.bank_exercice.dto.response;

import lombok.*;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class GetBankAccountResponse {
    Long id;
    String accountName;
    String accountNum;
    Double moneyAccount;
}
