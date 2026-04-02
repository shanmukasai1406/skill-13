package com.klu.fullstack.controller;

import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api")
@CrossOrigin(origins = "http://localhost:3000")
public class MessageController {

    @GetMapping("/message")
    public String getMessage() {
        return "Backend is working!";
    }
}