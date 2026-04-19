import React from 'react';

const App = () => {
  return (
    <div style={{ padding: '20px', textAlign: 'center', fontFamily: 'Arial' }}>
      <h1 style={{ color: '#2563eb', fontSize: '48px' }}>ShopHub E-Commerce</h1>
      <div style={{ 
        backgroundColor: '#10b981', 
        color: 'white', 
        padding: '20px', 
        borderRadius: '8px',
        fontSize: '24px',
        margin: '20px 0'
      }}>
        ✅ APPLICATION IS WORKING! ✅
      </div>
      <p style={{ fontSize: '18px', color: '#666' }}>
        If you can see this page, your application is running successfully!
      </p>
      <div style={{ 
        backgroundColor: '#f3f4f6', 
        padding: '15px', 
        borderRadius: '8px',
        margin: '20px 0'
      }}>
        <h3>Next Steps:</h3>
        <p>1. This confirms server is working</p>
        <p>2. Now I can restore full e-commerce functionality</p>
      </div>
    </div>
  );
};

export default App;
