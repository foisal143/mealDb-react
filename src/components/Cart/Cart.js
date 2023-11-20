import React from 'react';

const Cart = ({ cart, cartDeletHandler }) => {
  const { strCategory, strMealThumb, strMeal, strInstructions } = cart;
  return (
    <div className="card sticky top-auto my-5 bg-base-100 shadow-xl">
      <figure>
        <img className="w-1/2" src={strMealThumb} alt={strMeal} />
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
          <button
            onClick={() => cartDeletHandler(cart)}
            className="btn btn-primary"
          >
            Delete Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
