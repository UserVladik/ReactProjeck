import React from 'react'

const wiht = (Component, className) => {
    return (props) => {
        return (
            <div className = {className}>
                <Component {...props} />
            </div>
        )
    }
}

export default wiht