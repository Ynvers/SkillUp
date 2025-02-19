import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../assets/images/SkillUp-Dark.png';
import Bg from '../../assets/images/bg.jpg';
import '../../css/Explore.css';

const StudentExplore = () => {
    return (
        <div style={{ height:'100vh', display: 'flex'}}>

            <div className="left" style={{width:'60%'}}>
                <div className="logo">
                    <img 
                         src={Logo} alt="Logo" />
                </div>

                <p  
                    style={{
                        fontFamily:'Montserrat',
                        color:'black'
                    }}
                    className="slogan">
                    Parce que l'excellence ne s'improvise pas
                </p>

                 <div className="roles">
                    
                    
                        <Link to="/student/login">
                          <button className="link" style={{background:'transparent', border: '1px solid #0956CA', color:'black'}}>Etudiant</button>
                        </Link>
                    
                    
                       <Link to="/admin/login">
                           <button className="link">Admin/Professor</button>
                       </Link>
                 </div>
                
            </div>

            <div className="right" style={{width:'40%'}}>
                 
            </div>

         </div>
    );
};

export default StudentExplore;
