package com.copbot.service;

import org.springframework.stereotype.Service;

@Service
public class ChatbotService {

    private static final String DEFAULT_REPLY =
            "Please contact nearest police station or official portal.";

    public String ask(String question) {
        if (question == null || question.isBlank()) {
            return DEFAULT_REPLY;
        }

        String q = question.toLowerCase().trim();

        if (containsAny(q, "fir", "first information report", "complaint register")) {
            return "FIR (First Information Report) registration is FREE of charge in Tamil Nadu. "
                    + "Visit your nearest police station with valid ID proof. For cognizable offences, "
                    + "police must register FIR. You are entitled to a free copy of the FIR. "
                    + "Women can also file FIR at any police station regardless of jurisdiction.";
        }

        if (containsAny(q, "arrest", "detain", "custody", "handcuff")) {
            return "Arrest Rights: Police must inform you of the grounds of arrest. "
                    + "You have the right to meet a lawyer. Women can only be arrested by a woman officer "
                    + "between 6 AM and 6 PM (with exceptions). A medical examination is mandatory. "
                    + "You must be produced before a magistrate within 24 hours.";
        }

        if (containsAny(q, "fee", "fees", "charge", "cost", "payment", "fine amount")) {
            return "FIR registration is FREE. Character certificates and passport verification have "
                    + "nominal government fees. Traffic fines vary by offence (e.g., helmet: Rs.500, "
                    + "signal jump: Rs.500-1000). No police officer can demand unofficial payment. "
                    + "Check the Fees page for official charges.";
        }

        if (containsAny(q, "women", "woman", "safety", "harassment", "domestic", "dowry")) {
            return "Women Safety Rights: Dial 100 or 1091 (Women Helpline). Zero FIR can be filed at any station. "
                    + "Domestic violence complaints can be filed under Protection of Women Act. "
                    + "Police must provide protection and cannot refuse to register complaints. "
                    + "Night arrests of women require special procedures.";
        }

        if (containsAny(q, "cyber", "cybercrime", "online fraud", "hacking", "phishing", "digital")) {
            return "Cybercrime Complaint Steps: 1) Call 1930 (Cyber Financial Fraud Helpline) for online fraud. "
                    + "2) File complaint at cybercrime.gov.in. 3) Visit Tamil Nadu Cyber Crime Wing with evidence "
                    + "(screenshots, URLs, transaction IDs). 4) Register FIR at local police station. "
                    + "Preserve digital evidence without altering it.";
        }

        if (containsAny(q, "traffic", "vehicle", "license", "dl", "rash driving", "speed")) {
            return "Traffic Fine Examples (Tamil Nadu): No helmet – Rs.500; No seatbelt – Rs.500; "
                    + "Drunk driving – Rs.10,000 + imprisonment; Rash driving – Rs.1,000-5,000; "
                    + "Using mobile while driving – Rs.1,000. Pay only through official challan or online portals.";
        }

        if (containsAny(q, "bail", "anticipatory")) {
            return "Bail information depends on offence type (bailable/non-bailable). "
                    + "Consult a legal aid lawyer or visit the nearest court help desk for case-specific advice.";
        }

        if (containsAny(q, "helpline", "emergency", "100", "112")) {
            return "Emergency Numbers: Police – 100; All-in-one Emergency – 112; "
                    + "Women Helpline – 1091; Cyber Crime – 1930; Child Helpline – 1098.";
        }

        return DEFAULT_REPLY;
    }

    private boolean containsAny(String text, String... keywords) {
        for (String keyword : keywords) {
            if (text.contains(keyword)) {
                return true;
            }
        }
        return false;
    }
}
