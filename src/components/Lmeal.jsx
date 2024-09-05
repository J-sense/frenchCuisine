import React from 'react'

const Lmeal = ({lmeal}) => {
    const {strCategoryDescription,strCategory,strCategoryThumb} =lmeal
  return (
    <div>
       
 
          
                <div className='relative mb-4 overflow-hidden rounded-lg
                bg-zinc-950 shado-lg h-64'>
                    <img src={strCategoryThumb}
                    className=' object-contain'/>
                    <div className=' absolute bottom-0 left-0 m-0 right-0
                    p-8 text-white backdrop-blur-md'>
                        <h3 className='text-3xl'>{strCategory}</h3>
                        <p className='max-w-sx text-lg'>{strCategoryDescription.substring(0,20)}</p>
                    </div>
                </div>
           
       
    
    </div>
  )
}

export default Lmeal
