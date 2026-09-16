import { Link } from 'react-router-dom';
import usersData from '../assets/users.json';

function UserList() {
  const userList: any = (usersData as any).users || usersData;

  return (
    <div>
      <h1>Annuaire des Utilisateurs</h1>
      <ul style={{ listStyleType: 'none', padding: 0 }}>
        {Array.from(userList).map((user: any) => (
          <li key={user.id} style={{ marginBottom: '15px' }}>
            <Link 
              to={`/users/${user.id}`} 
              style={{ display: 'flex', alignItems: 'center', gap: '15px', textDecoration: 'none', color: '#333' }}
            >
              <img 
                src={user.image} 
                alt={`Avatar de ${user.username}`} 
                style={{ width: '50px', height: '50px', borderRadius: '50%' }} 
              />
              <strong>{user.username}</strong>
            </Link>

          </li>
        ))}
      </ul>
    </div>
  );
}

export default UserList;
