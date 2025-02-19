
import Logo from '../../assets/images/SkillUp-Dark.png'

const StudentDashboard = () => {
    return (
        <div style={{height:'100vh',width:"100%",display:'flex'}}>
            <div className="left"  style={{width:"55%", backgroundColor:'white'}}>
                   <nav style={{display:'flex', justifyContent:'space-between'}}>
                      <div className="logo">
                         <img src={Logo} alt="Logo" style={{ height:'200px', position: 'relative', top:'-80px'}} />
                      </div>

                      <div className="links" style={{position:'relative' , left:'-10px', bottom:'-40px', fontFamily:'Montserrat'}}>
                         <ul style={{display:'flex', color:'black'}}>
                            <li style={{textDecoration:'none', marginRight:'30px'}}>Coaching</li>
                            <li style={{textDecoration:'none', marginRight:'30px'}}>Paramètres</li>
                         </ul>
                      </div>
                   </nav>

                   <div className="moyenne" style={{height:'100px', width:'220px', borderRadius:'7px', boxShadow:'0 2px 5px rgba(0,0,0,0.2)'}}>
                        <div className="head" style={{height:'30%', backgroundColor:'blue', borderRadius:'5px', boxShadow:'0 2px 5px rgba(0,0,0,0.2)'}}>

                        </div>
                        
                        <div className="value" style={{textAlign:'left', padding:'.5rem', color: 'black', fontFamily:'Montserrat'}}>
                           14.25
                        </div>
                        <div className="circle">

                        </div>
                   </div>

                   <div className="table">
                      
                   </div>

                   <div className="repartition">

                   </div>
            </div>

            <div className="right-side" style={{width:"45%", backgroundColor:'aqua'}}>
ddddd
            </div>
        </div>
    );
};

export default StudentDashboard;
