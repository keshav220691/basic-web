import React from 'react'
import { useParams } from 'react-router-dom'

function User() {
  const { userid } = useParams();
  return (
    <>
      <div className='flex justify-between items-center w-full p-5'>
        <div className='flex flex-col justify-center items-start gap-2 '>
            <div className='border rounded-lg p-2'>
              <img className='max-w-24 max-h-24 ' src='https://cdn-icons-png.flaticon.com/512/149/149071.png' alt="image"/>
            </div>
            <p className='text-2xl text-gray-500'>User Id : {userid}</p>
            <p className='text-2xl text-gray-500'>E-mail : {userid}@Gmail.com</p>
            <div className='mt-5 w-1/2'>
            <p className='text-2xl text-gray-600 '>About</p> 
            <p className='text-sm text-gray-500'>{userid} , is a software Engineer and full stack java developer and cruntly doing B.tech. For more Info. E-mail : {userid}@Gmail.com</p>
              </div>                       
        </div>
        <div className="md:5/12 lg:w-5/12">
                        <img
                            src="https://tailus.io/sources/blocks/left-image/preview/images/startup.png"
                            alt="image"
                        />
                    </div>
      </div>
    </>
  )
}

export default User