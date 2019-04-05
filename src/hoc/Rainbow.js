import React from 'react'

const Rainbow = (WrappedComponent) => {
    const colors = ['red','blue','pink','orange','green','purple','yellow']
    const randomColor = colors[Math.floor(6*Math.random())];
    const className = randomColor+"-text";
    return(props) => {
        return(
            <div className={className}>
                <WrappedComponent {...props} />
            </div>
        )
    }
}
export default Rainbow;