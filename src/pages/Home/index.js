import { Header } from "../../components/Header";
import background from "../../assets/home-background.png";
import "./styles.css";
import ItemList from "../../components/ItemList";

function App() {
  return (
    <div className="App">
      <Header />
      <div className="conteudo">
        <img
          src={background}
          className="homeBackground"
          alt="home-Background"
        />
        <div className="info">
          <div>
            <input name="usuario" placeholder="@username" />
            <button>Buscar</button>
          </div>
          <div className="perfil">
            <img
              src="https://avatars.githubusercontent.com/u/161073722?v=4"
              className="profile"
              alt="profilePicture"
            />
            <div>
              <h3>Lucas Fraga</h3>
              <span>
                Instagram:{" "}
                <a href="https://www.instagram.com/_lfraga/">@_lfraga</a>
              </span>
              <p>aaaaaaaaaaaaaaaaa</p>
            </div>
          </div>
          <hr />
          <div>
            <h4 className="repositorio">Repositórios</h4>
            <ItemList title = "Teste 1" description="teste de descrição"/>
            <ItemList title = "Teste 1" description="teste de descrição"/>
            <ItemList title = "Teste 1" description="teste de descrição"/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
