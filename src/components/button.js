import React from 'react'

function Button({alt, className, name}) {
    return (
        <div>
            <a href='/' alt={alt} className={className}>{name}</a>
        </div>
    )
}

export default Button
