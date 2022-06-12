import logo from './logo.svg';
import './App.css';
import FirstComponent from './components/FirstComponent';
import TemplateExpressions from './components/TemplateExpressions';
import Events from './components/Events';



function App() {
  return (
    <div className="App">
      <h1>Fundamentos</h1>
     <FirstComponent />
     <TemplateExpressions />
     <Events />
     <div>
       <img src="/img1.jpg" alt="Espaço" />
     </div>
    </div>
  );
}

export default App;
