import React from 'react'
import { Outlet, NavLink } from 'react-router-dom';

const HelpLayout: React.FC = () => {
    return (
        <div className='help-layout'>
            <h2>Website Help</h2>
            <p>Lorem ipsumm dolor</p>

            <nav>
                <NavLink to="faq"> View Faq</NavLink>
                <NavLink to="contact"> Contact Us</NavLink>
        
            </nav>

            <Outlet />
            
        </div>
    )
}

export default HelpLayout;
