import React from 'react'

const Card = (props) => {
    return (
        <div>
            <a href={props.elem.url} target="_blank">
                <div className='h-44 w-44 sm:w-48 md:w-52 overflow-hidden bg-white rounded-xl'>
                    <img className='h-full w-full object-cover' src={props.elem.download_url} alt="" />
                </div>
                <h2 className='py-3 px-3 font-bold'>{props.elem.author}</h2>
            </a>
        </div>
    )
}

export default Card