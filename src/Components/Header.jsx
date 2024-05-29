
import React,{useEffect,useState} from 'react';
import {Link} from 'react-router-dom';



const Header=()=>{


const [btn,setbtn]=useState("Login");
    // useEffect(()=>{
    //         console.log('clicked');
    //  } ,[])
    
    return(
        <>
     <div className="container">
            <div className="left">
                <img className="image"src="https://cdn-icons-png.flaticon.com/512/2927/2927347.png" alt="" />
            </div>
        <nav>
            <ul>
                <li>
                      <Link to="/">Home</Link>
                </li>
               
                <li> 
                    <Link to='/about'>About</Link>
                </li>
                <li> 
                     <Link to="/contacts">Contact</Link>
                </li>
                <button className="bts" onClick={()=>{
                    btn==="Login"
                    ?setbtn('Logout')
                    :setbtn('Login')
                }}>{btn}</button>
              
           
          
          
            </ul>
            
        </nav>
       

         
        
        
        
    </div>

     
     


        
    
        </>
    )
    
  
    
    
}

export default Header;









