import React from 'react'; // Correct import syntax
import { useState } from 'react'; // Correct import syntax
import '../../index.css';
import Dark from '../../assets/images/SkillUp-Dark.png'
import Input from '../../components/Input';
import '../../css/Login.css'

const AdminLogin = () => {

    const [id, setID] = useState(''); 
    const [mdp, setMdp] = useState('');
    return (
        <>
           <div>
               <img 
                    src={Dark} 
                    alt="Logo-SkillUp" 
                    className='logo'
                />
            </div>  
            <h4>ADMINISTRATION</h4>

            <div className='Inputs'>
                <Input placeholder="Identifiant" value={id} onChange={ (e)=>  setID(e.target.value)} />
                <Input placeholder="Mot de passe" value={mdp} onChange={ (e)=>  setMdp(e.target.value)} />
            </div>
        </>
    );
}; 

export default AdminLogin;