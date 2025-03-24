import React, { useEffect, useRef } from 'react';

import { Particle } from '@/services';
import { RadiantParticleProps } from '@/types/PropsTypes';

// Thanks ChatGPT for this component
function RadiantParticle({
  width,
  height,
  speed = 2,
  size = 2,
}: RadiantParticleProps): React.JSX.Element {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) {
      return;
    }

    const ctx = canvas.getContext('2d');
    if (!ctx) {
      return;
    }

    canvas.width = width;
    canvas.height = height;

    const particles: Particle[] = [];

    function animate(): void {
      if (!canvas || !ctx) {
        return;
      }
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      for (let i = particles.length - 1; i >= 0; i--) {
        particles[i].update();
        particles[i].draw(ctx);
        if (particles[i].size < 0.5 || particles[i].opacity <= 0) {
          particles.splice(i, 1);
        }
      }
      requestAnimationFrame(animate);
    }

    function createParticles(): void {
      if (!canvas) {
        return;
      }
      const centerX = canvas.width / 2;
      const centerY = canvas.height / 2;
      for (let i = 0; i < 5; i++) {
        particles.push(new Particle(centerX, centerY, size, speed));
      }
    }

    const interval = setInterval(createParticles, 100);
    animate();

    return (): void => clearInterval(interval);
  }, [width, height, size, speed]);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        pointerEvents: 'none',
      }}
    />
  );
}

export default React.memo(RadiantParticle);
