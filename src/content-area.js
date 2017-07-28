import React from "react";
import SubHeading from './subheading-area';
import Body from './body-area';
import {BrowserRouter as Router , Route , Link} from 'react-router-dom';

class ContentArea extends React.Component{

    constructor(props){
        super(props);
        this.url = this.props.match.url;
        this.headingId = this.props.match.params.headingId;
    }


    render(){
        return (
            <Router>
                <div id="contentArea">
                    <SubHeading HeadId = {this.headingId} currentUrl={this.url}/>
                    <Body HeadId = {this.headingId} currentUrl={this.url} />
                </div>
            </Router>
        );
    }
}

export default ContentArea;