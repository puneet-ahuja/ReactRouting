import React from "react";
import Header from "./header";
import Footer from "./footer";
import ContentArea from "./content-area";
import {BrowserRouter as Router , Route , Link} from 'react-router-dom';

class Homepage extends React.Component{
    render(){
        return(
            // Router to handle routing of Navigation Bar
            <Router>
                <div className="container"> 
                        
                        <Header />
                        <Route  path="/:headingId" component={ContentArea}></Route>
                        <Footer />
                    
                </div>
            </Router>
        );            
        
    }
}

export default Homepage;