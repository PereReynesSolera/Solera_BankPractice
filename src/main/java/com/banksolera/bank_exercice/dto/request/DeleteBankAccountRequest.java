package com.banksolera.bank_exercice.dto.request;

import lombok.*;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class DeleteBankAccountRequest {
    private Long id;
    private String userName;
}
