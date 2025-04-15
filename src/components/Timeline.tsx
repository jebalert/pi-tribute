import styled from '@emotion/styled';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const timelineData = [
  {
    year: "2000 BCE",
    title: "Ancient Babylonians",
    description: "Used the value 3.125 for π in calculations."
  },
  {
    year: "250 BCE",
    title: "Archimedes",
    description: "Developed the first rigorous approach to calculating π using polygons."
  },
  {
    year: "1400 CE",
    title: "Madhava of Sangamagrama",
    description: "First used infinite series to calculate π, reaching 11 decimal places."
  },
  {
    year: "1706",
    title: "William Jones",
    description: "First used the Greek letter π to represent the constant."
  },
  {
    year: "1882",
    title: "Ferdinand von Lindemann",
    description: "Proved that π is transcendental, solving the ancient problem of circle squaring."
  },
  {
    year: "2019",
    title: "Google Cloud",
    description: "Calculated π to 31.4 trillion digits, setting a world record."
  },
  {
    year: "2021",
    title: "University of Applied Sciences",
    description: "Scientists in Switzerland calculated π to 62.8 trillion digits, breaking the previous record."
  },
  {
    year: "2022",
    title: "Pi in Quantum Computing",
    description: "Researchers used quantum computers to explore new methods of calculating π, opening new frontiers in computation."
  },
  {
    year: "2023",
    title: "AI and Pi",
    description: "Machine learning models discovered new patterns in π's digits, contributing to number theory research."
  },
  {
    year: "2024",
    title: "Modern Applications",
    description: "π continues to be crucial in quantum physics, space exploration, and artificial intelligence algorithms."
  },
  {
    year: "2025",
    title: "mmmpi.com Launch",
    description: "Launch of mmmpi.com, a dedicated digital tribute celebrating the rich history and endless fascination of π through interactive visualizations and storytelling."
  }
];

const TimelineContainer = styled.div`
  padding: 4rem 0;
  width: 100%;
  max-width: 1000px;
  margin: 0 auto;
  position: relative;

  &::before {
    content: '';
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    width: 2px;
    height: 100%;
    background: linear-gradient(
      to bottom,
      transparent,
      #61dafb,
      #61dafb,
      transparent
    );
    opacity: 0.5;
    z-index: 1;
  }
`;

const TimelineItem = styled(motion.div)`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 2rem 0;
  width: 100%;
  padding: 0;
  position: relative;
  z-index: 2;
  transform-style: preserve-3d;
  will-change: transform, opacity;

  &:nth-of-type(even) {
    flex-direction: row-reverse;
    .content {
      text-align: right;
    }
  }
`;

const Year = styled.div`
  font-size: 1.5rem;
  font-weight: bold;
  color: #61dafb;
  min-width: 120px;
  display: flex;
  align-items: center;
  position: relative;
  z-index: 3;
  justify-content: ${props => props.className === 'year' ? 'flex-end' : 'flex-start'};
  padding: ${props => props.className === 'year' ? '0 32px 0 0' : '0 0 0 32px'};

  &::after {
    content: '';
    position: absolute;
    width: 14px;
    height: 14px;
    background: #61dafb;
    border-radius: 50%;
    top: 50%;
    transform: translateY(-50%);
    left: ${props => props.className === 'year' ? 'auto' : '-22px'};
    right: ${props => props.className === 'year' ? '-22px' : 'auto'};
    box-shadow: 0 0 20px rgba(97, 218, 251, 0.5);
    z-index: 2;
    background: radial-gradient(circle at center, #61dafb, #61dafb);
  }
`;

const Content = styled.div`
  background: rgba(255, 255, 255, 0.1);
  padding: 1.5rem;
  border-radius: 8px;
  width: 350px;
  backdrop-filter: blur(10px);
  transition: all 0.3s ease;
  position: relative;
  margin: 0 1rem;
  z-index: 3;
  transform: translateZ(0);

  &:hover {
    transform: translateY(-5px);
    background: rgba(255, 255, 255, 0.15);
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
  }

  &::before {
    content: '';
    position: absolute;
    top: 50%;
    width: 30px;
    height: 2px;
    background: #61dafb;
    opacity: 0.5;
    z-index: 2;
  }

  &.content::before {
    right: -30px;
  }

  &:not(.content)::before {
    left: -30px;
  }

  @media (max-width: 768px) {
    width: 280px;
  }
`;

const Title = styled.h3`
  margin: 0 0 1rem 0;
  color: #61dafb;
  font-size: 1.2rem;
`;

const Description = styled.p`
  margin: 0;
  line-height: 1.6;
  font-size: 0.95rem;
  opacity: 0.9;
`;

const Timeline = () => {
  return (
    <TimelineContainer>
      <motion.h2
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      >
        The Journey Through Time
      </motion.h2>
      {timelineData.map((item, index) => {
        const [ref, inView] = useInView({
          triggerOnce: true,
          threshold: 0.1,
          rootMargin: "-50px",
        });

        return (
          <TimelineItem
            key={item.year}
            ref={ref}
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ 
              duration: 0.4,
              delay: Math.min(index * 0.1, 0.3),
              ease: "easeOut"
            }}
          >
            <Year className={index % 2 === 0 ? 'year' : ''}>{item.year}</Year>
            <Content className={index % 2 === 0 ? 'content' : ''}>
              <Title>{item.title}</Title>
              <Description>{item.description}</Description>
            </Content>
          </TimelineItem>
        );
      })}
    </TimelineContainer>
  );
};

export default Timeline; 