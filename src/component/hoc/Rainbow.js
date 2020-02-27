import React from 'react'

const Rainbow =(WrappedComponent)=>{

    const colours = ['red','pink','orange','blue','green','yellow'];
    const randomColour = colours[Math.floor(Math.random()*5)];
    const className = randomColour+ '-text'

    return (props)=>{
        return(
            <div className={className}>
                <WrappedComponent {...props}/>
            </div>
        )
    }
}
export default Rainbow;

// to install axios yarn add axios
// to install react-router  yarn add react-router-dom
// to install redux yarn add redux
// yarn add react-redux