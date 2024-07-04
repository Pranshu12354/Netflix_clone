import React, { useEffect } from 'react';
import '../Style/SplashScreen.css';


function SplashScreen({ onFinish }) {
  useEffect(() => {
    const timer = setTimeout(() => {
      onFinish();
    }, 4200); 

    return () => clearTimeout(timer);
  }, [onFinish]);

  return (
    <div className="splash-screen">
      <video autoPlay loop muted className="splash-video">
        <source src={`${process.env.PUBLIC_URL}/Netflix Intro 1920x800.mp4`} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
}

export default SplashScreen;
