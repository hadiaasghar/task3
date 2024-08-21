import React from 'react'
import SingleChat from './SingleChat'
import { data } from './Data'


const Container = () => {
  return (
    <>
    <div className='flex items-center  flex-col  '>
      {data.map((item,index)=>{
        return  <SingleChat{...item}/>;
      }
      
      )}
      
       
      
    </div>
    </>
  )
}

export default Container
