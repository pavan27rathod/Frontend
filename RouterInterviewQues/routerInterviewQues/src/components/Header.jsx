import React from 'react'
import { Link, NavLink } from 'react-router-dom'

const Header = () => {
  return (
    <div>
        <p>Mapping the routes and components </p>
        <p>1. To map the specific route to the specific component we have anchor tag in html, but that anchor tag takes user to a different page or refreshes the page. 
            so it is violating the core advantage of using react. <br/>
           2.Though we have different different components for routes. If we use anchor tag, component loads in html file 
            but the page is refershed or reloaded when we click on that link. <br />
           3.To avoid this reloading of a page, we have a library named "react-router-dom" which provides Link component which provides the features of anchor tag.
            Browser does not understand the Link component, it uses anchor tag behind the scenes. <br />
           4. Link component prevents page reloading.
        </p>
        <p><strong>NavLink :</strong></p>
        <p>1. Just like Link component, there is another component named NavLink which is also provided by react-router-dom <br />
           2. NavLink is a special kind of Link which specifies weather the given link is active, pending or transitioning <br/>
           3. When the given link is active, the active class is added to the component & this active class is used for styling or other purposes.
        </p>
        
        <div className='header'>
            {/* <a href='/'>Home</a>
            <a href='/posts'>Posts</a> */} 
            {/* Same can be written as  */}

            {/* <Link to="/">Home</Link>
            <Link to="/posts">Posts</Link> */}

            <NavLink to='/'>Home</NavLink>
            <NavLink to='/posts'>Posts</NavLink>
        </div>
        
    </div>
  )
}

export default Header