export const ADD_DRINKS = 'ADD_DRINKS';
export const addDrinks = () => ({
  type: 'ADD_DRINKS',
});

export const ADD_CHIPS = 'ADD_CHIPS';
export const addChips = () => ({
  type: 'ADD_CHIPS',
});

export const ADD_SANDWICHES = 'ADD_SANDWICHES';
export const addSandwiches = () => ({
  type: 'ADD_SANDWICHES',
});

export const ADD_DRINKS_NAME = 'ADD_DRINKS_NAME';
export const addDrinksName = drinksName => ({
  type: 'ADD_DRINKS_NAME',
  payload: drinksName
});

