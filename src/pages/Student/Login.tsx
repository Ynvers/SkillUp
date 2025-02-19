import React from 'react'; // Correct import syntax
import { useState } from 'react'; // Correct import syntax
import '../../index.css';
import Dark from '../../assets/images/SkillUp-Dark.png'
import Input from '../../components/Input';
import '../../css/Login.css'

const StudentLogin = () => {

    const [matricule, setMatricule] = useState(''); 
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
            <h4>ETUDIANT</h4>

            <div className='Inputs'>
                <Input placeholder="Matricule" value={matricule} onChange={ (e)=>  setMatricule(e.target.value)} />
                <Input placeholder="Mot de passe" value={mdp} onChange={ (e)=>  setMdp(e.target.value)} />
            </div>
        </>
    );
}; 

export default StudentLogin;