import styled from '@emotion/styled';

const PolicyContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.8);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
  padding: 20px;
`;

const PolicyContent = styled.div`
  background: linear-gradient(135deg, #1a1a2e 0%, #16213e 100%);
  padding: 2rem;
  border-radius: 12px;
  max-width: 800px;
  max-height: 80vh;
  overflow-y: auto;
  color: #fff;
  border: 1px solid rgba(97, 218, 251, 0.2);
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3);

  h2 {
    color: #61dafb;
    margin-bottom: 1.5rem;
  }

  h3 {
    color: #61dafb;
    margin: 1.5rem 0 1rem;
  }

  p {
    margin: 1rem 0;
    line-height: 1.6;
  }

  ul {
    margin: 1rem 0;
    padding-left: 1.5rem;
  }

  li {
    margin: 0.5rem 0;
  }
`;

const CloseButton = styled.button`
  position: absolute;
  top: 20px;
  right: 20px;
  background: transparent;
  border: none;
  color: #fff;
  font-size: 1.5rem;
  cursor: pointer;
  padding: 10px;
  transition: transform 0.2s;

  &:hover {
    transform: scale(1.1);
  }
`;

interface PrivacyPolicyProps {
  onClose: () => void;
}

const PrivacyPolicy = ({ onClose }: PrivacyPolicyProps) => {
  return (
    <PolicyContainer onClick={onClose}>
      <PolicyContent onClick={(e) => e.stopPropagation()}>
        <CloseButton onClick={onClose}>×</CloseButton>
        <h2>Privacy Policy</h2>
        <p>Last updated: {new Date().toLocaleDateString()}</p>

        <h3>Introduction</h3>
        <p>Welcome to mmmpi.com. This privacy policy explains how our website operates and how we handle visitor privacy.</p>

        <h3>Information Collection</h3>
        <p>We do not collect or store any personal information. Our site operates with:</p>
        <ul>
          <li>No user accounts or login systems</li>
          <li>No contact forms or data collection tools</li>
          <li>No tracking cookies from our website itself</li>
        </ul>

        <h3>Third-Party Services</h3>
        <p>We use Google AdSense to display advertisements:</p>
        <ul>
          <li>Google AdSense may use cookies to show relevant ads based on your browsing</li>
          <li>This is handled entirely by Google and we have no access to this data</li>
          <li>You can learn more about Google's advertising practices or opt out of personalized advertising by visiting <a href="https://www.google.com/settings/ads" target="_blank" rel="noopener noreferrer" style={{ color: '#61dafb' }}>Google Ads Settings</a></li>
        </ul>

        <h3>Automatic Information</h3>
        <p>Your web browser automatically shares some basic information with any website you visit:</p>
        <ul>
          <li>Browser type and version</li>
          <li>Operating system</li>
          <li>Screen resolution</li>
          <li>This technical information is not stored or tracked by us</li>
        </ul>

        <h3>Your Privacy</h3>
        <p>We believe in transparent privacy practices:</p>
        <ul>
          <li>We don't collect personal information</li>
          <li>We don't use tracking cookies</li>
          <li>We don't share or sell any data (because we don't collect any)</li>
          <li>Our site is informational only - you can browse freely and anonymously</li>
        </ul>

        <h3>Changes to This Policy</h3>
        <p>If we make any changes to how our site operates regarding privacy, we will update this policy and the date above.</p>

        <h3>Contact</h3>
        <p>For questions about this privacy policy, you can reach us through our website.</p>
      </PolicyContent>
    </PolicyContainer>
  );
};

export default PrivacyPolicy; 