import React, { useState } from 'react';
import './PageTerm.css';

function PageTerm() {
  const [isOpen, setIsOpen] = useState(0);
  
  return (
    <>
        <div className='TermsCondition'>
            <h1 style={{margin: 0, marginTop: 15}}>Terms and Condition</h1>
            <p style={{margin: 5}}><i>Last Updated: May 5, 2025</i></p>
            <div className='Paragraphs'>
            <p style={{textAlign: 'justify', textIndent: '5%'}}><strong>Introduction:</strong> These Website Standard Terms and Conditions written on this webpage shall manage your use of this website. These Terms will be applied fully and affect your use of this Website. By using this Website, you agree to accept all terms and conditions written here. You must not use this Website if you disagree with any of these Website Standard Terms and Conditions.</p>
                <h3>1. Eligibility</h3>
                <ul>
                    <li>You must be at least 18 years old to create an account.</li>
                    <li>If you are below 18, you must have parental or guardian consent.</li>
                    <li>You must reside in the Philippines or have legal rights to use our platform.</li>
                </ul>
                <h3>2. Account Registration</h3>
                <ul>
                    <li>All information you provide must be accurate and up to date.</li>
                    <li>You are responsible for keeping your password and login secure.</li>
                    <li>You agree not to share your login credentials with others.</li>
                </ul>

                <h3>3. Acceptable Use</h3>
                <ul>
                    <li>You will not use your account for any unlawful purposes.</li>
                    <li>You agree not to impersonate others or provide false information.</li>
                    <li>Any misuse of the platform may lead to account suspension or termination.</li>
                </ul>

                <h3>4. Data Privacy</h3>
                <ul>
                    <li>Your personal data will be collected and used in accordance with the <a href="https://privacy.gov.ph/data-privacy-act/" target="_blank" rel="noopener noreferrer">Data Privacy Act of 2012 (RA 10173)</a>.</li>
                    <li>We will use your data only for managing your account, communicating with you, and improving our services.</li>
                    <li>Your information will never be sold or shared without your consent unless required by law.</li>
                </ul>

                <h3>5. Account Termination</h3>
                <ul>
                    <li>You may request account deletion at any time by contacting our support.</li>
                    <li>We reserve the right to suspend or remove accounts that violate our terms, are inactive, or pose a security risk.</li>
                </ul>

                <h3>6. User Responsibilities</h3>
                <ul>
                    <li>You are responsible for any activity that happens under your account.</li>
                    <li>You will not attempt to gain unauthorized access to other user accounts or data.</li>
                </ul>

                <h3>7. Intellectual Property</h3>
                <ul>
                    <li>All content on the site (logo, designs, text, etc.) belongs to KER-C Printing Services.</li>
                    <li>You may not use, copy, or reproduce our materials without permission.</li>
                </ul>

                <h3>8. Limitation of Liability</h3>
                <ul>
                    <li>We are not liable for any damages resulting from account misuse, unauthorized access, or service downtime.</li>
                    <li>You agree to use the platform at your own risk.</li>
                </ul>

                <h3>9. Changes to the Terms</h3>
                <ul>
                    <li>We may update these terms from time to time.</li>
                    <li>Continued use of your account means you accept the changes.</li>
                </ul>

                <h3>10. Governing Law</h3>
                <ul>
                    <li>These terms are governed by the laws of the Republic of the Philippines.</li>
                    <li>Legal disputes will be settled under the jurisdiction of Davao del Norte.</li>
                </ul>
                <p style={{textAlign: 'left', marginTop: '5%'}}><b>Note:</b> You must agree to these terms to proceed with registration.</p>
            </div>
        </div>
    </>
  )
}

export default PageTerm