package com.example.HappyNurse.nurse;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface NurseRepository extends JpaRepository<Nurse, Long> {
    Nurse findNurseById(Long id);

}
