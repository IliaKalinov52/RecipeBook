import React from 'react';
import Navbar from './ui/Navbar';

function App({ children, user }) {
  return (
    <div>
      <Navbar user={user} />
      {children}
    </div>
  );
}

export default App;
