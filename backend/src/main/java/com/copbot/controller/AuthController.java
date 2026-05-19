package com.copbot.controller;

import com.copbot.dto.ApiResponse;
import com.copbot.dto.LoginRequest;
import com.copbot.dto.SignupRequest;
import com.copbot.service.AuthService;
import jakarta.validation.Valid;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Map;

@RestController
@RequestMapping("/api/auth")
public class AuthController {

    private final AuthService authService;

    public AuthController(AuthService authService) {
        this.authService = authService;
    }

    @PostMapping("/signup")
    public ResponseEntity<ApiResponse<Map<String, Object>>> signup(@Valid @RequestBody SignupRequest request) {
        Map<String, Object> data = authService.signup(request);
        return ResponseEntity.ok(ApiResponse.ok("Signup successful", data));
    }

    @PostMapping("/login")
    public ResponseEntity<ApiResponse<Map<String, Object>>> login(@Valid @RequestBody LoginRequest request) {
        Map<String, Object> data = authService.login(request);
        return ResponseEntity.ok(ApiResponse.ok("Login successful", data));
    }
}
