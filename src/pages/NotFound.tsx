import React from 'react'
import { Link } from 'react-router-dom'


const NotFound: React.FC = () => {
    return (
        <div>
            <h2> 404 Page not found!</h2>
            <p>Go  to the <Link to="/">Homepage</Link></p>
        </div>
    )
}

export default NotFound
