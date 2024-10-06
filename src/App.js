import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import yaya from './images/yaya.jpg';

function App() {
  const [isVisible, setIsVisible] = useState(false);

  const handleVisibility = () => {
    setIsVisible(!isVisible);
  }
  return (
    <>
   {isVisible && (<div className='Sidebar'>
      <div className='header'>We are <br/>MERCYLAND YOUTH AND YOUNG ADULTS CHURCH</div>
      <div>
        <ul style={{listStyle:'none'}}>
          <li>About us</li>
          <li>Our Programmes</li>
          <li> Contact us</li>
          <li>Prayer and Counselling</li>
          <li>Order of Services</li>

          
        </ul>
        <div style={{margin:'20px'}}>
        <b style={{textAlign:'center', padding:'10px'}}>For Support and Contributions
          <button>CLICK TO SUPPORT US</button>
          </b>
      </div>
      </div>
      <span style={{ padding:'20px', backgroundColor:'blue', position:'absolute', right:5, bottom:10, borderRadius:'50px'}} onClick={handleVisibility}>X</span>
    </div> )}
    <div className='Nav'> <div style={{
      display:'flex',
      justifyContent:'center',
      alignItems:'center'
    }}><img src={yaya} style={{ height:'60px', width: '60px', marginRight:'10px'}} alt='logo'/>
    RCCG MERCYLAND<br/> Youth & Young Adults </div> <div> <span style={{ padding:'20px', backgroundColor:'blue', position:'absolute', right:5, bottom:10, borderRadius:'50px'}} onClick={handleVisibility}>mENU</span></div></div>
    <div className='App'>
      <p className='church'>THE REDEEMED CHRISTAIN CHURCH OF GOD</p>
      <p className='area'>MERCYLAND AREA</p>
      <h2>Youth and Young Adult church</h2>
      
    </div>
    </>
  );
}

export default App;
