import './App.css';
import Page1 from './pages/page1'
import Page2 from './pages/page2'
import Page3 from './pages/page3'
import Page4 from './pages/page4'
import PesquisaProvider from './context/pesquisaPag1'

function App() {
  return (
    <div className="App">
      <PesquisaProvider>
        <Page1/>
        <Page2/>
        <Page3/>
        <Page4/>
      </PesquisaProvider>
    </div>
  );
}

export default App;
