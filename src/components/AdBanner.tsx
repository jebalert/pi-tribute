import styled from '@emotion/styled';
import { useEffect } from 'react';

declare global {
  interface Window {
    adsbygoogle: any[];
  }
}

const AdContainer = styled.div`
  width: 100%;
  min-height: 100px;
  margin: 2rem 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 8px;
  overflow: hidden;
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

  // Only render ad if AdSense is configured
  if (!import.meta.env.VITE_ADSENSE_PUB_ID) {
    return null;
  }

  return (
    <AdContainer>
      <ins
        className="adsbygoogle"
        style={{ display: 'block', width: '100%', height: '100%' }}
        data-ad-client={import.meta.env.VITE_ADSENSE_PUB_ID}
        data-ad-slot={import.meta.env.VITE_ADSENSE_SLOT}
        data-ad-format="auto"
        data-full-width-responsive="true"
      />
    </AdContainer>
  );
};

export default AdBanner; 