import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../assets/images/SkillUp-Dark.png';
import Bg from '../../assets/images/bg.jpg';

const StudentExplore = () => {
    return (
        <div style={{ height:'100vh'}}>
         <div className="logo">
            <img src={Logo} alt="Logo" />
         </div>

         <div>
          <button
            style={{fontFamily:'Montserrat'}}
          >
            Se connecter
          </button>
         </div>
         </div>
    );
};

export default StudentExplore;
