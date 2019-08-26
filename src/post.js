import { createStore } from 'redux';
import { ADD_POST, addPost, ADD_TITLE, addTitle, ADD_BODY, addBody, DELETE_TITLE, deleteTitle, deleteBody, DELETE_BODY } from './actions/postActions';


const initialState = {
  title: '',
  body: ''
};


function reducer(state = initialState, action) {
  console.log('action received', action);
  switch(action.type) {
    case ADD_TITLE:
      return { ...state, title: [...state.title, action.payload] };
    case ADD_BODY:
      return { ...state, body: [...state.body, action.payload] };
    case DELETE_TITLE:
      return { ...state, title: state.title.filter(title => title !== action.payload) };
    case DELETE_BODY:
      return { ...state, body: state.body.filter(body => body !== action.payload) };
    // case 'ADD_POST':
    //   return { title: [], body: [] };
    case ADD_POST:
      return { ...state, title: [...state.title, action.payload], body: [...state.body, action.payload] };
    default:
      return state;
  }
}

const store = createStore(reducer, initialState);

store.subscribe(() => {
  console.log('subscribe', store.getState());
});


console.log('phase 1 initial', store.getState());

// dispatch to update the store
store.dispatch(addPost('new title', 'new body'));



console.log('phase 2 dispatched', store.getState());



