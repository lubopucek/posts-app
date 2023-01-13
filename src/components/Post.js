import React from 'react'

export default function Post(props) {

    return (
        <div className='post-body'>
            <h1>{props.item.title}</h1>
        </div>
    )
}