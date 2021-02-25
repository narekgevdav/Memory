import { useEffect, useState } from 'react';
import Cell from './cell';
import {useStore} from "../store"

function Board(){
    const {state,dispatch}=useStore()
    console.log(state)

    return(
        <div style={{width: 400, height: 400, border: 'solid 1px black'}}>
        {state.data.map(state=><Cell key={state.id} value = {state.value}/>)}
        </div>
    )
}

export default Board