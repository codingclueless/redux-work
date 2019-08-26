export const ADD_TITLE = 'ADD_TITLE';
export const addTitle = (title) => ({
  type: 'ADD_TITLE',
  payload: title
});

export const ADD_BODY = 'ADD_BODY';
export const addBody = (body) => ({
  type: 'ADD_BODY',
  payload: body
});

export const DELETE_TITLE = 'DELETE_TITLE';
export const deleteTitle = (title) => ({
  type: 'DELETE_TITLE',
  payload: title
});

export const DELETE_BODY = 'DELETE_BODY';
export const deleteBody = (body) => ({
  type: 'DELETE_BODY',
  payload: body
});

export const ADD_POST = 'ADD_POST';
export const addPost = (title, body) => ({
  type: 'ADD_POST',
  payload: title, body
});
