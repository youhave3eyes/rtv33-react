import { useEffect, useRef } from 'react';

const SacredGeometry = ({ type = 'flower', size = 200, color = '#8338ec' }) => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    const centerX = size / 2;
    const centerY = size / 2;
    const radius = size / 5;

    ctx.clearRect(0, 0, size, size);
    ctx.strokeStyle = color;
    ctx.lineWidth = 2;
    ctx.globalAlpha = 0.6;

    if (type === 'flower') {
      // Flower of Life
      drawFlowerOfLife(ctx, centerX, centerY, radius);
    } else if (type === 'metatron') {
      // Metatron's Cube
      drawMetatronsCube(ctx, centerX, centerY, radius);
    } else if (type === 'seed') {
      // Seed of Life
      drawSeedOfLife(ctx, centerX, centerY, radius);
    }

    // Add glow effect
    ctx.shadowBlur = 15;
    ctx.shadowColor = color;
  }, [type, size, color]);

  const drawFlowerOfLife = (ctx, x, y, r) => {
    // Center circle
    ctx.beginPath();
    ctx.arc(x, y, r, 0, Math.PI * 2);
    ctx.stroke();

    // Six surrounding circles
    for (let i = 0; i < 6; i++) {
      const angle = (Math.PI / 3) * i;
      const cx = x + r * Math.cos(angle);
      const cy = y + r * Math.sin(angle);
      ctx.beginPath();
      ctx.arc(cx, cy, r, 0, Math.PI * 2);
      ctx.stroke();
    }

    // Outer ring of circles
    for (let i = 0; i < 6; i++) {
      const angle = (Math.PI / 3) * i;
      const cx = x + r * 2 * Math.cos(angle);
      const cy = y + r * 2 * Math.sin(angle);
      ctx.beginPath();
      ctx.arc(cx, cy, r, 0, Math.PI * 2);
      ctx.stroke();
    }
  };

  const drawSeedOfLife = (ctx, x, y, r) => {
    // Center circle
    ctx.beginPath();
    ctx.arc(x, y, r, 0, Math.PI * 2);
    ctx.stroke();

    // Six surrounding circles
    for (let i = 0; i < 6; i++) {
      const angle = (Math.PI / 3) * i;
      const cx = x + r * Math.cos(angle);
      const cy = y + r * Math.sin(angle);
      ctx.beginPath();
      ctx.arc(cx, cy, r, 0, Math.PI * 2);
      ctx.stroke();
    }
  };

  const drawMetatronsCube = (ctx, x, y, r) => {
    const points = [];
    
    // Generate circle points
    for (let i = 0; i < 6; i++) {
      const angle = (Math.PI / 3) * i;
      points.push({
        x: x + r * 1.5 * Math.cos(angle),
        y: y + r * 1.5 * Math.sin(angle)
      });
    }
    
    // Add center point
    points.push({ x, y });

    // Draw all connecting lines
    for (let i = 0; i < points.length; i++) {
      for (let j = i + 1; j < points.length; j++) {
        ctx.beginPath();
        ctx.moveTo(points[i].x, points[i].y);
        ctx.lineTo(points[j].x, points[j].y);
        ctx.stroke();
      }
    }

    // Draw circles at each point
    points.forEach(point => {
      ctx.beginPath();
      ctx.arc(point.x, point.y, r / 4, 0, Math.PI * 2);
      ctx.stroke();
    });
  };

  return (
    <canvas
      ref={canvasRef}
      width={size}
      height={size}
      style={{
        filter: `drop-shadow(0 0 10px ${color})`,
        animation: 'rotate-sacred 60s linear infinite'
      }}
    />
  );
};

export default SacredGeometry;
