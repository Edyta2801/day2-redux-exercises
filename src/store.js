import { createStore, combineReducers } from 'redux'
import counter from './state/counter'




const rootReducer = combineReducers({
    // reducersWithoutShortcut: reducer1,
    // reducer2,
    counter
})


export const store = createStore(
    rootReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ &&
    window.__REDUX_DEVTOOLS_EXTENSION__()
)

