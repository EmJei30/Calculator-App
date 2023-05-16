import React, { useState } from 'react';
import '../stylesheets/App.css';


function Calculator(){
    const [calc, setCalc] = useState('');
    const [result, setResult] = useState('');

    const ops = ['/', '*', '+', '-', '.'];

    //create a const update as arrow function that passes value as argument that represents by the value of the buttons
    // when you click the buttons it applies its key value

    const updateCalc = (value) =>{

        //to avoid multiple input of operators create an condition
        if(
            //if the last value is an operator and the calculation is equal to null
            ops.includes(value) && calc ===''||
            //or the operator includes the value and the last value is also an operator
            ops.includes(value) && ops.includes(calc.slice(-1))
        ){
            //will return nothing
            return;
        }
            //if the statement above if false, then it will execute the setCalc
            setCalc (calc + value);
        // to update the result
        //if the last value is not an operator
        if(!ops.includes(value)){
            //set the result
            // the eval basically evaluates whatever string you pass in
            //we use calc + value because it is not updated in the next call and converted again to string
            setResult(eval(calc + value).toString());
        }   
    }

   //creating a function wherein it iterates button from 1 - 9 to shorten the html code
    const createNumbers = () =>{
        const digits = [];
        for(let i = 1; i < 10; i++){
            digits.push(
                //the value of i should be converted to string to avoid error
                <button key = {i} onClick={()=>updateCalc(i.toString())}>{i}</button>
            )
        }
        return digits;
    }
    //creating funtion for = sign
    const calculate =()=>{
        //this code just evaluate the current calc value and return it as a string
        setCalc(eval(calc).toString());
    }

    //to delete the last inputed value
    const deleteCalc =()=>{
        //if the calc is equal to null, it will return nothing
        if(calc ===''){return;};

        //if the calc is not null, we will remove the last value inputed
        const value = calc.slice(0, -1);
        setCalc(value);
    }
    //to clear the value
    const clearCalc = () =>{
        setCalc('');
        setResult('');
    }
    
    return (
        <div className='container'>
            <div className='calculator'>
                <div className='Output'>
                    {result ? <span>({result})&nbsp;</span>: ''}
                    {calc || '0'}
                </div>
                <div className='operators'>
                    <button type = 'submit' onClick={()=>updateCalc('/')}>/</button>
                    <button type = 'submit' onClick={()=>updateCalc('*')}>*</button>
                    <button type = 'submit' onClick={()=>updateCalc('+')}>+</button>
                    <button type = 'submit' onClick={()=>updateCalc('-')}>-</button>  
                    <button type = 'submit' onClick={()=>deleteCalc()}>Del</button>  
                </div>
                <div className='number'>
                    {createNumbers()}
                </div>
                <div className='ops'>
                    <button type = 'submit' onClick={()=>clearCalc()}>C</button>
                    <button type = 'submit' onClick={()=>updateCalc('0')}>0</button>
                    <button type = 'submit' onClick={()=>updateCalc('.')}>.</button>
                    <button type = 'submit' onClick={()=>calculate()}>=</button>  
                </div>
            </div>
        </div>
    )
};
export default Calculator;