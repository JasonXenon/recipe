import React from 'react';

// Composant qui affiche une carte de recette
const RecipeCard = ({ id, title, description, ingredients = [], steps = [] }) => {
    return (
        <div className="w-full max-w-sm h-96 bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 rounded-xl shadow-lg overflow-hidden flex flex-col">
            <div className="p-4 bg-white flex-grow flex flex-col justify-between">
                <div>
                    <h2 className="text-xl font-bold text-purple-800 mb-2 truncate">{title}</h2>
                    <p className="text-gray-700 mb-4 line-clamp-3">{description}</p>
                </div>

                <div>
                    <h3 className="text-md font-semibold text-pink-600">Ingrédients :</h3>
                    <ol className="list-disc list-inside text-gray-700 mb-4 text-sm">
                        {ingredients.slice(0, 3).map((ingredient, index) => (
                            <li key={index}>{ingredient}</li>
                        ))}
                        {ingredients.length > 3 && "..."}
                    </ol>

                    <h3 className="text-md font-semibold text-pink-600">Étapes :</h3>
                    <ol className="list-decimal list-inside text-gray-700 text-sm">
                        {steps.slice(0, 3).map((step, index) => (
                            <li key={index}>{step}</li>
                        ))}
                        {steps.length > 3 && "..."}
                    </ol>
                </div>
            </div>
        </div>
    );
};

export default RecipeCard;
