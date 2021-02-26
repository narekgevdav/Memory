import { useEffect, useState } from 'react';
import Cell from './cell';
import {useStore} from "../store"

function Board(){
    const {state,dispatch}=useStore()
    

    return(
        <div style={{width: 400, height: 400, border: 'solid 1px black'}}>
        {state.data.map(state=>state.id && <Cell key={state.id} id={state.id} value = {state.value} status = {state.status}/>)}
        </div>
    )
}

export default Board