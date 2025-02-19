import '../css/Table.css'; // Assure-toi d'ajouter du style si nécessaire

const Table = () => {
    // Données des matières
    const data = [
        { matiere: "Logique", moyenne: 15.5, evolution: "+1.2", status: "Bon" },
        { matiere: "Probabilités", moyenne: 12.3, evolution: "-0.5", status: "Moyen" },
        { matiere: "Statistiques", moyenne: 17.8, evolution: "+2.0", status: "Excellent" },
        { matiere: "Equation diff", moyenne: 14.0, evolution: "+0.8", status: "Bon" },
        { matiere: "ML", moyenne: 10.2, evolution: "-1.0", status: "Faible" },

    ];

    return (
        <div className="table-container" style={{ color:'black', fontFamily:'Montserrat', position:'relative', top:'-100px'}}>
            <table>
                <thead>
                    <tr>
                        <th>Matière</th>
                        <th>Moyenne</th>
                        <th>Évolution</th>
                        <th>Status</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((row, index) => (
                        <tr key={index}>
                            <td>{row.matiere}</td>
                            <td>{row.moyenne}</td>
                            <td style={{ color: row.evolution.startsWith('+') ? 'green' : 'red' }}>
                                {row.evolution}
                            </td>
                            <td>{row.status}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default Table;
