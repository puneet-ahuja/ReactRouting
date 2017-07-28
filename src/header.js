import React from "react";
import {BrowserRouter as Router , Route , Link} from 'react-router-dom';

class Header extends React.Component{
    render(){
        return (
            <header>
                
            <nav className="navbar navbar-toggleable-md navbar-light bg-faded">
                

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item active">
                            <Link className="nav-link" to="/heading1" >Heading1 </Link>
                            
                        </li>
                        <li className="nav-item active">
                            <Link className="nav-link" to="/heading2" >Heading2 </Link>
                        </li>
                    <li className="nav-item active">
                            <Link className="nav-link" to="/heading3" >Heading3 </Link>
                        </li>
                    </ul>
                    
                </div>
            </nav>
            
            </header>
        );
    }
}



export default Header;