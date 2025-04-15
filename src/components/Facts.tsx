import styled from '@emotion/styled';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const FactsContainer = styled.div`
  padding: 4rem 0;
`;

const FactsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  margin-top: 2rem;
`;

const FactCard = styled(motion.div)`
  background: rgba(255, 255, 255, 0.1);
  padding: 2rem;
  border-radius: 12px;
  transition: transform 0.3s ease;
  cursor: pointer;

  &:hover {
    transform: translateY(-5px);
  }
`;

const FactTitle = styled.h3`
  color: #61dafb;
  margin: 0 0 1rem 0;
`;

const FactContent = styled.p`
  margin: 0;
  line-height: 1.6;
`;

const facts = [
  {
    title: "Infinite and Irrational",
    content: "π is an irrational number that continues infinitely without repetition or pattern."
  },
  {
    title: "Perfect Circle",
    content: "The ratio of any circle's circumference to its diameter is always π, regardless of size."
  },
  {
    title: "Ancient Knowledge",
    content: "The concept of π has been known to humanity for at least 4,000 years."
  },
  {
    title: "Pi in Nature",
    content: "π appears in many natural phenomena, from river meanders to the spiral of galaxies."
  },
  {
    title: "Memory Champions",
    content: "The world record for memorizing π is 70,000 digits, set by Rajveer Meena in 2015."
  },
  {
    title: "Pi Day",
    content: "March 14 (3/14) is celebrated as Pi Day, with many mathematical and educational events worldwide."
  }
];

const Facts = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <FactsContainer>
      <motion.h2
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        style={{ textAlign: 'center' }}
      >
        Fascinating Facts About π
      </motion.h2>
      <FactsGrid ref={ref}>
        {facts.map((fact, index) => (
          <FactCard
            key={fact.title}
            initial={{ opacity: 0, y: 50 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <FactTitle>{fact.title}</FactTitle>
            <FactContent>{fact.content}</FactContent>
          </FactCard>
        ))}
      </FactsGrid>
    </FactsContainer>
  );
};

export default Facts; 