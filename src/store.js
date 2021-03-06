import { createContext, useReducer, useContext } from "react"

const shuffleArray= (array) => {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array
}

const input = [1,2,3,4,5,6,7,8,1,2,3,4,5,6,7,8]
const randomArray = shuffleArray(input)
const StoreContext = createContext()
let data = []
for (let index = 0; index < randomArray.length; index++) {
    data.push({id: index+1, value: randomArray[index], status: "closed"},)
}
const intialState = {data: data, compare:[]}



const reducer = (state,action) => {
  console.log(state.data[action.data[0]-1].status)
    switch(action.type){
        case "addValue":{
               return {
                ...state,
                data: [...state.data, data[data.findIndex(x => x.id === action.data[1])].status="opened"],
                compare: [{id: action.data[1], value:action.data[0]}]
            }
        }
        case "addSecondValue":{
          return {
           ...state,
           data: [...state.data, data[data.findIndex(x => x.id === action.data[1])].status="opened"],
           compare: [...state.compare, {id: action.data[1], value:action.data[0]}]
       }
   }
        case "resetCompare": {
          return{
            ...state,
            compare: []
          }
        }
        
        
        default:
      throw new Error(`Unhandled action type: ${action.type}`);
    }
}

export const StoreProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, intialState);
  
    return (
      <StoreContext.Provider value={{state, dispatch}}>
        {children}
      </StoreContext.Provider>
    )
  }
  
  export const useStore = () => useContext(StoreContext);