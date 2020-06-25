import React, { Component } from 'react';
import axios from "axios";

import './body.css';



export default class mainbody extends Component {
    constructor() {
        super();

        this.state = {
            videoItems: []
        }
    }
    render() {
        return(
            <div className="body-wrapper">
                <div className="platform">
                    <div className="videoplayer">
                    <iframe width="1080" height="720" src="https://www.youtube.com/embed/9sWEecNUW-o" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    </div>

                </div>

            </div>
        );
    }
};




