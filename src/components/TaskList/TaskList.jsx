// import React from 'react'

// const TaskList = ({data}) => {
//   return (
//     <div id='task-list' className=' flex items-center justify-start gap-5 flex-nowrap h-[55%]  w-full overflow-x-auto mt-10'>


//       <div className='flex-shrink-0 h-full w-[300px] bg-red-200 rounded-xl p-5'>

//         <div className='flex justify-between items-center'>

        
//         <h3 className='bg-red-600 px-3 py-1 rounded text-sm '> High</h3>
//         <h4 className='text-sm'>20 Feb 2024 </h4>


//         </div>
//         <h2 className='mt-5 text-2xl font-semibold '> You have to study </h2>
//         <p className='text-sm mt-2 '> Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sapiente sunt cum consequuntur ex nemo quisquam eum! Sed est temporibus quod veritatis amet molestiae mollitia iure! Asperiores facilis quisquam odio ipsam. </p>

//       </div >
//       <div className='flex-shrink-0 h-full w-[300px] bg-blue-500 rounded-xl p-5'>

//         <div className='flex justify-between items-center'>

        
//         <h3 className='bg-red-600 px-3 py-1 rounded text-sm '> High</h3>
//         <h4 className='text-sm'>20 Feb 2024 </h4>


//         </div>
//         <h2 className='mt-5 text-2xl font-semibold '> You have to study </h2>
//         <p className='text-sm mt-2 '> Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sapiente sunt cum consequuntur ex nemo quisquam eum! Sed est temporibus quod veritatis amet molestiae mollitia iure! Asperiores facilis quisquam odio ipsam. </p>

//       </div >
//       <div className='flex-shrink-0 h-full w-[300px] bg-green-500 rounded-xl p-5'>

//         <div className='flex justify-between items-center'>

        
//         <h3 className='bg-red-600 px-3 py-1 rounded text-sm '> High</h3>
//         <h4 className='text-sm'>20 Feb 2024 </h4>


//         </div>
//         <h2 className='mt-5 text-2xl font-semibold '> You have to study </h2>
//         <p className='text-sm mt-2 '> Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sapiente sunt cum consequuntur ex nemo quisquam eum! Sed est temporibus quod veritatis amet molestiae mollitia iure! Asperiores facilis quisquam odio ipsam. </p>

//       </div >
//       <div className='flex-shrink-0 h-full w-[300px] bg-pink-500 rounded-xl p-5'>

//         <div className='flex justify-between items-center'>

        
//         <h3 className='bg-red-600 px-3 py-1 rounded text-sm '> High</h3>
//         <h4 className='text-sm'>20 Feb 2024 </h4>


//         </div>
//         <h2 className='mt-5 text-2xl font-semibold '> You have to study </h2>
//         <p className='text-sm mt-2 '> Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sapiente sunt cum consequuntur ex nemo quisquam eum! Sed est temporibus quod veritatis amet molestiae mollitia iure! Asperiores facilis quisquam odio ipsam. </p>

//       </div >
//       <div className='flex-shrink-0 h-full w-[300px] bg-green-500 rounded-xl p-5'>

//         <div className='flex justify-between items-center'>

        
//         <h3 className='bg-red-600 px-3 py-1 rounded text-sm '> High</h3>
//         <h4 className='text-sm'>20 Feb 2024 </h4>


//         </div>
//         <h2 className='mt-5 text-2xl font-semibold '> You have to study </h2>
//         <p className='text-sm mt-2 '> Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sapiente sunt cum consequuntur ex nemo quisquam eum! Sed est temporibus quod veritatis amet molestiae mollitia iure! Asperiores facilis quisquam odio ipsam. </p>

//       </div >
      

      
      
//     </div>
//   )
// }

// export default TaskList


import React from 'react'
import AcceptTask from './AcceptTask'
import NewTask from './NewTask'
import CompleteTask from './CompleteTask'
import FailedTask from './FailedTask'

const TaskList = ({ data }) => {
    return (
        <div id='tasklist' className='h-[50%] overflow-x-auto flex items-center justify-start gap-5 flex-nowrap w-full py-1 mt-16'>
            {data.tasks.map((elem, idx) => {
                if (elem.active) {
                    return <AcceptTask key={idx} data={elem} />
                }
                if (elem.newTask) {
                    return <NewTask key={idx} data={elem} />
                }
                if (elem.completed) {
                    return <CompleteTask key={idx} data={elem} />
                }
                if (elem.failed) {
                    return <FailedTask key={idx} data={elem} />
                }

            })}
        </div>
    )
}

export default TaskList
