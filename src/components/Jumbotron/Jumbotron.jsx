import React from 'react'
import PropTypes from 'prop-types'
import './Jumbotron.css';

function Jumbotron(props){
    
  
      return  <div className="Jumbotron">

            <div></div>
            <div className="Jumbotron__center">
                <div className="Jumbotron__centerLeft">
               
                <img src={props.obj.picture.medium} alt="Avatar"/>

                </div>
                <div className="Jumbotron__centerRight">
                    <div className="Name">
                        {props.obj.name.title} 
                        {props.obj.name.first} 
                        {props.obj.name.last}
                    </div>
                    <div className="Detail">{props.obj.location.street.number}
                    , {props.obj.location.street.name},{props.obj.location.city}
                    , {props.obj.location.state}
                    , <b>{props.obj.location.country}</b>
                    , {props.obj.location.postcode}
           
            </div>
                  <div className="Gender"> {props.obj.gender} </div>  
                </div>
            </div>
    <div></div>
        </div>
    
}

export default Jumbotron;