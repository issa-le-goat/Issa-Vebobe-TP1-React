import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import usersData from '../assets/users.json';

function Login() {
  // Déclaration des états pour stocker les saisies et les erreurs
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  
  // Hook de React Router pour forcer la redirection
  const navigate = useNavigate();

  // Fonction déclenchée à la soumission du formulaire
  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault(); // Empêche le rechargement de la page
    setError(''); // Réinitialise l'erreur à chaque tentative

    const userList: any = (usersData as any).users || usersData;

    // Vérification des identifiants dans le fichier JSON
    const foundUser = userList.find(
      (u: any) => u.username === username && u.password === password
    );

    if (foundUser) {
      // Si l'utilisateur existe, on le redirige vers sa page de profil privée
      navigate(`/profile/${foundUser.id}`);
    } else {
      // Sinon, on affiche un message d'erreur
      setError("Identifiants incorrects. Veuillez réessayer.");
    }
  };

  return (
    <div style={{ maxWidth: '400px', margin: '50px auto', textAlign: 'center' }}>
      <h1>Connexion</h1>
      
      <form onSubmit={handleLogin} style={{ display: 'flex', flexDirection: 'column', gap: '15px', marginTop: '20px' }}>
        <div>
          <input
            type="text"
            placeholder="Nom d'utilisateur"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            style={{ padding: '10px', width: '100%', boxSizing: 'border-box' }}
            required
          />
        </div>
        
        <div>
          <input
            type="password"
            placeholder="Mot de passe"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            style={{ padding: '10px', width: '100%', boxSizing: 'border-box' }}
            required
          />
        </div>

        {/* Affichage conditionnel du message d'erreur */}
        {error && <p style={{ color: 'red', fontWeight: 'bold' }}>{error}</p>}

        <button type="submit" style={{ padding: '10px', backgroundColor: '#2c3e50', color: 'white', border: 'none', cursor: 'pointer' }}>
          Se connecter
        </button>
      </form>
    </div>
  );
}

export default Login;