import React, { useEffect, useState } from 'react';
import '../stylesheets/App.css';


function Calculator(){
   
    const createNumbers = () =>{
        const digits = [];

        for(let i = 1; i < 10; i++){
            digits.push(
                <button key = {i}>{i}</button>
            )
        }
        return digits;
    }
    
    return (
        <div className='container'>
            <div className='calculator'>
                <div className='Output'>
                    <span>(0)&nbsp;</span>0
                </div>
                <div className='operators'>
                    <button type = 'submit'>/</button>
                    <button type = 'submit'>*</button>
                    <button type = 'submit'>+</button>
                    <button type = 'submit'>-</button>  
                </div>
                <div className='number'>
                    {createNumbers()}
                    <button type = 'submit'>0</button>
                    <button type = 'submit'>.</button>
                    <button type = 'submit'>=</button>  
                </div>
            </div>
        </div>
    )
};
export default Calculator;