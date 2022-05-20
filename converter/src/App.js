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

// To do:
// 1. make API connection
// 2. pull data from API
// 3. save inputs for global access
// 4. button does the math
// 5. display results