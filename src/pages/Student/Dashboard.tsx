
import Logo from '../../assets/images/SkillUp-Dark.png';
import Table from '../../components/Table';
import Chatbot from '../../components/Chatbot';

const StudentDashboard = () => {

    const userInitial = "N";

    return (
        <div style={{height:'100vh',width:"100%",display:'flex'}}>
            <div className="left"  style={{width:"55%", backgroundColor:'white'}}>
                   <nav style={{display:'flex', justifyContent:'space-between'}}>
                      <div className="logo">
                         <img src={Logo} alt="Logo" style={{ height:'200px', position: 'relative', top:'-70px'}} />
                      </div>

                      <div className="links" style={{position:'relative' , left:'-10px', bottom:'-40px', fontFamily:'Montserrat'}}>
                      <ul style={{ display: 'flex', listStyle: 'none', padding: 0 }}>
                            <li style={{ marginRight: '30px' }}>
                                <a href="#" style={{ textDecoration: 'none', color: 'black' }}>Coaching</a>
                            </li>
                            <li style={{ marginRight: '30px' }}>
                                <a href="#" style={{ textDecoration: 'none', color: 'black' }}>Paramètres</a>
                            </li>
                        
                         {/* Avatar Rond avec Initiale */}
                         <div style={{
                            width: "40px",
                            height: "40px",
                            borderRadius: "50%",
                            backgroundColor: "#2563eb",
                            color: "white",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            fontWeight: "bold",
                            fontSize: "18px",
                            textTransform: "uppercase",
                            cursor: "pointer",
                            boxShadow: "0px 2px 5px rgba(0,0,0,0.2)",
                            marginRight:'30px'
                        }}>
                            {userInitial}
                           
                        </div>
                        </ul>
                      </div>
                   </nav>

                   <div className="moyenne" style={{height:'100px', width:'220px', borderRadius:'7px', boxShadow:'0 2px 5px rgba(0,0,0,0.2)', position:'relative', top:'-140px', right:'-70px', backgroundColor:'white'}}>
                        <div className="head" style={{height:'30%', backgroundColor:'blue', borderRadius:'5px', boxShadow:'0 2px 5px rgba(0,0,0,0.2)'}}>
                                <p style={{fontFamily:'Montserrat'}}>Moyenne obtenue</p>
                        </div>
                        
                        <div className="value" style={{textAlign:'left', padding:'.5rem', color: 'black', fontFamily:'Montserrat', display:'flex'}}>
                           14.25

                           <div style={{borderRadius:'50%', height:'10px', width:'10px', backgroundColor:'orange', position:'relative', bottom:'-7px', right:'-10px'}} className="circle">
                           
                           </div> 
                        </div>
                        

                   </div>

                   
                    <Table />

                   <div className="table">
                      
                   </div>

                   
            </div>

            <div className="right-side" style={{width:"45%", backgroundColor:'rgba(182, 211, 255, 0.3)'}}>
                    <Chatbot />
            </div>
        </div>
    );
};

export default StudentDashboard;
