import { useEffect, useState } from "react";

export const StarBackground = () => {
  const [stars, setStars] = useState([]);
  const [meteors, setMeteors] = useState([]);

  useEffect(() => {
    generateStars();
    generateMeteors();

    const handleResize = () => {
      generateStars();
    };

    window.addEventListener("resize", handleResize);

    // Set up meteor regeneration interval
    const meteorInterval = setInterval(() => {
      generateMeteors();
    }, 10000); // Regenerate meteors every 10 seconds

    return () => {
      window.removeEventListener("resize", handleResize);
      clearInterval(meteorInterval);
    };
  }, []);

  const generateStars = () => {
    const numberOfStars = Math.floor(
      (window.innerWidth * window.innerHeight) / 10000
    );

    const newStars = [];

    for (let i = 0; i < numberOfStars; i++) {
      newStars.push({
        id: i,
        size: Math.random() * 3 + 1,
        x: Math.random() * 100,
        y: Math.random() * 100,
        opacity: Math.random() * 0.5 + 0.5,
        animationDuration: Math.random() * 4 + 2,
      });
    }

    setStars(newStars);
  };

  const generateMeteors = () => {
    const numberOfMeteors = Math.floor(Math.random() * 2) + 2; // 4-5 meteors at a time
    const newMeteors = [];

    for (let i = 0; i < numberOfMeteors; i++) {
      // Start from top right (80-100% width, 0-20% height)
      const startX = Math.random() * 20 + 80;
      const startY = Math.random() * 20;
      
      // End in the middle area (40-60% width, 40-60% height)
      const endX = Math.random() * 30 + 36;
      const endY = Math.random() * 30 + 36;
      
      // Vary speeds for more realistic effect
      const speedFactor = Math.random() * 0.7 + 0.6; // 0.6-1.3 speed multiplier
      
      newMeteors.push({
        id: i,
        startX,
        startY,
        endX,
        endY,
        size: Math.random() * 2.5 + 1, // 1-3.5 size variation
        delay: Math.random() * 6, // Less delay between meteors
        duration: (Math.random() * 3 + 3) / speedFactor, // Varied speeds
        opacity: Math.random() * 0.3 + 0.7, // Higher opacity: 0.7-1.0
        tail: Math.random() * 40 + 35, // Varied tail lengths: 35-75px
      });
    }

    setMeteors(newMeteors);
  };

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {stars.map((star) => (
        <div
          key={star.id}
          className="absolute rounded-full bg-white animate-pulse-subtle"
          style={{
            width: star.size + "px",
            height: star.size + "px",
            left: star.x + "%",
            top: star.y + "%",
            opacity: star.opacity,
            animationDuration: star.animationDuration + "s",
          }}
        />
      ))}

      {meteors.map((meteor) => (
        <div
          key={meteor.id}
          className="absolute"
          style={{
            left: `${meteor.startX}%`,
            top: `${meteor.startY}%`,
            opacity: 0,
            animationDelay: `${meteor.delay}s`,
            animationDuration: `${meteor.duration}s`,
            animationName: 'meteor-animation',
            animationTimingFunction: 'cubic-bezier(0.35, 0.3, 0.25, 1)',
            animationFillMode: 'forwards',
          }}
        >
          <div 
            className="relative"
            style={{
              width: `${meteor.tail}px`,
              height: `${meteor.size}px`,
              background: 'linear-gradient(to right, rgba(255,255,255,0), rgba(255,255,255,1))',
              borderRadius: '50px',
              transform: `rotate(${Math.atan2(meteor.endY - meteor.startY, meteor.endX - meteor.startX) * (180/Math.PI)}deg)`,
              transformOrigin: 'center right',
              opacity: meteor.opacity,
            }}
          >
            <div 
              className="absolute right-0 rounded-full bg-white"
              style={{
                width: `${meteor.size * 2}px`,
                height: `${meteor.size * 2}px`,
                top: `${-meteor.size / 2}px`,
              }}
            />
          </div>
        </div>
      ))}

      <style jsx>{`
        @keyframes meteor-animation {
          0% {
            opacity: 0;
            transform: translate(0, 0);
          }
          5% {
            opacity: 1;
          }
          70% {
            opacity: 0.8;
          }
          100% {
            opacity: 0;
            transform: translate(${-Math.abs(110 - 70)}%, ${990}%);
          }
        }
      `}</style>
    </div>
  );
};

export default StarBackground;