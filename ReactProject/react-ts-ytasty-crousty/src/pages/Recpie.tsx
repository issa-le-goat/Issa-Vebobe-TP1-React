import { useParams, Link } from 'react-router-dom';
import recipesData from '../assets/recipes.json';

function Recipe() {
  const { id } = useParams();
  const recipeList: any = (recipesData as any).recipes || recipesData;
  const recipe = recipeList.find((r: any) => r.id === Number(id));
  if (!recipe) {
    return (
      <div style={{ textAlign: 'center', marginTop: '50px' }}>
        <h2>Recette introuvable</h2>
        <p>L'identifiant fourni ne correspond à aucune recette de notre catalogue.</p>
        <Link to="/">Retour à l'accueil</Link>
      </div>
    );
  }
  return (
    <article style={{ maxWidth: '800px', margin: '0 auto', padding: '20px' }}>
      <Link to="/" style={{ textDecoration: 'none', color: 'blue', display: 'block', marginBottom: '20px' }}>
        &larr; Retour à l'accueil
      </Link>

      <img 
        src={recipe.image} 
        alt={recipe.name} 
        style={{ width: '100%', maxHeight: '400px', objectFit: 'cover', borderRadius: '8px' }} 
      />
      
      <h1 style={{ marginTop: '20px' }}>{recipe.name}</h1>
      
      <div style={{ display: 'flex', gap: '20px', color: '#666', marginBottom: '20px' }}>
        <p><strong>Préparation :</strong> {recipe.prepTimeMinutes} min</p>
        <p><strong>Cuisson :</strong> {recipe.cookTimeMinutes} min</p>
      </div>

      <section style={{ display: 'flex', gap: '40px', flexWrap: 'wrap' }}>
        <div style={{ flex: '1', minWidth: '250px' }}>
          <h2>Ingrédients</h2>
          <ul>
            {recipe.ingredients.map((ingredient: string, index: number) => (
              <li key={index} style={{ marginBottom: '8px' }}>{ingredient}</li>
            ))}
          </ul>
        </div>
        <div style={{ flex: '2', minWidth: '300px' }}>
          <h2>Instructions</h2>
          <ol>
            {recipe.instructions.map((step: string, index: number) => (
              <li key={index} style={{ marginBottom: '12px', lineHeight: '1.5' }}>{step}</li>
            ))}
          </ol>
        </div>
      </section>
    </article>
  );
}

export default Recipe;