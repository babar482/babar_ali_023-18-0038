import React from 'react';
import welcomeImg from '../ass/images/div.png';
import Button from "react-bootstrap/Button";
function Welcome() {
  return (
    <>
    <div className='welcome'>
      <div className="row" style={{paddingTop:'30px'}}>
        <div className="col col-sm-6 col-md-6 col-lg-6" style={{ paddingLeft:'100px'}}> 
            <h1 style={{fontStyle:'bold'}}> Brainstorm </h1>
            <h2> your book </h2>
            <h2> easily. </h2>
            <p style={{color:'black'}}> World-class companies use Writealy </p>
            <p style={{color:'black'}}> AI writing platform to unlock </p>
            <p style={{color:'black'}}>brainstorming for publishing a book. </p>

            <Button variant="outline-secondary">Secondary</Button>{' '}
            <Button variant="danger">Secondary</Button>{' '}
           
            
        </div>
        
        <div className="col col-sm-6 col-md-6 col-lg-6">
            <img src={welcomeImg} alt='welcomeimage' width={400} height={250}/>
        </div>
      </div>
    </div>
    </>
  );
}

export default Welcome;