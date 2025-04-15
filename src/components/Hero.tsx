import styled from '@emotion/styled';
import { motion } from 'framer-motion';

const HeroContainer = styled.div`
  height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  background: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)),
    url('/images/math-bg.jpg');
  background-size: cover;
  background-position: center;
`;

const Title = styled(motion.h1)`
  font-size: 8rem;
  margin: 0;
  font-family: 'Times New Roman', serif;
  
  @media (max-width: 768px) {
    font-size: 6rem;
  }
`;

const Subtitle = styled(motion.p)`
  font-size: 1.5rem;
  max-width: 800px;
  width: 90%;
  line-height: 1.6;
  margin: 2rem auto;
  
  @media (max-width: 768px) {
    font-size: 1.2rem;
    margin: 1.5rem auto;
    width: 85%;
  }
`;

const Hero = () => {
  return (
    <HeroContainer>
      <Title
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1, type: 'spring' }}
      >
        π
      </Title>
      <Subtitle
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.8 }}
      >
        Discover the infinite journey of π (pi), the mathematical constant that has
        fascinated minds for millennia. From ancient civilizations to modern
        computing, explore the endless story of this remarkable number.
      </Subtitle>
    </HeroContainer>
  );
};

export default Hero; 