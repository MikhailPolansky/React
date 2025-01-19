import { useEffect, useState, useRef } from 'react';

export function Footer() {
  const [footerState, setFooterState] = useState(false);

  const isFirstRender = useRef(true);

  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false; 
      return;  
    }
    console.log('Footer: useEffect didUpdate');
  })
  return (
    <div className='foot'>
      footer component
      <p>Footer state: {footerState ? 'Active' : 'Inactive'}</p>
      <button onClick={() => setFooterState(!footerState)}>
        Toggle Footer State
      </button>
    </div>
  );
}