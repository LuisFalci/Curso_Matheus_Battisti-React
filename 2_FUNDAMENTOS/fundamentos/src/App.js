import logo from './logo.svg';
import './App.css';
import FirstComponent from './components/FirstComponent';
import TemplateExpressions from './components/TemplateExpressions';
import Events from './components/Events';
import City from "./assets/city.jpg"


function App() {
  return (
    <div className="App">
      <h1>Fundamentos</h1>
     <FirstComponent />
     <TemplateExpressions />
     <Events />
     <div>
       {/* Imagem em public */}
       <img src="/img1.jpg" alt="Espaço" />
     </div>
     <div>
       {/* Imagem em asset */}
       <img src={City} alt="City" />
     </div>
    </div>
  );
}

export default App;
