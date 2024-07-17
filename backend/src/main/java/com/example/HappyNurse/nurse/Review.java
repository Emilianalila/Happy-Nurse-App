package com.example.HappyNurse.nurse;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

@Entity
@Setter
@Getter
public class Review {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

//        @ManyToOne
//        @JoinColumn(name = "nurse_id", nullable = false)
//        private Nurse nurse;


    private String reviewerName;


    private int rating;


    private String comment;
//
//        @Column(nullable = false)
//        private Date reviewDate;

}


