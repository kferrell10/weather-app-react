import './App.css';
import Weather from "./Weather";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Hello World!</h1>
        <Weather city="San Diego" />
        <p className="Mousetype"><a href="https://confident-montalcini-2e4e53.netlify.app/" target="_blank" rel="noreferrer">Open-source code</a> by <a href="https://kimferrelldesign.com/" target="_blank" rel="noreferrer">Kim Ferrell</a></p>
      </header>
    </div>
  );
}

export default App;
