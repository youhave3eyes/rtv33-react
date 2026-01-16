import { useEffect } from 'react';

const MatrixRain = ({ color = '#00FF41', glowColor = '#0FFF50' }) => {
  useEffect(() => {
    // Create canvas attached directly to body for highest z-index
    const canvas = document.createElement('canvas');
    canvas.className = 'matrix-rain-overlay';
    Object.assign(canvas.style, {
      position: 'fixed',
      top: '0',
      left: '0',
      width: '100vw',
      height: '100vh',
      pointerEvents: 'none',
      zIndex: '9999',
      opacity: '0.35',
      background: 'transparent',
    });
    document.body.appendChild(canvas);

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
      ctx.fillStyle = color; // Text color
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
          ctx.shadowBlur = 6;
          ctx.shadowColor = color;
          ctx.fillStyle = glowColor; // Brighter/glow color
        } else {
          ctx.shadowBlur = 0;
          ctx.fillStyle = color;
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
      document.body.removeChild(canvas);
    };
  }, []);

  return null;
};

export default MatrixRain;
