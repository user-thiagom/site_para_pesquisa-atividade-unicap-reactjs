import './App.css';
import Page1 from './pages/page1'
import Page2 from './pages/page2'
import Page3 from './pages/page3'
import PesquisaPag1Provider from './context/pesquisaPag1'
import PesquisaPag2Provider from './context/pesquisaPag2'
import PesquisaPag3Provider from './context/pesquisaPag3'

function App() {
  return (
    <div className="App">
      <PesquisaPag1Provider>
        <Page1/>
      </PesquisaPag1Provider>
      <PesquisaPag2Provider>
        <Page2/>
      </PesquisaPag2Provider>
      <PesquisaPag3Provider>
        <Page3/>
      </PesquisaPag3Provider>
      
    </div>
  );
}

export default App;
