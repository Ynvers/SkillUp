import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Importer useNavigate
import '../../index.css';
import Dark from '../../assets/images/SkillUp-Dark.png';
import Input from '../../components/Input';
import '../../css/Login.css';

const AdminLogin = () => {
    const [id, setID] = useState('');
    const [mdp, setMdp] = useState('');
    const navigate = useNavigate(); // Hook pour rediriger

    const handleLogin = () => {
        if (id === 'admin' && mdp === 'admin12345') {
            navigate('/admin/dashboard'); // Redirection vers la page admin
        } else {
            alert('Identifiant ou mot de passe incorrect !');
        }
    };

    return (
        <>
            <div>
                <img src={Dark} alt="Logo-SkillUp" className='logo' />
            </div>  
            <h4>ADMINISTRATION</h4>

            <div className='Inputs'>
                <Input 
                    type="text"
                    placeholder="Identifiant" 
                    value={id} 
                    onChange={(e) => setID(e.target.value)} 
                />
                <Input 
                    placeholder="Mot de passe" 
                    type="password"
                    value={mdp} 
                    onChange={(e) => setMdp(e.target.value)} 
                />
            </div>

            <button 
                style={{position:'relative', top:'-100px', fontFamily:'Montserrat', padding:'1rem', backgroundColor:'#0956CA', color: 'white', border: 'none', cursor: 'pointer'}}
                onClick={handleLogin}
            >
                Se connecter
            </button>
        </>
    );
}; 

export default AdminLogin;
