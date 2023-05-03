import { createStore } from 'redux';
import rootReducer from './Models/rootReducer';

const store = createStore(rootReducer);

export default store;