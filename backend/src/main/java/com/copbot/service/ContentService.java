package com.copbot.service;

import com.copbot.model.Faq;
import com.copbot.model.Fee;
import com.copbot.model.Right;
import com.copbot.repository.FaqRepository;
import com.copbot.repository.FeeRepository;
import com.copbot.repository.RightRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ContentService {

    private final RightRepository rightRepository;
    private final FeeRepository feeRepository;
    private final FaqRepository faqRepository;

    public ContentService(RightRepository rightRepository,
                            FeeRepository feeRepository,
                            FaqRepository faqRepository) {
        this.rightRepository = rightRepository;
        this.feeRepository = feeRepository;
        this.faqRepository = faqRepository;
    }

    public List<Right> getAllRights() {
        return rightRepository.findAll();
    }

    public List<Fee> getAllFees() {
        return feeRepository.findAll();
    }

    public List<Faq> getAllFaqs() {
        return faqRepository.findAll();
    }
}
