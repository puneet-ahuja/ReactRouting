import React from "react";
import {BrowserRouter as Router , Route , Link} from 'react-router-dom';

class Body extends React.Component{
    constructor(props){
        debugger;
        super(props);
        this.currentUrl = this.props.currentUrl;
        this.HeadId = this.props.HeadId;   
    }

    render(){
        return (
            <div id="bodyContent" >
                <h1>{`This is heading of Body Content of ${this.HeadId}`}</h1>
                <hr/>
                <Route  path={`${this.currentUrl}/:SubHeadId`} component={({match,HeadId})=><h1>This is {match.params.SubHeadId} of ${HeadId} test</h1>}></Route>
                
                
                </div>
                );
    }
}

export default Body;