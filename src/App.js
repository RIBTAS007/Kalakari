import './App.css';
import Homepage from './Homepage';
import { useEffect, useState } from 'react';
import RotatingLogo from './RotatingLogo';
import ErrorBoundary from './ErrorBoundary';

function App() {
  const [loading, setLoading]= useState(false);

  useEffect(()=>{
    setLoading(true);
    setTimeout(()=>{
      setLoading(false)
    },3000)
  },[])
  return (
    <ErrorBoundary>
      {
        loading? <RotatingLogo/> :<Homepage/>
      }
    </ErrorBoundary>
  );
}

export default App;
