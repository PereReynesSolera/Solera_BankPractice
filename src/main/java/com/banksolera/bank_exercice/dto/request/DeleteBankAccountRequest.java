package com.banksolera.bank_exercice.dto.request;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class DeleteBankAccountRequest {
    private Long id;
    private String userName;
}
