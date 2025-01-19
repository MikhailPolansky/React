import { useState, useEffect } from 'react';

export function Content2() {
  const [time, setTime] = useState(new Date());
  const [showDate, setShowDate] = useState(false);

  useEffect(() => {
    console.log('Content2 mounted');
    
    const timer = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => {
      console.log('Content2 unmounted');
      clearInterval(timer);  
    };
  }, []);  

  useEffect(() => {
    console.log('Content2 updated');
  });

  useEffect(() => {
    if (showDate) {
      console.log('Date: useEffect');
    }
  }, [showDate]); 

  return (
    <div className='cont2'>
      content2 component
      <p>Time: {time.toLocaleTimeString()}</p>

      <button onClick={() => setShowDate(!showDate)}>
        {showDate ? 'Hide Date' : 'Show Date'}
      </button>

      {showDate && <p>Date: {time.toLocaleDateString()}</p>}
    </div>
  );
}