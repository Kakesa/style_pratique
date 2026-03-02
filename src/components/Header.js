function Nav() {
    const navStyle = {
        backgroundColor: '#333',
        padding: '10px',
        color: '#fff',
        
    };
    return (
        <nav className="main-nav" style={navStyle}>
            <ul>
                <li>Home</li>
                <li>Articles</li>
                <li>About</li>
                <li>Contact</li>
            </ul>
        </nav>
    );
};

export default Nav;