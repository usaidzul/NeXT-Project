import React, { Component } from 'react';
import axios from "axios";
import "./search.css";

export default class Search extends Component{

constructor(){
    super();
    this.state = {
        iss: "no iss",
        id: ""
    };
}

handleButtonClick = () =>{
    axios.get("/getWheretheiss").then(response =>{
        console.log(response.data);
        this.setState(
            {
                date: response.data.date,
                lat: response.data.lat,
                lon: response.data.lon
            }
        )
    });
};
render(){
    return (
    <div>
            
                <label htmlFor="header-search">
                    <span className="visually-hidden">Search iss</span>
                </label>&nbsp;
                <input
                    type="text"
                    id="header-search"
                    placeholder="Search iss"
                    name="s" 
                />
                <button onClick={this.handleButtonClick}>Search</button>
            
    <div>
        <table>
            <thead>
                <tr>
                    <th> Date </th>
                    <th> Latitude </th>
                    <th> Longitude </th>
                </tr>
        </thead>
        <tbody>
            <tr>
                <td>{this.state.date}&nbsp;&nbsp;</td>
                <td>{this.state.lat}&nbsp;&nbsp;</td>
                <td>{this.state.lon}&nbsp;&nbsp;</td>
            </tr>
        </tbody>
        </table>
    </div>
    </div>
    )
}
}
