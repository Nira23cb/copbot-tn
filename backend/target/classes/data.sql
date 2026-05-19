-- CopBot TN - Sample data (content tables reset on each startup for demo)
TRUNCATE TABLE faqs;
TRUNCATE TABLE rights;
TRUNCATE TABLE fees;

-- Citizen rights
INSERT INTO rights (title, description) VALUES
('Right to Free FIR', 'Registering an FIR is completely FREE. No police officer can charge money for FIR registration. You are entitled to a free copy of the FIR.'),
('Rights During Arrest', 'Police must inform grounds of arrest, allow lawyer consultation, conduct medical exam, and produce you before magistrate within 24 hours. Women have additional protections under law.'),
('Women Safety Rights', 'Women can file Zero FIR at any police station. Dial 1091 for Women Helpline. Police cannot refuse domestic violence or harassment complaints. Night arrest rules apply for women.'),
('Cybercrime Complaint', 'For online fraud call 1930 immediately. File at cybercrime.gov.in and visit TN Cyber Crime Wing with screenshots, URLs, and transaction proof. Preserve digital evidence.'),
('Right to Legal Aid', 'If you cannot afford a lawyer, you may request free legal aid through the District Legal Services Authority. This is available in criminal cases.'),
('No Unofficial Payments', 'Police services like FIR filing are free. Officers demanding bribes can be reported to vigilance or call Tamil Nadu Police grievance helpline.');

-- Fees and charges
INSERT INTO fees (type, amount, description) VALUES
('FIR Registration', 'FREE', 'First Information Report registration has no fee. It is a fundamental right of every citizen.'),
('Passport Verification', 'Rs. 1,000 - 1,500', 'Official fee for police verification for passport (as per government notification).'),
('Character Certificate', 'Rs. 100 - 500', 'Nominal fee varies by district for resident/character certificate.'),
('Traffic - No Helmet', 'Rs. 500', 'Penalty for riding two-wheeler without ISI-marked helmet under MV Act.'),
('Traffic - Signal Jump', 'Rs. 500 - 1,000', 'Penalty for jumping red light or stop line violation.'),
('Traffic - Drunk Driving', 'Rs. 10,000 + imprisonment', 'First offence drunk driving penalty; license may be suspended.'),
('Traffic - Rash Driving', 'Rs. 1,000 - 5,000', 'Dangerous driving or racing on public roads.'),
('Traffic - Mobile While Driving', 'Rs. 1,000', 'Using mobile phone while driving a motor vehicle.');

-- FAQs
INSERT INTO faqs (question, answer) VALUES
('Is FIR registration free in Tamil Nadu?', 'Yes. FIR registration is completely FREE. No police officer can legally demand money for registering an FIR.'),
('What is Zero FIR?', 'Zero FIR allows you to file an FIR at any police station regardless of where the crime occurred. It is later transferred to the correct jurisdiction.'),
('What should I do if police refuse to register FIR?', 'You can approach the Superintendent of Police (SP) or file a complaint with the Magistrate under Section 156(3) CrPC.'),
('How do I report cybercrime?', 'Call 1930 for financial cyber fraud. Register at https://cybercrime.gov.in and visit your local cyber crime police station with evidence.'),
('What are my rights when arrested?', 'You must be told why you are arrested, allowed to contact a lawyer, medically examined, and produced before a magistrate within 24 hours.'),
('What is the women helpline number?', 'Dial 1091 for Tamil Nadu Women Helpline. For emergencies dial 100 or 112.'),
('How can I pay traffic fines officially?', 'Pay through Tamil Nadu traffic police e-challan portal or at designated government counters. Avoid paying unofficially to individuals.'),
('Can I file FIR online in Tamil Nadu?', 'Certain complaint types can be initiated online through Tamil Nadu Police citizen portals; serious cognizable offences may require station visit for FIR number.');
