import './App.css';

function App() {
  const students = ["Ali", "Awa", "Moussa", "Fatou"];

  return (
    <div className="App">
      <h1>Projet Front - DevOps</h1>
      <p>Liste des étudiants :</p>

      <ul>
        {students.map((student, index) => (
          <li key={index}>{student}</li>
        ))}
      </ul>

      <button>Ajouter étudiant</button>
    </div>
  );
}

export default App;
