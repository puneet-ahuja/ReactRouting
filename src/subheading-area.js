import React from "react";
import {BrowserRouter as Router , Route , Link} from 'react-router-dom';

class SubHeading extends React.Component{

    constructor(props){
        super(props);
        this.currentUrl = this.props.currentUrl;
        this.HeadId = this.props.HeadId;
    }
    render(){
        return (
                <div id="subHeadingArea">

                    <Link className="subHeading" to={`${this.currentUrl}/subheading1`} >{`Subheading1 of ${this.HeadId}`}</Link>
                    <Link className="subHeading" to={`${this.currentUrl}/subheading2`} >{`Subheading2 of ${this.HeadId}`}</Link>
                    <Link className="subHeading" to={`${this.currentUrl}/subheading3`} >{`Subheading3 of ${this.HeadId}`}</Link>
                    <Link className="subHeading" to={`${this.currentUrl}/subheading4`} >{`Subheading4 of ${this.HeadId}`}</Link>
                     
                </div>
        );
    }
}

export default SubHeading;