import React from 'react';

const Navbar = () => {
  return (
    <nav className="h-20 bg-black text-white md:px-12 flex justify-between items-center">
      <div className="w-fit">
        <h1 className="text-3xl font-bold">Meals Shop</h1>
      </div>
      <div>
        <a className="mx-5 hover:text-orange-500 transition-all" href="/">
          Home
        </a>
        <a className="mx-5 hover:text-orange-500 transition-all" href="/">
          About
        </a>
        <a className="mx-5 hover:text-orange-500 transition-all" href="/">
          Contuct
        </a>
        <a className="mx-5 hover:text-orange-500 transition-all" href="/">
          Blog
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
