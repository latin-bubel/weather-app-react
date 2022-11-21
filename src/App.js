import "./App.css";
import Weather from "./Weather";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Weather defaultCity="New York" />
      </header>
      <footer>
        {""}
        <a
          href="https://github.com/latin-bubel/weather-app-react"
          target="_blank"
          rel="noopener noreferrer"
        >
          Open-source on Github
        </a>
        , by Estera Pietkiewicz
      </footer>
    </div>
  );
}

export default App;
