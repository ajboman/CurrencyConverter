import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

// Components
import Title from './components/Title/Title';
import MainPanel from './components/MainPanel/MainPanel';

function App() {
  return (
    <div className="App">
      <Title title='Currency Converter'/>
      <MainPanel />
    </div>
  );
}

export default App;
