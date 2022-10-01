import React, {useEffect, useState} from 'react'
function mousePOS() {
    const mousePosition = useMousePosition();
  
    return (
      <p>
        Your cursor position:
        <br />
        {JSON.stringify(mousePosition)}
      </p>
    );
  }
  
  const useMousePosition = () => {
    const [
      mousePosition,
      setMousePosition
    ] = useState({ x: null, y: null });
  
    useEffect(() => {
      const updateMousePosition = ev => {
        setMousePosition({ x: ev.clientX, y: ev.clientY });
      };
      
      window.addEventListener('mousemove', updateMousePosition);
  
      return () => {
        window.removeEventListener('mousemove', updateMousePosition);
      };
    }, []);
  
    return mousePosition;
  };
  export default mousePOS;