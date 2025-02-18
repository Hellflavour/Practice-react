import React from 'react'

const Card = (props) => {
    console.log(props)
  return (
    <div className='mr-9 bg-white text-black inline-block p-6 text-center'>
        <img className='ml-8 h-32 w-32 rounded-full mb-3' src={props.photo} alt="" />
        <h1 className='text-2xl font-semibold mb-4'>{props.username} {props.surname}</h1>
        <h4 className='text-blue-400'>{props.profession}</h4>
        <h2>{props.city}, {props.age}</h2>
        <button className='mt-5 bg-emerald-700 text-white px-4 py-2 rounded font-medium'>Submit</button>
    </div>
  )
}

export default Card