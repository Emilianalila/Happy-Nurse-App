package com.example.HappyNurse.user;

import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin
@RequestMapping("/api/login")
public class UserController {

    private final UserService userService;
    public UserController(UserService userService) {
        this.userService = userService;
    }

    @PostMapping
    public String login(@RequestBody String email){
        UserP foundUser = userService.findByEmail(email);
        System.out.println("foundUser = " + foundUser);
        if (foundUser != null){
            return foundUser.getRole();
        }else{
            return "Invalid";
        }
    }
}
