import './App.css';
import { HomePage } from './components/HomePage';
import { Menu } from './components/Menu';
import TycoinsWebBG from "./images/tycoins-web_bg.png"

function App() {
  return (
    <div className="app">
      <img src={TycoinsWebBG} className="fixed top-0 left-0 right-0 w-full z-0 h-full min-w-[1440px]" alt="" />
      <Menu />
      <HomePage />
    </div>
  );
}

export default App;
