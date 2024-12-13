import React from 'react';

// Composant qui affiche une carte de recette
const RecipeCard = ({ title, description, images }) => {
    return (
        <div className="border-2 border-slate-400 w-full max-w-sm h-96 bg-gradient-to-r rounded-xl shadow-lg overflow-hidden flex flex-col">
            <img src={images} alt={title} className="w-full h-48 object-cover" />
            <div className="p-4 bg-white flex flex-col justify-between">
                <div>
                    <h2 className="text-3xl font-bold text-purple-800 mb-2 truncate">{title}</h2>
                    <p className="text-xl text-gray-700 mb-4 line-clamp-3">{description}</p>
                </div>
            </div>
        </div>
    );
};

export default RecipeCard;