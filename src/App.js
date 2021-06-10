import "./App.css";

import CovidNav from "./components/Header/CovidNav/CovidNav";
import MainNav from "./components/Header/MainNav/MainNav";
import Banner from "./components/Banner/Banner";
import Main from "./components/Main/Main";

function App() {
  
  return (
    <div className="App">
      <CovidNav />
      <MainNav />
      <Banner />
      <Main />
    </div>
  );
}

export default App;
