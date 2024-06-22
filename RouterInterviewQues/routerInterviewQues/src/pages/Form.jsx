import React from 'react'

const Form = () => {

    
  return (
    <div>
        <h3>Form</h3>
        <form onSubmit={()=>{}}>
            <input type='email' name='email' placeholder='Email'></input>
            <input type='password' name='password' placeholder='Password'></input>
            <input type='button' value={submit}>Submit</input>

        </form>
    </div>
  )
}

export default Form