import React from 'react';

const Meal = ({ meal, addToCart }) => {
  const { strCategory, strMealThumb, strMeal, strInstructions } = meal;
  return (
    <div className="card  bg-base-100 shadow-xl">
      <figure>
        <img src={strMealThumb} alt={strMeal} />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{strMeal}</h2>
        <p>
          <strong>Category:</strong> {strCategory}
        </p>
        <p>
          <strong>Instructions:</strong> {strInstructions.slice(0, 30)}...
        </p>
        <div className="card-actions ">
          <button onClick={() => addToCart(meal)} className="btn btn-primary">
            Add To Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default Meal;
