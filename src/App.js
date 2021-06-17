import "./App.css";

import CovidNav from "./components/Header/CovidNav";
import MainNav from "./components/Header/MainNav";
import Banner from "./components/Banner";
import Main from "./components/Main";

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
