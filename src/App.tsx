import axios from "axios";
import { useState } from "react";
import patternDividerDesktop from './images/pattern-divider-desktop.svg';
import patternDividerMobile from './images/pattern-divider-mobile.svg';
import iconDice from './images/icon-dice.svg';

interface Advice {
  advice: string;
  id: number;
}

export default function App() {
  const URL_ADVICE = "https://api.adviceslip.com/advice";
  const [advice, setAdvice] = useState<Advice | null>(null);
  const [loading, setLoading] = useState(false);

  const handleClick = async () => {
    setLoading(true);
    try {
      const { data } = await axios.get(URL_ADVICE, {
        validateStatus: (status) => status === 200,
      });

      setAdvice(data.slip);
    } catch (error) {
      console.error("Erro ao buscar um conselho:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen w-full bg-gray-950 px-4">
      <div className="relative bg-gray-900 p-8 rounded-xl shadow-lg max-w-md w-full flex flex-col items-center text-center space-y-6">
        <h1 className="text-sm text-teal-400 font-bold tracking-widest uppercase">
          Advice #<span>{advice?.id || 0}</span>
        </h1>
        <p className="text-gray-300 text-lg px-4">
          {advice?.advice || "Clique nos dados para obter alguns conselhos!"}
        </p>
        <img
          src={patternDividerMobile}
          alt="Divisor"
          className="w-full md:hidden"
        />
        <img
          src={patternDividerDesktop}
          alt="Divisor"
          className="w-full hidden md:block"
        />

        <button
          disabled={loading}
          className="absolute -bottom-6 bg-teal-400 hover:bg-teal-300 transition-colors p-4 rounded-full shadow-xl cursor-pointer disabled:opacity-50"
          onClick={handleClick}
        >
          <img
            src={iconDice}
            alt="quadrado"
            className="w-6 h-6"
          />
        </button>
      </div>
    </div>
  );
}
