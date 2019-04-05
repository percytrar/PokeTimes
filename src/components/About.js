import React from 'react'
import Rainbow from '../hoc/Rainbow'
const About = (props)=>{
    console.log(props)
    return(
        <div className="container">
            <h4 className="center">About</h4>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur illum minus dignissimos earum labore nisi! Harum iure temporibus impedit iusto sunt in vero, eligendi omnis neque quia delectus. Explicabo, voluptatibus!</p>
        </div>
    )
}
export default Rainbow(About);