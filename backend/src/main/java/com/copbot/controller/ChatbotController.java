package com.copbot.controller;

import com.copbot.dto.ApiResponse;
import com.copbot.dto.ChatbotRequest;
import com.copbot.service.ChatbotService;
import jakarta.validation.Valid;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Map;

@RestController
@RequestMapping("/api/chatbot")
public class ChatbotController {

    private final ChatbotService chatbotService;

    public ChatbotController(ChatbotService chatbotService) {
        this.chatbotService = chatbotService;
    }

    @PostMapping("/ask")
    public ResponseEntity<ApiResponse<Map<String, String>>> ask(@Valid @RequestBody ChatbotRequest request) {
        String answer = chatbotService.ask(request.getQuestion());
        return ResponseEntity.ok(ApiResponse.ok("Answer generated", Map.of(
                "question", request.getQuestion(),
                "answer", answer
        )));
    }
}
