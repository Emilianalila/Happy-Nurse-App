package com.example.HappyNurse.nurse;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import lombok.Getter;
import lombok.Setter;

@Entity
@Setter
@Getter
public class Nurse {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String name;
    private String lastName;
    private String email;
    private String phoneNumber;
    private String licenseNumber;
    private String gender;
    private String address;
    private int price;
    private String rating;
    private String img;

    public Nurse() {
    }

    public Nurse(Long id, String name, String lastName, String email, String phoneNumber, String licenseNumber, String gender, String address, int price, String rating, String img) {
        this.id = id;
        this.name = name;
        this.lastName = lastName;
        this.email = email;
        this.phoneNumber = phoneNumber;
        this.licenseNumber = licenseNumber;
        this.gender = gender;
        this.address = address;
        this.price = price;
        this.rating = rating;
        this.img = img;
    }

    @Override
    public String toString() {
        return "Nurse{" +
                "id=" + id +
                ", name='" + name + '\'' +
                ", lastName='" + lastName + '\'' +
                ", email='" + email + '\'' +
                ", phoneNumber=" + phoneNumber +
                ", licenseNumber='" + licenseNumber + '\'' +
                ", gender='" + gender + '\'' +
                ", address='" + address + '\'' +
                ", price=" + price +
                ", rating='" + rating + '\'' +
                '}';
    }
}
