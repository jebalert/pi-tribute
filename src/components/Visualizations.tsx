import { useEffect, useRef } from 'react';
import styled from '@emotion/styled';
import { motion } from 'framer-motion';
import gsap from 'gsap';

const VisualizationsContainer = styled.div`
  padding: 4rem 0;
`;

const CanvasContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  margin-top: 2rem;
`;

const VisualizationCard = styled.div`
  background: rgba(255, 255, 255, 0.1);
  padding: 1rem;
  border-radius: 12px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Canvas = styled.canvas`
  width: 100%;
  max-width: 300px;
  height: 300px;
  margin: 1rem 0;
`;

const Title = styled.h3`
  color: #61dafb;
  margin: 0 0 1rem 0;
  text-align: center;
`;

const Description = styled.p`
  margin: 0;
  text-align: center;
  line-height: 1.6;
`;

const Visualizations = () => {
  const circleRef = useRef<HTMLCanvasElement>(null);
  const spiralRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (circleRef.current) {
      const ctx = circleRef.current.getContext('2d');
      if (ctx) {
        const drawCircle = () => {
          ctx.clearRect(0, 0, 300, 300);
          ctx.beginPath();
          ctx.arc(150, 150, 100, 0, Math.PI * 2);
          ctx.strokeStyle = '#61dafb';
          ctx.lineWidth = 2;
          ctx.stroke();
          
          // Draw diameter
          ctx.beginPath();
          ctx.moveTo(50, 150);
          ctx.lineTo(250, 150);
          ctx.strokeStyle = '#ff6b6b';
          ctx.stroke();
          
          // Draw circumference marker
          const angle = performance.now() / 1000;
          const x = 150 + 100 * Math.cos(angle);
          const y = 150 + 100 * Math.sin(angle);
          ctx.beginPath();
          ctx.arc(x, y, 5, 0, Math.PI * 2);
          ctx.fillStyle = '#4cd137';
          ctx.fill();
        };

        gsap.ticker.add(drawCircle);
        return () => gsap.ticker.remove(drawCircle);
      }
    }
  }, []);

  useEffect(() => {
    if (spiralRef.current) {
      const ctx = spiralRef.current.getContext('2d');
      if (ctx) {
        const drawSpiral = () => {
          ctx.clearRect(0, 0, 300, 300);
          ctx.beginPath();
          ctx.translate(150, 150);
          
          let theta = 0;
          while (theta < Math.PI * 8) {
            const r = 5 * theta;
            const x = r * Math.cos(theta);
            const y = r * Math.sin(theta);
            if (theta === 0) {
              ctx.moveTo(x, y);
            } else {
              ctx.lineTo(x, y);
            }
            theta += 0.1;
          }
          
          ctx.strokeStyle = '#61dafb';
          ctx.lineWidth = 2;
          ctx.stroke();
          ctx.setTransform(1, 0, 0, 1, 0, 0);
        };

        drawSpiral();
      }
    }
  }, []);

  return (
    <VisualizationsContainer>
      <motion.h2
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        style={{ textAlign: 'center' }}
      >
        Visual Journey of π
      </motion.h2>
      <CanvasContainer>
        <VisualizationCard>
          <Title>Circle and π</Title>
          <Canvas ref={circleRef} width={300} height={300} />
          <Description>
            Watch how π defines the relationship between a circle's circumference
            and its diameter.
          </Description>
        </VisualizationCard>
        <VisualizationCard>
          <Title>Spiral of π</Title>
          <Canvas ref={spiralRef} width={300} height={300} />
          <Description>
            A spiral visualization showing the infinite nature of π through its
            decimal expansion.
          </Description>
        </VisualizationCard>
      </CanvasContainer>
    </VisualizationsContainer>
  );
};

export default Visualizations; 