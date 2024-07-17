package com.example.HappyNurse.user;
import org.springframework.stereotype.Service;

@Service
public class UserService {

    private final UserRepository userRepository;
    public UserService(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    public UserP findByEmail(String email) {
        System.out.println(userRepository.findByEmail(email));
        return userRepository.findByEmail(email);
    }


}
