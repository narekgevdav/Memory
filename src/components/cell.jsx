import userEvent from "@testing-library/user-event"
import { useEffect, useState } from "react"
import {useStore} from "../store"




function  Cell(props){
    const {state,dispatch}=useStore()
    const [style, setStyle] = useState('flex')
    const [item, setItem]=useState()
    const [cursor, setCursor]=useState('pointer')
    useEffect(()=>{
        if(props.status==='closed'){
            
        } else if(props.status==='opened'){
            setItem(props.value)
        }
    },[props.status])
    
    const handleOnClick = ()=>{
        console.log(state.compare)
         if(!state.compare){
          dispatch({type: 'addFirstValue', data: [props.value, props.id]})
          console.log(state)
         }
    }

    return(
        <div
        name = {props.id} 
        style = {{boxSizing: 'border-box',
        display: style,
        float: 'left',
        height:100,
        width: 100,
        border: '2px solid black',
        textAlign: 'center',
        padding: '0',
        justifyContent: 'center',
        alignItems: 'center',
        cursor: cursor
    }}
        onClick = {(e)=>handleOnClick(e, item)}>
            {item}
        </div>
    )
        
    
}

export default Cell