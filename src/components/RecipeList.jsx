import React from 'react';
import RecipeCard from './RecipeCard';
import recipes from '../data/recipes';

// Composant qui affiche toutes les recettes
const RecipeList = () => {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-4 justify-items-center m-3">
            {recipes.map((recipe) => (
                <RecipeCard key={recipe.id} {...recipe} />
            ))}
        </div>
    );
}

export default RecipeList;