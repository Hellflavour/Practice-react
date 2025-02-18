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

// import React from 'react'
// import Card from './components/Card'

// const App = () => {
    
//   return (
//     <div> 
//         <Card a={'Ayush'} /> 
//         <Card a={'sid'}></Card>
//     </div>
//   )
// }

// export default App

// import React from 'react'
// import Card from './components/Card'

// const App = (props) => {

//   const users =  [
//         {
//           "name": "Rahul Sharma",
//           "city": "Mumbai",
//           "age": 28,
//           "profession": "Software Engineer",
//           "profile_photo": "https://randomuser.me/api/portraits/men/1.jpg"
//         },
//         {
//           "name": "Priya Verma",
//           "city": "Delhi",
//           "age": 25,
//           "profession": "Graphic Designer",
//           "profile_photo": "https://randomuser.me/api/portraits/women/2.jpg"
//         },
//         {
//           "name": "Amit Singh",
//           "city": "Bangalore",
//           "age": 30,
//           "profession": "Data Analyst",
//           "profile_photo": "https://randomuser.me/api/portraits/men/3.jpg"
//         },
//         {
//           "name": "Sneha Iyer",
//           "city": "Chennai",
//           "age": 26,
//           "profession": "Doctor",
//           "profile_photo": "https://randomuser.me/api/portraits/women/4.jpg"
//         },
//         {
//           "name": "Vikram Joshi",
//           "city": "Pune",
//           "age": 32,
//           "profession": "Entrepreneur",
//           "profile_photo": "https://randomuser.me/api/portraits/men/5.jpg"
//         }
//       ]
      

//   return (
//     <div>
//         <div className='p-10'>
//         {users.map(function(elem,idx){
//             return <Card key={idx} username={elem.name} age={elem.age} profession={elem.profession} city={elem.city} photo={elem.profile_photo}/>
//         })}
//         </div>
//     </div>
//   )
// }

// export default App

import React from 'react'

const App = () => {
  return (
    <div>App</div>
  )
}

export default App