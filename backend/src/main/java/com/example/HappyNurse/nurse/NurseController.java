package com.example.HappyNurse.nurse;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.net.URI;
import java.util.List;

@RestController
@CrossOrigin
@RequestMapping("/api/nurse")
public class NurseController {

    private final NurseService nurseService;
    public NurseController(NurseService nurseService) {
        this.nurseService = nurseService;
    }

    @GetMapping
    public ResponseEntity<List<Nurse>> getListNurses(){
        List<Nurse> nurseList = nurseService.getAllNurses();
        return ResponseEntity.ok(nurseList);
    }

    @PostMapping("/create")
    public Long createNurse(@RequestBody Nurse nurse){
        Nurse newNurse = nurseService.saveNurse(nurse);
       return newNurse.getId();
    }

    @GetMapping("/{id}")
    public ResponseEntity<Nurse> getNurseById(@PathVariable Long id){
        Nurse foundNurse= nurseService.findNurse(id);
        if (foundNurse == null) {
            return ResponseEntity.notFound().build();
        }
        return ResponseEntity.ok(foundNurse);
    }

    @PutMapping("/edit/{id}")
    public ResponseEntity<Nurse> editNurse(@RequestBody Nurse nurse, @PathVariable Long id){
        Nurse foundNurse = nurseService.findNurse(id);
        try {
            foundNurse.setName(nurse.getName());
            foundNurse.setLastName(nurse.getLastName());
            foundNurse.setEmail(nurse.getEmail());
            foundNurse.setPhoneNumber(nurse.getPhoneNumber());
            foundNurse.setLicenseNumber(nurse.getLicenseNumber());
            foundNurse.setGender(nurse.getGender());
            foundNurse.setAddress(nurse.getAddress());
            foundNurse.setPrice(nurse.getPrice());
            foundNurse.setRating(nurse.getRating());
            foundNurse.setImg(nurse.getImg());

            nurseService.saveNurse(foundNurse);
            return ResponseEntity.ok(foundNurse);

        } catch (IllegalArgumentException e) {
            return ResponseEntity.notFound().build();
        }
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteNurse(@PathVariable Long id) {
        try {
            nurseService.deleteCart(id);
            return ResponseEntity.noContent().build();
        } catch (IllegalArgumentException e) {
            return ResponseEntity.notFound().build();
        }
    }


}
