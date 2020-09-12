import React, { useState} from 'react';
import Json from '../Json/data.json';

const Main = () => {
    let [box, setBox] = useState([['A', 'A', 'A', 'A'],['B', 'B', 'B', 'B'],['C', 'C', 'C', 'C'],['D', 'D', 'D', 'D']]);
    let [flag, setFlag]=useState(false);


    function access(e) {
    setFlag(true);


    if(shouldAppendRow(e)){
       let direction=getROwDirection(e);
       appendRow(direction);
    }
    if(shouldAppendColumn(e)){
      let direction=getColoumnDirection(e);
      appendColoumn(direction);
    }

    };
    
    function shouldAppendRow(e){
        if(box.length-1+''+e%10===e || 0+''+e%10===e)
            return true;
        return false;
    }
 
    function getROwDirection(e){
        if(box.length-1+''+e%10===e)
        return 'bottom';
        return 'top';
    }

    function appendRow(dir){
        if(dir==='top'){
            let appendableArray=box[0].map(_=>{return 'A'});
           setBox([appendableArray,...box])
        }
        else{
            let appendableArray=box[box.length-1].map(_=>{return 'D'});
           setBox([...box,appendableArray])
        }
    }

    function shouldAppendColumn(e){
         let len=box[0].length-1;
           if(e%10+''+0==='00' || parseInt(e/10)+''+len===e)
           return true;
       return false;
    }

    function getColoumnDirection(e){
        if(e%10+''+0==='00')
             return 'left';
        return 'right';
    }

    function appendColoumn(dir){
         if(dir=='left'){
            let oldarray=box;
            for(let i=0;i<oldarray.length;i++){
                let row=box[i];
                row.unshift('E');
            }
            setBox([...box,]);
         }
         else{
            let oldarray=box;
            for(let i=0;i<oldarray.length;i++){
                let row=box[i];
                row.push('F');
            }
            setBox([...box,]);
         }
    }
    return (
        <>
            <h1>Design your Solar panel</h1>
            {box.map((item, index) =>
                <div key={index}>
                    {item.map((sub, i) =>                   
                        <div key={index + i} className={flag==true?'box-container':'box'} onClick={() => {
                                access(index +''+ i)
                            }}>
                            {sub}
                        </div>
                        )}
                </div>
            )}
        </>
    );
}
export default Main;