package com.example.HappyNurse.user;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface UserRepository extends JpaRepository<UserP, Long> {
   UserP findByEmail(String email);
}
