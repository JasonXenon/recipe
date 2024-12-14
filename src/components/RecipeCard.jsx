import React from 'react';
import { Link } from 'react-router-dom';

const RecipeCard = ({ id, title, description, images }) => {
    return (
        <div className="border-2 border-slate-400 w-full max-w-sm bg-gradient-to-r rounded-xl shadow-lg overflow-hidden flex flex-col">
            <img src={images} alt={title} className="w-full h-48 object-cover" />
            <div className="p-4 bg-white flex flex-col justify-between">
                <div>
                    <h2 className="text-3xl font-bold text-purple-800 mb-2 truncate">{title}</h2>
                    <p className="text-xl text-gray-700 mb-4 line-clamp-3">{description}</p>
                    <Link to={`/recipe/${id}`} className="text-blue-500 underline">Voir les détails</Link>
                </div>
            </div>
        </div>
    );
};

export default RecipeCard;