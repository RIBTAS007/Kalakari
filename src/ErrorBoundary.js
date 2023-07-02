import React, { useState } from 'react';

const ErrorBoundary = ({ children }) => {
  const [hasError, setHasError] = useState(false);

  const handleOnError = (error, errorInfo) => {
    setHasError(true);
  };

  if (hasError) {
    return (
      <div>
        <h2>Oops! Something went wrong.</h2>
        <p>Please refresh the page or try again later.</p>
      </div>
    );
  }

  return (
    <div onError={handleOnError}>
      {children}
    </div>
  );
};

export default ErrorBoundary;
