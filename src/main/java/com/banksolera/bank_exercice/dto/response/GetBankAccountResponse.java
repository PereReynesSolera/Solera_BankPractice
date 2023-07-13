package com.banksolera.bank_exercice.dto.response;

import lombok.*;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class GetBankAccountResponse {
    String accountName;
    String accountNum;
    Double moneyAccount;
}
