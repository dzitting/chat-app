// customMiddleware.js

const resolveMiddleware = store => next => action => {
    if (action.payload && action.payload.resolve && typeof action.payload.resolve === 'function') {
      // When the action has a `resolve` function in its payload
      // Call the `resolve` function with any necessary data
      action.payload.resolve(/* pass data to resolve function if needed */);
    }
  
    // Continue the action to the next middleware or reducer
    return next(action);
  };
  
  export default resolveMiddleware;
  