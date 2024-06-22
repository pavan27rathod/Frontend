// import React from 'react'
// import { useNavigate } from 'react-router-dom'

// const Home = () => {
//   useNavigate();
//   const handleSubmit=(e)=>{
//     e.preventDefault();

//   }
//   return (
//     <div>
//         <h3>Form</h3>
//         <form onSubmit={()=>{handleSubmit}}>
//             <input type='email' name='email' placeholder='Email'></input>
//             <input type='password' name='password' placeholder='Password'></input>
//             <input type='button' value="Submit">Submit</input>

//         </form>
//     </div>
//   )
// }

// export default Home

import React from 'react';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate(); // Assign useNavigate() to a variable
  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your form submission logic here
    navigate('/posts'); // Navigate to the next page
  };
  return (
    <div>
      <h3>Form</h3>
      <form onSubmit={handleSubmit}> // Call handleSubmit when form is submitted
        <input type='email' name='email' placeholder='Email'></input>
        <input type='password' name='password' placeholder='Password'></input>
        <input type='submit' value="Submit"/> // Use type='submit' instead of type='button'
      </form>
    </div>
  );
};

export default Home;