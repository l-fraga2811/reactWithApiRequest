import { Header } from "../../components/Header";
import background from "../../assets/home-background.png";
import "./styles.css";

function App() {
  return (
    <div className="App">
      <Header />
      <div className="conteudo">
        <img src={background} className="homeBackground" alt="home-Background" />
        <div className="info">
          <div>
            <input name="usuario" placeholder="@username" />
            <button>Buscar</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
