package com.banksolera.bank_exercice.dto.response;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor

public class GetUserResponse {
        private Long Id;
        private String firstName;
        private String lastName;
        private String userName;
        private String image;
}
