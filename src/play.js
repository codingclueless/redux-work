import { createStore } from 'redux';

const initialState = {
  drinks: 0,
  chips: 0,
  sandwiches: 0
};

function reducer(state = initialState, action) {
    console.log('action received', action);
    switch(action.type) {
        case 'ADD_DRINKS':
            return{ ...state, drinks: state.drinks + 1};
        case 'ADD_CHIPS':
            return{ ...state, chips: state.chips + 1};
        case 'ADD_SANDWICHES':
            return{ ...state, sandwiches: state.sandwiches + 1};
        case 'REMOVE_DRINKS':
            return{ ...state, drinks: state.drinks - 1};
        case 'REMOVE_CHIPS':
            return{ ...state, chips: state.chips - 1};
        case 'REMOVE_SANDWICHES':
            return{ ...state, sandwiches: state.sandwiches - 1};
            default:
                return state;
    }
}

const store = createStore(reducer, initialState);

store.subscribe(() => {
    console.log('subscribe', store.getState());
})


console.log(store.getState());

store.dispatch({
    type: 'ADD_DRINKS'
});

console.log(store.getState());




console.log(store.getState());
store.dispatchEvent({
    type: 'ADD_FOOD',
    payload: 'Add food!'
});

console.log(store.getState())
};
