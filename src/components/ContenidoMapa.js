import React, { Component } from "react";
import { GoogleMap } from "simple-react-google-maps";
export default class Maps extends Component{
    render(){
        return(
            <div>
                <GoogleMap 
                style={{
                    height:'300px',width:"100px"
                }}
                zoom={10}
                center={{
                    lat:10.423765,
                    lng:-1.664428
                }}
                />
            </div>
        )
    }
}