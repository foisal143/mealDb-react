const getLocalValue = () => {
  let localData = {};
  const localValue = JSON.parse(localStorage.getItem('cart'));
  if (localValue) {
    localData = localValue;
  }
  return localData;
};

const setLocalStorage = id => {
  const getLocal = getLocalValue();
  const quantity = getLocal[id];
  if (quantity) {
    const newQuantity = quantity + 1;
    getLocal[id] = newQuantity;
    localStorage.setItem('cart', JSON.stringify(getLocal));
  } else {
    getLocal[id] = 1;
    localStorage.setItem('cart', JSON.stringify(getLocal));
  }
};

export { getLocalValue, setLocalStorage };
