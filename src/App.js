import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import RecipeList from './components/RecipeList';
import RecipeDetail from './components/RecipeDetail';
import AddRecipe from "./components/AddRecipe";

function App() {
    return (
        <Router>
            <div>
                <h1 className="text-5xl font-extrabold bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-transparent bg-clip-text text-center">App de recettes en ReactJS</h1>
                <Routes>
                    <Route path="/" element={<RecipeList />} />
                    <Route path="/recipe/:id" element={<RecipeDetail />} />
                    <Route path="/AddRecipe" element={<AddRecipe />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;