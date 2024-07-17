package com.example.HappyNurse.nurse;

public record DtoNurse(String name,
         String lastName,
         String email,
         String phoneNumber,
         String licenseNumber,
         String gender,
         String address,
         int price,
         String rating,
         String img) {
}
