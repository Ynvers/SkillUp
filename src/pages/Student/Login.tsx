import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../../index.css';
import Dark from '../../assets/images/SkillUp-Dark.png';
import Vector from '../../assets/images/Vector1.png';
import Input from '../../components/Input';
import '../../css/Login.css';

const StudentLogin = () => {
    const [matricule, setMatricule] = useState<string>(''); 
    const [mdp, setMdp] = useState<string>('');
    const navigate = useNavigate(); 
    
    const handleLogin = () => {
        if (matricule === '11468123' && mdp === 'slay12345') {
            navigate('/student/dashboard'); // Redirection vers la page étudiante
        } else {
            alert('Identifiant ou mot de passe incorrect !');
        }
    };

    return (
        <>
            <img 
                style={{
                    position: 'absolute',
                    left: 0,
                    top: 0,
                    height: '200px'
                }}
                src={Vector} 
                alt="Vector" 
            />
          
            <div>
                <img 
                    src={Dark} 
                    alt="Logo-SkillUp" 
                    className='logo'
                />
            </div>  
            <h4>ETUDIANT</h4>

            <div className='Inputs'>
                <Input 
                    type="text"
                    placeholder="Matricule" 
                    value={matricule} 
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => setMatricule(e.target.value)} 
                />
                <Input 
                    type="password"
                    placeholder="Mot de passe" 
                    value={mdp} 
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => setMdp(e.target.value)} 
                />
            </div>

            <button 
                style={{
                    position: 'relative', 
                    top: '-100px', 
                    fontFamily: 'Montserrat', 
                    padding: '1rem', 
                    backgroundColor: '#0956CA'
                }} 
                onClick={handleLogin}
            >
                Se connecter
            </button>
        </>
    );
}; 

export default StudentLogin;
