package com.copbot.controller;

import com.copbot.dto.ApiResponse;
import com.copbot.model.Faq;
import com.copbot.model.Fee;
import com.copbot.model.Right;
import com.copbot.service.ContentService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/api")
public class ContentController {

    private final ContentService contentService;

    public ContentController(ContentService contentService) {
        this.contentService = contentService;
    }

    @GetMapping("/rights")
    public ResponseEntity<ApiResponse<List<Right>>> getRights() {
        return ResponseEntity.ok(ApiResponse.ok("Rights fetched", contentService.getAllRights()));
    }

    @GetMapping("/fees")
    public ResponseEntity<ApiResponse<List<Fee>>> getFees() {
        return ResponseEntity.ok(ApiResponse.ok("Fees fetched", contentService.getAllFees()));
    }

    @GetMapping("/faqs")
    public ResponseEntity<ApiResponse<List<Faq>>> getFaqs() {
        return ResponseEntity.ok(ApiResponse.ok("FAQs fetched", contentService.getAllFaqs()));
    }
}
