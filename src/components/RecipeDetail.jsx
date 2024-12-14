import React from 'react';
import { useParams } from 'react-router-dom';
import recipes from '../data/recipes';

const RecipeDetail = () => {
    const { id } = useParams();
    const recipe = recipes.find((recipe) => recipe.id === parseInt(id));

    if (!recipe) {
        return <div className="text-center text-red-500 text-2xl mt-10">La recette n'a pas pu être chargée</div>;
    }

    return (
        <div className="max-w-4xl mx-auto p-6 bg-white rounded-lg shadow-md">
            <h1 className="text-5xl font-bold text-purple-800 mb-6 text-center">{recipe.title}</h1>
            <p className="text-xl text-gray-700 mb-6 text-center">{recipe.description}</p>
            <img src={recipe.images} alt={recipe.title} className="w-full h-96 object-cover rounded-lg mb-6" />
            <div className="mb-6">
                <h2 className="text-3xl font-bold text-purple-800 mb-4">Ingredients</h2>
                <ul className="list-disc list-inside text-lg text-gray-700 space-y-2">
                    {recipe.ingredients.map((ingredient, index) => (
                        <li key={index}>{ingredient}</li>
                    ))}
                </ul>
            </div>
            <div>
                <h2 className="text-3xl font-bold text-purple-800 mb-4">Étapes</h2>
                <ol className="list-decimal list-inside text-lg text-gray-700 space-y-2">
                    {recipe.steps.map((step, index) => (
                        <li key={index}>{step}</li>
                    ))}
                </ol>
            </div>
        </div>
    );
};

export default RecipeDetail;