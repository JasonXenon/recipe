import React, { useState } from 'react';

const AddRecipe = () => {
    const [ingredients, setIngredients] = useState([]);
    const [steps, setSteps] = useState([]);
    const [recipes, setRecipes] = useState([]);

    const addIngredient = (e) => {
        const input = e.target.previousElementSibling;
        const ingredient = input.value.trim();
        if (ingredient) {
            setIngredients([...ingredients, ingredient]);
            input.value = '';
        }
    };

    const addStep = (e) => {
        const input = e.target.previousElementSibling;
        const step = input.value.trim();
        if (step) {
            setSteps([...steps, step]);
            input.value = '';
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (ingredients.length === 0 || steps.length === 0) {
            alert("Veuillez ajouter au moins un ingrédient et une étape.");
            return;
        }
        const formData = new FormData(e.target);
        const newRecipe = {
            title: formData.get('title'),
            description: formData.get('description'),
            image: formData.get('image'),
            ingredients,
            steps,
        };
        setRecipes([...recipes, newRecipe]);
        setIngredients([]);
        setSteps([]);
        e.target.reset();
    };

    return (
        <div>
            <form onSubmit={handleSubmit} className="max-w-2xl mx-auto p-6 bg-white rounded-lg shadow-md space-y-4">
                {/* Titre */}
                <div>
                    <label htmlFor="title" className="block text-lg font-medium text-gray-700">Titre de la recette :</label>
                    <input type="text" id="title" name="title" required className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500" />
                </div>

                {/* Description */}
                <div>
                    <label htmlFor="description" className="block text-lg font-medium text-gray-700">Description :</label>
                    <textarea id="description" name="description" rows="4" required className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"></textarea>
                </div>

                {/* Image */}
                <div>
                    <label htmlFor="image" className="block text-lg font-medium text-gray-700">Image (URL) :</label>
                    <input type="url" id="image" name="image" required className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500" />
                </div>

                {/* Ingrédients */}
                <div>
                    <label htmlFor="ingredients" className="block text-lg font-medium text-gray-700">Ingrédients :</label>
                    <div className="flex space-x-2">
                        <input type="text" placeholder="Ajouter un ingrédient" className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500" />
                        <button type="button" onClick={addIngredient} className="mt-1 px-4 py-2 bg-indigo-600 text-white rounded-md shadow-sm hover:bg-indigo-700">Ajouter</button>
                    </div>
                    <ul className="mt-2 list-disc list-inside text-gray-700">
                        {ingredients.map((ing, index) => (
                            <li key={index}>
                                {ing}
                                <button type="button" onClick={() => setIngredients(ingredients.filter((_, i) => i !== index))} className="ml-2 text-red-600">Supprimer</button>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Étapes */}
                <div>
                    <label htmlFor="steps" className="block text-lg font-medium text-gray-700">Étapes de préparation :</label>
                    <div className="flex space-x-2">
                        <input type="text" placeholder="Ajouter une étape" className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500" />
                        <button type="button" onClick={addStep} className="mt-1 px-4 py-2 bg-indigo-600 text-white rounded-md shadow-sm hover:bg-indigo-700">Ajouter</button>
                    </div>
                    <ol className="mt-2 list-decimal list-inside text-gray-700">
                        {steps.map((step, index) => (
                            <li key={index}>
                                {step}
                                <button type="button" onClick={() => setSteps(steps.filter((_, i) => i !== index))} className="ml-2 text-red-600">Supprimer</button>
                            </li>
                        ))}
                    </ol>
                </div>

                {/* Bouton de soumission */}
                <div>
                    <button type="submit" className="w-full px-4 py-2 bg-indigo-600 text-white rounded-md shadow-sm hover:bg-indigo-700">Ajouter la recette</button>
                </div>
            </form>
        </div>
    );
};

export default AddRecipe;
