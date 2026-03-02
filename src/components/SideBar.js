import React from 'react';
function SideBar() {
    const sidebarStyle = {
        width: '200px',
        backgroundColor: '#f0f0f0',
        padding: '10px',
        boxSizing: 'border-box',
        marginLeft: '20px',
    };
  return (
    <aside className="SideBar" style={sidebarStyle}>
      <h2>SideBar</h2>
      <p>This is the sidebar content.</p>
    </aside>
  );
}

export default SideBar;