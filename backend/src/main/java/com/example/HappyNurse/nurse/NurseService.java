package com.example.HappyNurse.nurse;

import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class NurseService {

    private final NurseRepository nurseRepository;

    public NurseService(NurseRepository nurseRepository) {
        this.nurseRepository = nurseRepository;
    }

    public List<Nurse> getAllNurses() {
        return nurseRepository.findAll();
    }

    public Nurse saveNurse(Nurse nurse) {
        return nurseRepository.save(nurse);
    }

    public Nurse findNurse(Long id) {
        return nurseRepository.findNurseById(id);
    }

    public void deleteCart(Long id) {
        Nurse foundNurse = findNurse(id);
        if (foundNurse == null) {
            throw new IllegalArgumentException("cart, not found");
        }
        nurseRepository.deleteById(id);
    }
}
