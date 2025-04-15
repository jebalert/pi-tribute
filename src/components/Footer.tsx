import { useState } from 'react';
import styled from '@emotion/styled';
import { keyframes } from '@emotion/react';
import PrivacyPolicy from './PrivacyPolicy';

const pulse = keyframes`
  0% { transform: scale(1); }
  50% { transform: scale(1.1); }
  100% { transform: scale(1); }
`;

const FooterContainer = styled.footer`
  text-align: center;
  padding: 2rem 0;
  font-size: 0.9rem;
  color: rgba(255, 255, 255, 0.8);
  font-family: 'Courier New', monospace;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
`;

const Heart = styled.span`
  display: inline-block;
  color: #ff6b6b;
  margin: 0 0.3rem;
  animation: ${pulse} 1.5s infinite;
  font-size: 1rem;

  &::before {
    content: '♥';
  }
`;

const PolicyLink = styled.button`
  background: none;
  border: none;
  color: #61dafb;
  font-size: 0.8rem;
  cursor: pointer;
  padding: 0;
  font-family: 'Courier New', monospace;
  text-decoration: underline;
  opacity: 0.8;
  transition: opacity 0.2s;

  &:hover {
    opacity: 1;
  }
`;

const Footer = () => {
  const [showPrivacyPolicy, setShowPrivacyPolicy] = useState(false);

  return (
    <FooterContainer>
      <div>
        Made with <Heart /> in North Carolina
      </div>
      <PolicyLink onClick={() => setShowPrivacyPolicy(true)}>
        Privacy Policy
      </PolicyLink>
      {showPrivacyPolicy && (
        <PrivacyPolicy onClose={() => setShowPrivacyPolicy(false)} />
      )}
    </FooterContainer>
  );
};

export default Footer; 