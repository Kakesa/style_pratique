import React from 'react';
function SideBar() {
    const sidebarStyle = {
        width: 'calc(30% - 10px)',
        backgroundColor: '#f0f0f0',
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