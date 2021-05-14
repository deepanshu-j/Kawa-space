import React,{useState} from 'react'
import PropTypes from 'prop-types'
import './Card.css';

function Card(props){
      // {console.log(props.obj)}

      return  <div className={`Card ${props.className}`} onClick={props.onClick}> 
          
            <div className="Card__top">{props.obj.gender} . {props.obj.nat}</div>
            <div className="Card__middle">
                  {props.obj.name.title} 
                  {props.obj.name.first} 
                  {props.obj.name.last}</div>
            <div className="Card__bottom">{props.obj.email}</div>
        </div>
    
}

export default Card;