import { useEffect, useRef } from 'react';

const MatrixRain = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    
    // Set canvas size
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    // Matrix characters - including Japanese katakana, numbers, and symbols
    const matrixChars = 'アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲン0123456789@#$%^&*()_+-=[]{}|;:,.<>?';
    const chars = matrixChars.split('');

    const fontSize = 14;
    const columns = canvas.width / fontSize;

    // Array to store y-coordinate of each column
    const drops = Array(Math.floor(columns)).fill(1);

    // Drawing the characters
    function draw() {
      // Black background with transparency for trail effect
      ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Set text style
      ctx.fillStyle = '#0F0'; // Green text
      ctx.font = fontSize + 'px monospace';

      // Loop through drops
      for (let i = 0; i < drops.length; i++) {
        // Random character
        const text = chars[Math.floor(Math.random() * chars.length)];
        
        // Draw character
        const x = i * fontSize;
        const y = drops[i] * fontSize;
        
        // Add glow effect for random characters
        if (Math.random() > 0.975) {
          ctx.shadowBlur = 10;
          ctx.shadowColor = '#0F0';
          ctx.fillStyle = '#0FFF50'; // Brighter green
        } else {
          ctx.shadowBlur = 0;
          ctx.fillStyle = '#00FF41'; // Normal green
        }
        
        ctx.fillText(text, x, y);

        // Reset drop to top randomly after it crosses the screen
        // or randomly with low probability
        if (y > canvas.height && Math.random() > 0.975) {
          drops[i] = 0;
        }
        
        // Increment Y coordinate
        drops[i]++;
      }
    }

    // Animation loop
    const intervalId = setInterval(draw, 35);

    // Handle resize
    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      drops.length = Math.floor(canvas.width / fontSize);
      drops.fill(1);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      clearInterval(intervalId);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="matrix-canvas"
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        zIndex: -1,
        opacity: 0.3,
        pointerEvents: 'none'
      }}
    />
  );
};

export default MatrixRain;
