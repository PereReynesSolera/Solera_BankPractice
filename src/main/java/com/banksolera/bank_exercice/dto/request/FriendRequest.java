package com.banksolera.bank_exercice.dto.request;

import lombok.*;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class FriendRequest {
    private String userName;
    private String friendUserName;
}