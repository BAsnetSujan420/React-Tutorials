import React from "react";

const Recipe = ({ id, name, ingredients }) => {
  return (
    <div>
      <h2>{name}</h2>
      <ul>
        {ingredients.map((ingredient, index) => (
          <li key={index}>{ingredient}</li>
        ))}
      </ul>
    </div>
  );
};

export default Recipe;
