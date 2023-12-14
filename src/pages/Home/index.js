import Header  from "../../components/Header";
import background from "../../assets/background.png"
import "./style.css"

function App() {
  return (
    <div className="App">
      <Header />
      <div className="conteudo">
        <img src={background} className="background" alt="background app"/>
        <div className="info">teste</div>
        <div className="user">
          <input name="usuario" placeholder="username" />
          <button>Button</button>
        </div>
      </div>
    </div>
  );
}

export default App;
