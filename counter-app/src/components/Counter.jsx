import react, { useState } from 'react';



function Counter () {
    const [count,setCount]= useState(0);

    return (
        <div className='min-h-screen flex item-center justify-center bg-gray-100 pt-50'>
         <div className='bg-white p-6 rounded-lg shadow-md text-ce
          w-80 h-80 justify-center items-center '> 

          <h1 className='text-2xl font-bold mb-10 text-center text-green-800'>Counter App</h1>

          <p className='text-4xl font-semibold mb-7 pl-28'>{count}</p>

          <div className='flex justify-between'>
            <button onClick={()=>setCount(count+1)}
                className="bg-green-500 hover:bg-green-600 text-black text-2xl px-4 py-2 rounded ml-9 mt-4">
                    +

            </button>

            <button onClick={()=>setCount(count -1)}
                className="bg-green-500 hover:bg-green-600 text-bla
                 text-2xl px-5 py-2 rounded mr-1 mt-4">
                    -

            </button>
            
                <button onClick={()=>setCount(0)}
                    
                    className="bg-gray-300 hover:bg-gray-400 text-black 
                 text-2xl px-5 py-2 rounded mr-1 mt-4">
                    Reset

                </button>

            

          </div>

         </div>
        </div>

    )
}
export default Counter;
