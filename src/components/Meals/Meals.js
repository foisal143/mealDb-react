import React, { useEffect, useState } from 'react';
import Meal from '../Meal/Meal';
import Cart from '../Cart/Cart';
import { toast } from 'react-toastify';
import { getLocalValue, setLocalStorage } from '../utilitis/Utilitis';
const Meals = () => {
  const [meals, setMeals] = useState([]);
  const [searcValue, setSearchValue] = useState('');
  const [search, setSearch] = useState('fish');
  const [carts, setCart] = useState([]);

  // handler for get the input value
  const handleInputValue = value => {
    setSearchValue(value);
  };
  // handle for search
  const handleSearch = () => {
    setSearch(searcValue);
    setCart([]);
  };

  // handler for add to cart
  const addToCart = product => {
    const exist = carts.find(cart => cart.idMeal === product.idMeal);
    setLocalStorage(product.idMeal);
    if (exist) {
      toast('allready added');
      return;
    }
    const newCart = [...carts, product];
    setCart(newCart);

    toast('Card Added!');
  };
  // handler for delete cart
  const cartDeletHandler = cartItem => {
    const restCart = carts.filter(cart => cart.idMeal != cartItem.idMeal);
    setCart(restCart);
    toast('Cart deleted!');
  };
  useEffect(() => {
    fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`)
      .then(res => res.json())
      .then(meals => setMeals(meals.meals));
  }, [search, carts]);

  return (
    <>
      <div className="join md:ms-12 my-12 w-full md:w-1/2">
        <input
          onChange={e => handleInputValue(e.target.value)}
          className="input w-10/12  input-bordered join-item"
          placeholder="Search your meals"
        />
        <button
          onClick={handleSearch}
          className="btn btn-warning join-item rounded"
        >
          Search
        </button>
      </div>
      <div className="flex gap-10 justify-between ">
        <div className="w-9/12 grid grid-cols-1 md:grid-cols-3 gap-8 px-8">
          {meals &&
            meals.map(meal => <Meal meal={meal} addToCart={addToCart}></Meal>)}
        </div>
        <div className="w-3/12 sticky top-0">
          <div className="sticky top-0">
            <h3 className="text-3xl font-semibold">Cart Section</h3>
            <p>Total Cart: {carts && carts.length}</p>
          </div>
          <div className="my-5 sticky top-20">
            {carts &&
              carts.map(cart => (
                <Cart cart={cart} cartDeletHandler={cartDeletHandler}></Cart>
              ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Meals;
