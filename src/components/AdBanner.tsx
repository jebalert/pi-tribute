import styled from '@emotion/styled';
import { useEffect } from 'react';

declare global {
  interface Window {
    adsbygoogle: any[];
  }
}

const AdContainer = styled.div`
  width: 100%;
  min-height: 120px;
  margin: 3rem 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgba(255, 255, 255, 0.08);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 12px;
  overflow: hidden;
  backdrop-filter: blur(10px);
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;

  @media (max-width: 768px) {
    margin: 2rem 0;
    min-height: 100px;
  }

  &:hover {
    background: rgba(255, 255, 255, 0.12);
    border-color: rgba(255, 255, 255, 0.15);
    box-shadow: 0 8px 32px rgba(97, 218, 251, 0.1);
  }
`;

const PlaceholderText = styled.div`
  color: rgba(255, 255, 255, 0.5);
  font-size: 0.9rem;
  padding: 2rem;
  text-align: center;
`;

const AdBanner = () => {
  useEffect(() => {
    try {
      if (window.adsbygoogle && import.meta.env.VITE_ADSENSE_PUB_ID) {
        window.adsbygoogle.push({});
      }
    } catch (error) {
      console.error('Error loading ad:', error);
    }
  }, []);

  return (
    <AdContainer>
      {import.meta.env.VITE_ADSENSE_PUB_ID ? (
        <ins
          className="adsbygoogle"
          style={{ display: 'block', width: '100%', height: '100%' }}
          data-ad-client={import.meta.env.VITE_ADSENSE_PUB_ID}
          data-ad-slot={import.meta.env.VITE_ADSENSE_SLOT}
          data-ad-format="auto"
          data-full-width-responsive="true"
        />
      ) : (
        <PlaceholderText>
          Advertisement Space
        </PlaceholderText>
      )}
    </AdContainer>
  );
};

export default AdBanner; 