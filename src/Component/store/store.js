import {createStore} from 'redux';
import reducertodo from '../reducer/reducer';

// const store =createStore(reducertodo,window.REDUX_DEVTOOLS_EXTENSION && window.REDUX_DEVTOOLS_EXTENSION())

const store = createStore(reducertodo,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  );

export default store;