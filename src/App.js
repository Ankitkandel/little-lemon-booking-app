import React, { useEffect, useState } from 'react';
import Header from './components/Header';
import Landing from './components/Landing';
import Projects from './components/Projects';
import Contact from './components/Contact';

function App() {
  const [showHeader, setShowHeader] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setShowHeader(currentScrollY < lastScrollY || currentScrollY < 100);
      setLastScrollY(currentScrollY);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  return (
    <>
      <div style={{ top: showHeader ? '0' : '-80px', position: 'fixed', width: '100%', zIndex: 1000, transition: 'top 0.3s' }}>
        <Header />
      </div>
      <Landing />
      <Projects />
      <Contact />
    </>
  );
}

export default App;
