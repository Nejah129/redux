import{createStore} from 'redux'
import TaskReducer from './TaskReduser'
const devTools = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  const store = createStore(TaskReducer, devTools);


  export default store
