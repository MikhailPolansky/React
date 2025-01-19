
import React, { useState, useCallback, useReducer, useMemo, useContext, useId, useRef, useLayoutEffect } from 'react';

import {ThemeContext} from '../App'; 

export function Example() {
  const [text, setText] = useState('');


  const [state, dispatch] = useReducer((state, action) => {
    console.log('useReducer: increment/decrement');
    switch (action.type) {
      case 'increment':
        return { count: state.count + 1 };
      case 'decrement':
        return { count: state.count - 1 };
      default:
        return state;
    }
  }, { count: 0 });

  const increment = useCallback(() => {
    console.log('useCallback: increment');
    dispatch({ type: 'increment' });
  }, []);

  const calculation = useMemo(() => {
    console.log('useMemo: calculation');
    return state.count * 2;
  }, [state.count]);

  const { theme, toggleTheme } = useContext(ThemeContext);
  console.log('useContext: current theme', theme);

  const inputId = useId();
  console.log('useId: generated ID:', inputId);

  const inputRef = useRef('');
  console.log('useRef:inputRef:', inputRef, {text});

  useLayoutEffect(() => {
    console.log('useLayoutEffect: current inputRef:', inputRef.current);
  }, []);

  return (
    <div>
      example component
      <div>
        <button onClick={increment}>Increment</button>
                Count: {state.count}

        <button onClick={() => {
          dispatch({ type: 'decrement' });
        }}>Decrement</button>
      </div>
      
      <div>
        <p> Calculation (count * 2) = {calculation}</p>
      </div>
      
        <div>
          <p>Current Theme: {theme}</p>
          <button onClick={toggleTheme}>
          Toggle Theme
          </button>
        </div>

      <div>
        <input 
         ref={inputRef}
         onChange={(e) => setText(e.target.value)}
         placeholder="Type something..." 
       />
      </div>
    </div>
  );
}