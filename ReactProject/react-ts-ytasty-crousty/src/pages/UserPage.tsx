import { useParams, Link } from 'react-router-dom';
import usersData from '../assets/users.json';

function User() {
  const { id } = useParams();
  const userList: any = (usersData as any).users || usersData;
  const user = userList.find((u: any) => u.id === Number(id));

  if (!user) {
    return (
      <div style={{ textAlign: 'center', marginTop: '50px' }}>
        <h2>Utilisateur introuvable</h2>
        <Link to="/users">Retour à l'annuaire</Link>
      </div>
    );
  }

  return (
    <div style={{ maxWidth: '800px', margin: '0 auto', padding: '20px' }}>
      <Link to="/users" style={{ textDecoration: 'none', color: 'blue' }}>
        &larr; Retour à l'annuaire
      </Link>
      
      <header style={{ textAlign: 'center', margin: '30px 0' }}>
        <img 
          src={user.image} 
          alt={`Avatar de ${user.username}`} 
          style={{ width: '128px', height: '128px', borderRadius: '50%', border: '2px solid #ccc' }}
        />
        <h1>{user.firstName} {user.lastName}</h1>
        <p style={{ color: 'gray' }}>@{user.username} - {user.role}</p>
      </header>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '20px' }}>
        <section style={{ border: '1px solid #ddd', padding: '15px', borderRadius: '8px' }}>
          <h3>Informations Personnelles</h3>
          <p><strong>Email :</strong> {user.email}</p>
          <p><strong>Téléphone :</strong> {user.phone}</p>
          <p><strong>Âge :</strong> {user.age} ans</p>
          <p><strong>Genre :</strong> {user.gender}</p>
          <p><strong>Date de naissance :</strong> {user.birthDate}</p>
        </section>

        <section style={{ border: '1px solid #ddd', padding: '15px', borderRadius: '8px' }}>
          <h3>Entreprise</h3>
          <p><strong>Société :</strong> {user.company.name}</p>
          <p><strong>Département :</strong> {user.company.department}</p>
          <p><strong>Poste :</strong> {user.company.title}</p>
        </section>

        <section style={{ border: '1px solid #ddd', padding: '15px', borderRadius: '8px' }}>
          <h3>Adresse</h3>
          <p>{user.address.address}</p>
          <p>{user.address.postalCode} {user.address.city}</p>
          <p><strong>{user.address.country}</strong></p>
        </section>
      </div>
    </div>
  );
}

export default User;