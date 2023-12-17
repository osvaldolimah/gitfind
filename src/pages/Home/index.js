import Header  from "../../components/Header";
import background from "../../assets/background.png"
import ItemList from "../../components/ItemList";
import "./style.css"

function App() {
  return (
    <div className="App">
      <Header />
      <div className="conteudo">
        <img src={background} className="background" alt="background app"/>
          <div className="info">
            <div>
              <input name="usuario" placeholder="@username" />
              <button>Buscar</button>
            </div>
            <div className="perfil">
              <img src="https://avatars.githubusercontent.com/u/103774096?v=4" className="profile" alt="imagem de perfil"/>
              <div className="dados">
                <h3>Osvaldo Holanda</h3>
                <span>@osvaldo_holanda</span>
                <p>Descrição</p>
              </div>
            </div>
            <hr />
            <div>
              <h4 className="repositorio">Repositórios</h4>
              <ItemList title="Teste1" description="teste de descrição" />
              <ItemList title="Teste1" description="teste de descrição" />
              <ItemList title="Teste1" description="teste de descrição" />
            </div>
          </div>
      </div>
    </div>
  );
}

export default App;
