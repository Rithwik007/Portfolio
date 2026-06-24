'use client';

export function BackgroundOrbs() {
  return (
    <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden" aria-hidden="true">
      {/* Orb 1: Top Left */}
      <div 
        className="fixed rounded-full pointer-events-none z-0 bg-blue-500 opacity-7"
        style={{
          width: '700px',
          height: '700px',
          top: '-250px',
          left: '-250px',
          filter: 'blur(140px)',
          opacity: 0.07,
        }}
      />
      {/* Orb 2: Bottom Right */}
      <div 
        className="fixed rounded-full pointer-events-none z-0 bg-violet-500 opacity-7"
        style={{
          width: '500px',
          height: '500px',
          bottom: '-150px',
          right: '-150px',
          filter: 'blur(140px)',
          opacity: 0.07,
        }}
      />
      {/* Orb 3: Center Soft */}
      <div 
        className="fixed rounded-full pointer-events-none z-0 bg-blue-500 opacity-4"
        style={{
          width: '350px',
          height: '350px',
          top: '55%',
          left: '45%',
          transform: 'translate(-50%, -50%)',
          filter: 'blur(140px)',
          opacity: 0.04,
        }}
      />
    </div>
  );
}