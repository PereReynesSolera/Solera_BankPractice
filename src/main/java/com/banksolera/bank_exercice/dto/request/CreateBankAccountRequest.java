package com.banksolera.bank_exercice.dto.request;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class CreateBankAccountRequest {
    String userName;
    String accountName;
    String accountNum;
    Double moneyAccount;
}
