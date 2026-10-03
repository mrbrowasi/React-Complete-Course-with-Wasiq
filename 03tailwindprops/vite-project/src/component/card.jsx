import React from 'react'

function Card(props) {
  return (
    <div className="w-100 h-100 rounded-xl bg-black p-5 shadow-lg ml-4 mr-4">
        <img src = "https://i.pinimg.com/1200x/44/bb/d5/44bbd5661d170c7cf962fbb30ce1e228.jpg" alt="AirMax Pro" className='z=0 h-65 w-full rounded-md object-cover mb-1'>
        </img>
        <h2 className="text-xl font-bold">{props.username}</h2>
        <p className="mt-2 text-gray-600">
            This is a simple React + Tailwind card.
        </p>

        <button className="mt-4 rounded-lg bg-blue-500 px-4 py-2 text-white hover:bg-blue-600">
            {props.btntext}
        </button>
    </div>
  )
}

export default Card
