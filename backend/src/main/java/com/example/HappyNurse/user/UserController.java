package com.example.HappyNurse.user;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.Map;

@RestController
@CrossOrigin
@RequestMapping("/api/login")
public class UserController {

    private final UserService userService;
    public UserController(UserService userService) {
        this.userService = userService;
    }

    @PostMapping
    public ResponseEntity<?> login(@RequestBody String email){
        UserP foundUser = userService.findByEmail(email);
        System.out.println("foundUser = " + foundUser);
        if (foundUser != null){
            DtoUser userInfo = new DtoUser(foundUser.getRole(), foundUser.getId());
            return new ResponseEntity<>(userInfo, HttpStatus.OK);

        }else{
            Map<String, String> response = new HashMap<>();
            response.put("message", "User ");
            response.put("email", email);
            return new ResponseEntity<>(response, HttpStatus.NOT_FOUND);
        }
    }
}
