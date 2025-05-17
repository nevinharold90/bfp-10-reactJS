import React from 'react';

const colors = ['bg-bfp-yellow', 'bg-bfp-orange', 'bg-bfp-brown'];

const PixelGrid = () => {
  const total = 1000;
  const grid = Array.from({ length: total });

  return (
<div className="fixed inset-0 z-0 overflow-hidden blur-xs">
  <div className="w-full h-full grid grid-cols-[repeat(auto-fill,_minmax(48px,_1fr))]">
    {grid.map((_, i) => {
      const color = colors[Math.floor(Math.random() * colors.length)];
      const shouldGlow = Math.random() < 0.15;
      const glow = shouldGlow ? 'animate-glow' : '';
      return <div key={i} className={`${color} w-12 h-10 ${glow}`} />;
    })}
  </div>
</div>
  );
};

export default PixelGrid;
