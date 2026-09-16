import { useParams, Link } from 'react-router-dom';
import usersData from '../assets/users.json';

function Profile() {

  const { id } = useParams();

  const userList: any = (usersData as any).users || usersData;
  const user = userList.find((u: any) => u.id === Number(id));
  if (!user) {
    return (
      <div style={{ textAlign: 'center', padding: '50px' }}>
        <h2>Profil introuvable</h2>
        <p>Veuillez vous reconnecter.</p>
        <Link to="/login">Aller à la connexion</Link>
      </div>
    );
  }

  return (
    <div style={{ maxWidth: '800px', margin: '0 auto', padding: '20px' }}>
      <header style={{ textAlign: 'center', marginBottom: '30px' }}>
        <img 
          src={user.image} 
          alt={`Avatar de ${user.username}`} 
          style={{ width: '150px', height: '150px', borderRadius: '50%', border: '3px solid #2c3e50' }}
        />
        <h1>{user.firstName} {user.lastName}</h1>
        <p style={{ fontSize: '1.2rem', color: '#7f8c8d' }}>@{user.username} - {user.role}</p>
      </header>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '20px' }}>
        
        <section style={{ border: '1px solid #bdc3c7', padding: '15px', borderRadius: '8px' }}>
          <h3>Informations Personnelles</h3>
          <p><strong>Email :</strong> {user.email}</p>
          <p><strong>Téléphone :</strong> {user.phone}</p>
          <p><strong>Âge :</strong> {user.age} ans</p>
          <p><strong>Genre :</strong> {user.gender}</p>
          <p><strong>Date de naissance :</strong> {user.birthDate}</p>
        </section>

        <section style={{ border: '1px solid #bdc3c7', padding: '15px', borderRadius: '8px' }}>
          <h3>Entreprise</h3>
          <p><strong>Société :</strong> {user.company.name}</p>
          <p><strong>Département :</strong> {user.company.department}</p>
          <p><strong>Poste :</strong> {user.company.title}</p>
        </section>

        <section style={{ border: '1px solid #bdc3c7', padding: '15px', borderRadius: '8px' }}>
          <h3>Adresse</h3>
          <p>{user.address.address}</p>
          <p>{user.address.postalCode} {user.address.city}</p>
          <p><strong>{user.address.country}</strong></p>
        </section>

      </div>
    </div>
  );
}

export default Profile;