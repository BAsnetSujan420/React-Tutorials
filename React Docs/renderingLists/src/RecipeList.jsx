import React from "react";
import { recipes } from "./data";
import Recipe from "./Recipe";

const RecipeList = () => {
  return (
    <div>
      <h1>Favorite Recipes</h1>
      {recipes.map((recipe) => (
        <Recipe {...recipe} key={recipe.id} />
      ))}
    </div>
  );
};

export default RecipeList;
