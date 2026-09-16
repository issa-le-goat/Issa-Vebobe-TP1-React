import { NavLink } from 'react-router-dom';

function Header() {
  const navLinkStyle = ({ isActive }: { isActive: boolean }) => {
    return {
      textDecoration: 'none',
      color: isActive ? '#d35400' : '#333',
      fontWeight: isActive ? 'bold' : 'normal',
      padding: '5px 10px',
    };
  };

  return (
    <header style={{ 
      display: 'flex', 
      justifyContent: 'space-between', 
      alignItems: 'center', 
      padding: '15px 30px', 
      backgroundColor: '#f8f9fa',
      borderBottom: '2px solid #eaeaea',
      marginBottom: '20px'
    }}>
      <div style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#2c3e50' }}>
        Ytasty Crousty
      </div>

      <nav style={{ display: 'flex', gap: '20px' }}>
        <NavLink to="/" style={navLinkStyle}>
          Accueil
        </NavLink>
        <NavLink to="/users" style={navLinkStyle}>
          Annuaire
        </NavLink>
        <NavLink to="/login" style={navLinkStyle}>
          Connexion
        </NavLink>
      </nav>
    </header>
  );
}

export default Header;