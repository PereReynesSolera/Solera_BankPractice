package com.banksolera.bank_exercice.controllers;

import com.banksolera.bank_exercice.dto.request.CreateBankAccountRequest;
import com.banksolera.bank_exercice.dto.request.DeleteBankAccountRequest;
import com.banksolera.bank_exercice.dto.response.GetBankAccountResponse;
import com.banksolera.bank_exercice.entities.BankAccount;
import com.banksolera.bank_exercice.entities.User;
import com.banksolera.bank_exercice.repository.InterBankAccountRepository;
import com.banksolera.bank_exercice.services.InfoBankService;
import com.banksolera.bank_exercice.services.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;
import java.util.Set;

@RestController
@CrossOrigin(origins = "*")
@RequestMapping(path = "/api/bank")
public class InfoBankController {
	@Autowired
    InfoBankService bankService;

    @Autowired
    UserService userService;
    @Autowired
    InterBankAccountRepository bankAccountRepository;

    @PostMapping(path = "/create")
    @ResponseBody
    public ResponseEntity<?> createBankAccount(@RequestBody CreateBankAccountRequest bankRequest){
        BankAccount bankAccount = new BankAccount();
        User user = userService.findByUserName(bankRequest.getUserName());
        bankAccount.setAccountNum(bankRequest.getAccountNum());
        bankAccount.setMoneyAccount(bankRequest.getMoneyAccount());
        bankAccount.setAccountName(bankRequest.getAccountName());
        bankAccount.setUser(user);
        return bankService.createBankAccount(bankAccount);
    }

    @PostMapping("")
    @ResponseBody
    public ResponseEntity<?> getUserBankAccounts(@RequestBody String userName) {
        List<GetBankAccountResponse> listAccounts = new ArrayList<>();
        User user = userService.findByUserName(userName);
        List<BankAccount> bankAccounts = bankService.findAllByUser(user);
        for (BankAccount bankAcc:bankAccounts) {
            GetBankAccountResponse gbar = new GetBankAccountResponse();
            gbar.setId(bankAcc.getId());
            gbar.setAccountName(bankAcc.getAccountName());
            gbar.setAccountNum(bankAcc.getAccountNum());
            gbar.setMoneyAccount(bankAcc.getMoneyAccount());
            listAccounts.add(gbar);
        }
        return ResponseEntity.ok(listAccounts);
    }
    @DeleteMapping(path = "/delete")
    @ResponseBody
    public ResponseEntity<?> deleteBankAccount(@RequestBody DeleteBankAccountRequest deleteRequest) {
        Long id = deleteRequest.getId();
        String userName = deleteRequest.getUserName();
        User user = userService.findByUserName(userName);
        BankAccount bankAccount = bankService.findById(id);
        if(bankAccount != null) {
            if (bankAccount.getUser().equals(user)) {
                bankService.delete(bankAccount);
                return ResponseEntity.ok("Deleted bank account.");
            } else {
                return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("Logged user is not allowed to delete this bank account.");
            }
        } else {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("Bank account does not exist.");
        }
    }
}
