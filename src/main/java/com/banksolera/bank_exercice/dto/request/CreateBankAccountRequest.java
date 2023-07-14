package com.banksolera.bank_exercice.dto.request;

import lombok.*;

@Getter
@Setter
@Data
@NoArgsConstructor
@AllArgsConstructor
public class CreateBankAccountRequest {
    String userName;
    String accountName;
    String accountNum;
    Double moneyAccount;
}
