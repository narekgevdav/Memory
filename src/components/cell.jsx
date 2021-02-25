import { useState } from "react"


function  Cell(props){
    const [style, setStyle] = useState('flex')
    const [item, setItem]=useState()
    
    const handleOnClick = (e, item)=>{
    setItem(props.value)    
    //console.log(props.checkData(e.target.attributes.name.value))

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
        alignItems: 'center'
    }}
        onClick = {(e)=>handleOnClick(e, item)}>
            {item}
        </div>
    )
        
    
}

export default Cell