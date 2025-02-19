
import "../../css/Dashboard.css"; 
import TllyW from '../../assets/images/SkillUp-tlly-White.png'
//import { FaHome, FaChartBar, FaCog, FaQuestionCircle } from "react-icons/fa";
import { PieChart, Pie, Cell, Tooltip, BarChart, Bar, XAxis, YAxis, CartesianGrid, ResponsiveContainer, LineChart, Line } from "recharts";

const Sidebar = () => {
  return (
    <div 
       style={{
        fontFamily:'Montserrat'
       }}
       className="sidebar">
      <img 
            style={{
                height:'150px',
                width:'150px'
            }}
            src={TllyW} alt="Logo-SkillUp" 
        />
      <nav >
        <a href="#" className="active"> Accueil</a>
        <a href="#"> Détails</a>
      </nav>
      <div className="bottom-menu">
        <a href="#"> Paramètres</a>
        <a href="#"> Aide</a>
      </div>
    </div>
  );
};

const StatCard = ({ title, value, description, color }) => {
  return (
    <div 
        style={{
            color:'black',
            fontFamily:'Montserrat',
            fontWeight:'bolder'
       }}
        className="stat-card">
      <h3
       style={{
         fontSize:'13px',
         textAlign:'left'
       }}
      >{title}</h3>
      <p className="value" style={{ 
        color, textAlign:'left' }}>{value}</p>
      <p className="description">{description}</p>
    </div>
  );
};

const pieData = [
  { name: "L1", value: 40, color: "#FF6384" },
  { name: "L2", value: 60, color: "#36A2EB" },
  { name: "L3", value: 45, color: "#FFCE56" },
  { name: "Master2", value: 50, color: "#4BC0C0" },
];

const barData = [
  { subject: "Analyse", 2024: 75, 2025: 85 },
  { subject: "Logique", 2024: 60, 2025: 80 },
  { subject: "Arithmétique", 2024: 50, 2025: 70 },
  { subject: "Langage C", 2024: 65, 2025: 75 },
  { subject: "POO", 2024: 55, 2025: 60 },
  { subject: "Aug", 2024: 45, 2025: 55 },
];

const lineData = [
  { year: "2015", avg: 13.5 },
  { year: "2016", avg: 14 },
  { year: "2017", avg: 13 },
  { year: "2018", avg: 12.8 },
  { year: "2019", avg: 12.5 },
  { year: "2020", avg: 12 },
];

const SuccessRate = () => {
    return (
      <div 
        style={{color:'black', fontFamily:'Montserrat'}}
        className="chart-box success-rate">
        <h3>Taux de réussite moyen</h3>
        <div className="success-content">
          <div 
            style={{fontFamily:'Montserrat'}}
            className="legend">
            <div className="legend-item"><span className="dot dot-l1"></span> L1 <strong>40%</strong></div>
            <div className="legend-item"><span className="dot dot-l2"></span> L2 <strong>60%</strong></div>
            <div className="legend-item"><span className="dot dot-l3"></span> L3 <strong>45%</strong></div>
            <div className="legend-item"><span className="dot dot-m2"></span> Master2 <strong>50%</strong></div>
          </div>
          <PieChart width={120} height={120}>
            <Pie data={pieData} dataKey="value" innerRadius={40} outerRadius={50} paddingAngle={5}>
              {pieData.map((entry, index) => (
                <Cell key={index} fill={entry.color} />
              ))}
            </Pie>
            <Tooltip />
          </PieChart>
        </div>
      </div>
    );
  };
  
const Dashboard = () => {
  return (
    <div className="dashboard-container">

      <Sidebar />

      <div className="dashboard-content">

        <h1 className="dashboard-title">Skill<span>Up</span></h1>

        <div 
          style={{display:'flex', justifyContent:'space-evenly'}}
          className="side1"
        >
            <StatCard title="Moyenne générale des élèves" value="13.12" description="✅ Supérieure à l’année dernière" color="#27AE60" />
            <SuccessRate />
        </div>
        
        <div 
            style={{display:'flex', justifyContent:'space-evenly'}}
            className="side2"
        >
          <StatCard 
            
            title="Nombre d’étudiants" value="782" description="📊 Courbe en évolution" color="#2C3E50" />
          <StatCard title="Nombre d’étudiants admis" value="327" description="📈 Courbe constante" color="#2980B9" />
          <StatCard title="Meilleurs élèves" value="ADISSO Nelxie" description="📚 Filière IA" color="#9B59B6" />
        </div>

        <div 
            className="side3"
        >
        <h3>Progression</h3>
            <ResponsiveContainer width="100%" height={200}>
              <LineChart data={lineData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="year" />
                <YAxis />
                <Tooltip />
                <Line type="monotone" dataKey="avg" stroke="#3498DB" strokeWidth={2} />
              </LineChart>
            </ResponsiveContainer>
        </div>
       
          
        </div>
      </div>
  );
};

export default Dashboard;
