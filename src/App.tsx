import { useEffect } from 'react';
import styled from '@emotion/styled';
import Hero from './components/Hero';
import Timeline from './components/Timeline';
import Facts from './components/Facts';
import Visualizations from './components/Visualizations';
import AdBanner from './components/AdBanner';
import Footer from './components/Footer';

const AppContainer = styled.div`
  min-height: 100vh;
  background: linear-gradient(135deg, #1a1a2e 0%, #16213e 100%);
  color: #fff;
  overflow-x: hidden;
  position: relative;

  &::before {
    content: '';
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: radial-gradient(circle at 50% 50%, rgba(97, 218, 251, 0.1) 0%, rgba(26, 26, 46, 0) 50%);
    pointer-events: none;
    z-index: 1;
  }
`;

const MainWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ContentWrapper = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
  box-sizing: border-box;

  @media (min-width: 768px) {
    padding: 20px 40px;
  }

  & > * {
    width: 100%;
  }

  & > div {
    opacity: 0;
    transform: translateY(20px);
    animation: fadeInUp 0.6s ease forwards;
  }

  @keyframes fadeInUp {
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;

function App() {
  useEffect(() => {
    // Load Google AdSense script
    const script = document.createElement('script');
    script.src = 'https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js';
    script.async = true;
    script.crossOrigin = 'anonymous';
    document.head.appendChild(script);
  }, []);

  return (
    <AppContainer>
      <MainWrapper>
        <Hero />
        <ContentWrapper>
          <AdBanner />
          <Timeline />
          <AdBanner />
          <Facts />
          <AdBanner />
          <Visualizations />
          <AdBanner />
        </ContentWrapper>
        <Footer />
      </MainWrapper>
    </AppContainer>
  );
}

export default App;
