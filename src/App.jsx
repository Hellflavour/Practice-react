// import React, { use, useState } from 'react'

// const App = () => {

//   const submitHandler = (e)=>{
//     e.preventDefault()
//     console.log(username)
//     setUsername('')
//   }

//   const [username, setUsername] = useState("")
   
//     return (
//     <div>
//        <form onSubmit={(e)=>{submitHandler(e)}} className='flex flex-col' >
//         <input value={username} onChange={(e)=>{setUsername(e.target.value)}} className='px-4 py-3 rounded text-xl m-5 w-50' type="text" placeholder='Entername'/>
//         <button className='px-4 py-3 m-5 text-xl text-white font-semibold bg-emerald-600 rounded w-25 '>SUBMIT</button>
//        </form>
//     </div>
//   )
// }

// export default App 


import React from 'react'
import Header from './components/Header'
import Navbar from './components/Navbar'
import Footer from './components/Footer'

const App = () => {
  return (
   <>
   <Navbar></Navbar>


   <Footer></Footer>
   </>
  )
}

export default App