## React Tutorial
This is a simple react tutorial to demonstrate functional components and Hooks.

Hooks eliminates the need/use of class components to build react apps.

Functional components are faster and lighter than class
component because you only include stuffs you need unlike
class component that includes both stuff you used and
stuff you didn't use (because you inherited from React Component).

To use state in functional component,

import {useState} from 'react';

Useage example, to set a variable called data to state inside your functional component do

const [data,setData] = useState(the value);

to access the value call the variable name eg data to set state to the variable call 

setData(the new value);

for componentDidMount & componentDidUpdate, 
import {useEffect} from 'react';

And use as below

useEffect(()=>{

    //call the function or write the code you want to happen here
},[])
