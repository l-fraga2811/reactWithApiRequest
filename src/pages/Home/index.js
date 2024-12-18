import { Header } from "../../components/Header";
import "./styles.css";
import ItemList from "../../components/ItemList";
import { useState } from "react";
import background from "../../assets/home-background.png";

function App() {
  const [user, setUser] = useState("");
  const [currentUser, setCurrentUser] = useState(null);
  const [repos, setRepos] = useState(null);

  const handleGetData = async () => {
    const userData = await fetch(`https://api.github.com/users/${user}`);
    const newUser = await userData.json();

    if (newUser.name) {
      const { avatar_url, name, bio, login } = newUser;
      setCurrentUser({ avatar_url, name, bio });
    }

    const repoData = await fetch(`https://api.github.com/users/${user}/repos`);
    const newRepos = await repoData.json();
    if (newRepos.length > 0) {
      setRepos(newRepos);
    }
  };

  /*-------------------------------------------------------------------------------------------------------- */

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
            <input
              name="usuario"
              value={user}
              onChange={(event) => setUser(event.target.value)}
              placeholder="@username"
            />
            <button onClick={handleGetData}>Buscar</button>
          </div>
          {currentUser?.name ? (
            <>
              <div className="perfil">
                <img
                  src= {currentUser.avatar_url}
                  className="profile"
                  alt="profilePicture"
                />
                <div>
                  <h3>{currentUser.name}</h3>
                  <span>{currentUser.login}</span>
                  <p> {currentUser.bio}</p>
                </div>
              </div>
              <hr />
            </>
          ) : null}
          {repos?.length ? (
            
            <div>
              <h4 className="repositorio">Repositórios</h4>

              {repos.map((repo) => (
              
              <ItemList title={repo.name} description={repo.description}/>
              ))}
              
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
}

export default App;
