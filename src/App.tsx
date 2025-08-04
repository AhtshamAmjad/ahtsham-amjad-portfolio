import React from 'react';

function App() {
  return (
    <div style={{ 
      minHeight: '100vh', 
      backgroundColor: '#f9fafb', 
      display: 'flex', 
      alignItems: 'center', 
      justifyContent: 'center',
      fontFamily: 'Arial, sans-serif'
    }}>
      <div style={{ textAlign: 'center' }}>
        <h1 style={{ 
          fontSize: '2.5rem', 
          fontWeight: 'bold', 
          color: '#111827', 
          marginBottom: '1rem' 
        }}>
          Ahtsham Amjad
        </h1>
        <p style={{ 
          fontSize: '1.25rem', 
          color: '#4b5563', 
          marginBottom: '2rem' 
        }}>
          ISTQB® Certified SENIOR SQA ENGINEER
        </p>
        <div style={{ 
          backgroundColor: 'white', 
          padding: '1.5rem', 
          borderRadius: '0.5rem', 
          boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)' 
        }}>
          <p style={{ color: '#374151' }}>
            ✅ Portfolio is working! This is a test to ensure the basic React app loads on Vercel.
          </p>
        </div>
      </div>
    </div>
  );
}

export default App; 