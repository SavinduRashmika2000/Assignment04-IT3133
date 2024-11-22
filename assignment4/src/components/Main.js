import {useState} from 'react';
import {animals} from '../data/AnimalsDb'

export default function Main(){
    return(
       <table width='100%'allign-item='center'>
        <tr> 
            <td  colspan='4'>ss</td>
        </tr>
        <tr>
            <td>A</td>
            <td>B</td>
            <td colspan='2'>
                {
                   animals.map((index,animal)=>(
                   <h1 key={index}>{animal.name}</h1>
                   ))
                }    
            </td>
        </tr>
       </table>
    );
}