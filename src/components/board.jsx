import { useState } from 'react';
import Cell from './cell';

function Board(){
    const shuffleArray= (array) => {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
        return array
    }
    let double = []
    const input = [1,2,3,4,5,6,7,8,1,2,3,4,5,6,7,8]
    const random = shuffleArray(input)
    const [data, setData] = useState(random)
    
    const checkData=(value)=>{
       if(double.length<1){
           double.push(value)
        } else {
            double.push(value)            
            if(double[0]==double[1]){
                double = []
                return 'match'               
              
            }else {
                double = []
                return 'noMatch'
            }
            
            
        }
        
    }
    


    return(
        <div style={{width: 400, height: 400, border: 'solid 1px black'}}>
        {data.map(item=><Cell item={item} checkData = {checkData}/>)}
        </div>
    )
}

export default Board