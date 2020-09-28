import React from 'react';

import './Layout.styles.css';

function Layout({ children }) {
  return (
    <div className="page-container">
      <main className="container">{children}</main>
    </div>
  );
}

export default Layout;
