import { createStore} from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducer from './redux/reducer/rootReducer'
export const store = createStore(
    rootReducer,
    composeWithDevTools()
);

