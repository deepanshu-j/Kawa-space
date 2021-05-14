import React,{useState,useEffect} from 'react'
import PropTypes from 'prop-types'
import Navbar from './Navbar/Navbar';
import Jumbotron from './Jumbotron/Jumbotron';
import Card from './Card/Card';
import './Page.css';
import './Card/Card.css'
import axios from 'axios';


function Page(){
      

     // The Array that stores all the cards
      const [cards,setCards]=useState([]);

     //  The variable that holds which Card was Clicked by the User
      const [clickedIdx,setClickedIdx] =useState(0);

      const clickHandler=(idx)=>{

     //    This Function is Passed to the Cards and It updates the variable
     //     that holds which Card was Clicked by the User
     // Also Don't Forget we are using the index as Key, we could have used external library like uuid
     // If index wouldn't sit well   

          //Console log to see which card the user clicked//
          // console.log(cards[idx]);
          setClickedIdx(idx);
      }



      useEffect(()=>{
     //   This useEffect fetches Data from the External API and populate our local array(cards[]) in our state 
      
          function fetchData(){
               axios.get('https://randomuser.me/api/?inc=gender,name,nat,location,picture,email&results=20')
                    .then(response=> setCards(response.data.results))
                
          }
          fetchData();
         
      },[]);

     //  This is the Main Component
     //      We have 3 Components in the Page 
     //      1.Navabar
     //      2.Jumbotron - Big Card
     //      3.Cards Container - which contains all the Cards
      return  (<>
         
          {/* Component 1 */}
          <Navbar/>
          
          {/* Component 2-Jumbotron  */}
          {cards.filter((obj,idx)=>{return idx===clickedIdx}).map((obj)=>{
               return <Jumbotron obj={obj}/>
          })}
             

          {/* Component 3 - Card Container */}
          <div className="Card__container">
               {cards.map((obj,idx)=>{
                    return <Card 
                              key={idx} 
                               className={`${clickedIdx===idx ?'purple':'normal'}`} 
                              onClick={()=>clickHandler(idx)}  obj={obj}/>
               } )}
          </div>
        </>)
     

        
    
}

export default Page;