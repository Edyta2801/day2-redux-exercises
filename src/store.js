import { createStore, combineReducers } from 'redux'



const reducer1 = () => {
    return {
        name: 'Ala'
    }
}


const reducer2 = () => {
    return {
        name: 'Ola'
    }
}

const rootReducers({
    reducersWithoutShortcut: reducer1,
    reducer2
})


export const store = createStore(
    rootReducer
)

console.log(store)
console.log(store/getState()) 
console.log(rootReducer)