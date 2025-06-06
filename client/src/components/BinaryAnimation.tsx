import React, { useEffect, useRef } from 'react';

interface BinaryAnimationProps {
  fullscreen?: boolean;
  className?: string;
}

const BinaryAnimation: React.FC<BinaryAnimationProps> = ({ fullscreen = false, className = '' }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    
    // Make canvas responsive
    const resizeCanvas = () => {
      const container = canvas.parentElement;
      if (container) {
        canvas.width = container.offsetWidth;
        canvas.height = container.offsetHeight;
      }
    };
    
    resizeCanvas();
    
    const width = canvas.width;
    const height = canvas.height;
    
    // Colors from the style guide
    const emerald = '#23ce6b';
    const gunmetal = '#272d2d';
    const purpureus = '#a846a0';
    const ghostWhite = '#f6f8ff';
    
    // Binary elements - the 1's and 0's
    class BinaryElement {
      x: number;
      y: number;
      value: string;
      size: number;
      color: string;
      alpha: number;
      targetAlpha: number;
      fadeSpeed: number;
      fadeDirection: number;
      
      constructor(x: number, y: number, value: string, size: number, color: string) {
        this.x = x;
        this.y = y;
        this.value = value;
        this.size = size;
        this.color = color;
        this.alpha = 0;
        this.targetAlpha = Math.random() * 0.7 + 0.3; // Random target opacity
        this.fadeSpeed = Math.random() * 0.01 + 0.005;
        this.fadeDirection = 1; // 1 for fade in, -1 for fade out
      }
      
      update() {
        // Fade in or out
        this.alpha += this.fadeSpeed * this.fadeDirection;
        
        // Change direction if needed
        if (this.alpha >= this.targetAlpha) {
          this.fadeDirection = -1;
        } else if (this.alpha <= 0) {
          this.fadeDirection = 1;
          // Occasionally change the value when completely faded out
          if (Math.random() > 0.7) {
            this.value = this.value === '0' ? '1' : '0';
            this.color = this.value === '0' ? purpureus : emerald;
          }
        }
        
        // Ensure alpha stays in bounds
        this.alpha = Math.max(0, Math.min(this.alpha, this.targetAlpha));
      }
      
      draw(ctx: CanvasRenderingContext2D) {
        ctx.globalAlpha = this.alpha;
        ctx.font = `${this.size}px "Space Grotesk", monospace`;
        ctx.fillStyle = this.color;
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        ctx.fillText(this.value, this.x, this.y);
        ctx.globalAlpha = 1;
      }
    }
    
    // Connection lines between binary elements
    class Connection {
      startX: number;
      startY: number;
      endX: number;
      endY: number;
      progress: number;
      speed: number;
      alpha: number;
      width: number;
      
      constructor(startX: number, startY: number, endX: number, endY: number) {
        this.startX = startX;
        this.startY = startY;
        this.endX = endX;
        this.endY = endY;
        this.progress = 0;
        this.speed = Math.random() * 0.01 + 0.005;
        this.alpha = Math.random() * 0.4 + 0.1;
        this.width = Math.random() * 1.5 + 0.5;
      }
      
      update() {
        this.progress += this.speed;
        if (this.progress > 1) {
          this.progress = 0;
        }
      }
      
      draw(ctx: CanvasRenderingContext2D) {
        ctx.beginPath();
        ctx.moveTo(this.startX, this.startY);
        ctx.lineTo(this.startX + (this.endX - this.startX) * this.progress, 
                   this.startY + (this.endY - this.startY) * this.progress);
        ctx.strokeStyle = gunmetal;
        ctx.globalAlpha = this.alpha;
        ctx.lineWidth = this.width;
        ctx.stroke();
        ctx.globalAlpha = 1;
      }
    }
    
    // Create binary elements
    const elements: BinaryElement[] = [];
    const gridSize = 30;
    const fontSize = 16;
    
    for (let x = gridSize; x < width; x += gridSize) {
      for (let y = gridSize; y < height; y += gridSize) {
        // Only create elements with some randomness for a sparse effect
        if (Math.random() > 0.7) {
          const value = Math.random() > 0.5 ? '1' : '0';
          const color = value === '1' ? emerald : purpureus;
          elements.push(new BinaryElement(x, y, value, fontSize, color));
        }
      }
    }
    
    // Create connections between some elements
    const connections: Connection[] = [];
    for (let i = 0; i < elements.length; i++) {
      for (let j = i + 1; j < elements.length; j++) {
        // Only connect some elements that are reasonably close
        const dist = Math.sqrt(
          Math.pow(elements[i].x - elements[j].x, 2) + 
          Math.pow(elements[i].y - elements[j].y, 2)
        );
        
        if (dist < gridSize * 3 && Math.random() > 0.85) {
          connections.push(new Connection(
            elements[i].x, elements[i].y, 
            elements[j].x, elements[j].y
          ));
        }
      }
    }
    
    // Animation loop
    let animationId: number;
    
    const animate = () => {
      ctx.clearRect(0, 0, width, height);
      
      // Draw connections
      connections.forEach(connection => {
        connection.update();
        connection.draw(ctx);
      });
      
      // Draw binary elements
      elements.forEach(element => {
        element.update();
        element.draw(ctx);
      });
      
      animationId = requestAnimationFrame(animate);
    };
    
    animate();
    
    // Handle window resize
    window.addEventListener('resize', resizeCanvas);
    
    // Cleanup
    return () => {
      window.removeEventListener('resize', resizeCanvas);
      cancelAnimationFrame(animationId);
    };
  }, []);
  
  return (
    <div className={`relative ${fullscreen ? 'absolute inset-0 z-0' : 'w-full'} ${className}`}>
      <canvas 
        ref={canvasRef} 
        className="w-full h-full" 
        aria-label="Binary animation showing 1s and 0s with connections"
      />
      {fullscreen && (
        <div className="absolute inset-0 bg-gradient-to-r from-gunmetal/30 to-transparent pointer-events-none" />
      )}
    </div>
  );
};

export default BinaryAnimation;
