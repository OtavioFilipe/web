import "./styles/main.css";

import logoImg from "./assets/Logo.svg";
import { AdBanner } from "./components/AdBanner";
import { Gamebanner } from "./components/GameBanner";

function App() {
  return (
    <div className="max-w-[1344px] mx-auto flex flex-col items-center my-20">
      <img src={logoImg} alt="" />

      <h1 className="text-6xl text-white font-black mt-20">
        Seu{" "}
        <span className="text-transparent bg-nlw-gradient bg-clip-text">
          duo
        </span>{" "}
        está aqui.
      </h1>

      <div className="grid grid-cols-6 gap-6 mt-16">
        <Gamebanner
          bannerUrl="./game-1.png"
          title="League of Legends"
          adsCount={4}
        />
      </div>
      <AdBanner />
    </div>
  );
}
export default App;
