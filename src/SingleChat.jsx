import React from 'react'

const SingleChat = ({ id, img, name, time, message }) => {
  return (
    <>
    <div className='border border-gray-700 w-80 h-70 mt-12'>
    <div className="">
     
     <div className='flex justify-between  w-{30vw} h-20 p-1 mt-2'>
      <div className='flex items-center'>
        <img src={img} className='rounded-full w-[4vw] h-[8vh]' />
        <div className='flex flex-col ml-2'>
          <h1>{name}</h1>
          <p className='text-xs mt-1'>
            {message}
          </p>
        </div>
      </div>
      <h6 className='mt-4 ml-20'>{time}pm</h6>
      </div> 
    </div>
    </div>
    </>
  )
}

export default SingleChat
