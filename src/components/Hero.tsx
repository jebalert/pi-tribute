import styled from '@emotion/styled';
import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';

const HeroContainer = styled.div`
  height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  background: linear-gradient(rgba(0, 0, 0, 0.9), rgba(0, 0, 0, 0.9));
  position: relative;
  overflow: hidden;
`;

const ContentContainer = styled.div`
  position: relative;
  width: 300px;
  height: 400px;
  display: flex;
  flex-direction: column;
  align-items: center;
  
  @media (max-width: 768px) {
    width: 200px;
    height: 300px;
  }
`;

const PieContainer = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 300px;
  height: 300px;
  
  @media (max-width: 768px) {
    width: 200px;
    height: 200px;
  }
`;

const PieImage = styled(motion.div)`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  display: grid;
  grid-template-columns: repeat(8, 1fr);
  grid-template-rows: repeat(8, 1fr);
  gap: 0;
`;

const PieFragment = styled(motion.div)`
  width: 100%;
  height: 100%;
  background-image: url('/images/apple-pie.png');
  background-size: 800% 800%;
  background-position: var(--x) var(--y);
`;

const Title = styled(motion.h1)`
  font-size: 8rem;
  margin: 0;
  font-family: 'Times New Roman', serif;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: #fff;
  text-shadow: 0 0 20px rgba(97, 218, 251, 0.5);
  
  @media (max-width: 768px) {
    font-size: 6rem;
  }
`;

const MmmText = styled(motion.h2)`
  font-size: 2.5rem;
  margin: 0;
  font-family: 'Times New Roman', serif;
  color: #fff;
  text-shadow: 0 0 10px rgba(97, 218, 251, 0.3);
  white-space: nowrap;
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  
  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

const Subtitle = styled(motion.p)`
  font-size: 1.5rem;
  max-width: 800px;
  width: 90%;
  line-height: 1.6;
  margin: 0 auto;
  
  @media (max-width: 768px) {
    font-size: 1.2rem;
    width: 85%;
  }
`;

const Hero = () => {
  const [showPie, setShowPie] = useState(true);
  const [showMmm, setShowMmm] = useState(false);
  const [showPi, setShowPi] = useState(false);
  
  useEffect(() => {
    const timer1 = setTimeout(() => {
      setShowMmm(true);
    }, 1000);

    const timer2 = setTimeout(() => {
      setShowPie(false);
      setTimeout(() => setShowPi(true), 500);
    }, 2000);
    
    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
    };
  }, []);

  const fragments = Array.from({ length: 64 }, (_, i) => {
    const x = (i % 8) * -100;
    const y = Math.floor(i / 8) * -100;
    return { x, y, i };
  });

  return (
    <HeroContainer>
      <ContentContainer>
        <PieContainer>
          <AnimatePresence>
            {showPie && (
              <PieImage
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
              >
                {fragments.map(({ x, y, i }) => (
                  <PieFragment
                    key={i}
                    style={{ '--x': `${x}%`, '--y': `${y}%` } as any}
                    exit={{
                      opacity: 0,
                      scale: 0,
                      x: (Math.random() - 0.5) * 500,
                      y: (Math.random() - 0.5) * 500,
                      rotate: Math.random() * 360,
                    }}
                    transition={{
                      duration: 0.8,
                      delay: i * 0.01,
                      ease: [0.23, 1, 0.32, 1]
                    }}
                  />
                ))}
              </PieImage>
            )}
          </AnimatePresence>
          <AnimatePresence>
            {showPi && (
              <Title
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{
                  duration: 0.8,
                  type: "spring",
                  bounce: 0.4
                }}
              >
                π
              </Title>
            )}
          </AnimatePresence>
        </PieContainer>
        <AnimatePresence>
          {showMmm && !showPi && (
            <MmmText
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
            >
              Mmm Pi.
            </MmmText>
          )}
        </AnimatePresence>
      </ContentContainer>
      <Subtitle
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 3, duration: 0.8 }}
      >
        Discover the infinite journey of π (pi), the mathematical constant that has
        fascinated minds for millennia. From ancient civilizations to modern
        computing, explore the endless story of this remarkable number.
      </Subtitle>
    </HeroContainer>
  );
};

export default Hero; 