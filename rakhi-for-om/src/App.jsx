import { useState } from "react";
import "./App.css";

function App() {
  const [screen, setScreen] = useState(1);

  return (
    <div className="welcome">
      <div className="sparkle sparkle1">✦</div>
      <div className="sparkle sparkle2">✧</div>
      <div className="sparkle sparkle3">✦</div>

      <div className="welcome-card">

        {/* SCREEN 1 */}
        {screen === 1 && (
          <>
            <div className="rakhi">🎀</div>

            <p className="small-text">Hey Om... 👀</p>

            <h1>
              I made something
              <br />
              for you 💌
            </h1>

            <p className="subtitle">
              Don't worry, it's not as cheesy as you think 😂
            </p>

            <button onClick={() => setScreen(2)}>
              Open it 💌
            </button>
          </>
        )}

        {/* SCREEN 2 */}
        {screen === 2 && (
          <>
            <div className="rakhi">🎉</div>

            <p className="small-text">Okay... here we go 👀</p>

            <h1>
              HAPPY
              <br />
              RAKSHA BANDHAN
            </h1>

            <p className="subtitle">
              For you, Om ❤️
            </p>

            <button onClick={() => setScreen(3)}>
              There's more... 💌
            </button>
          </>
        )}

        {/* SCREEN 3 - LETTER */}
        {screen === 3 && (
          <div className="letter">
            <div className="letter-rakhi">💌</div>

            <h2>For Om ❤️</h2>

            <div className="letter-text">
              <p>
                Happy Rakshabandhan Om! 😂🫶🏻
              </p>

              <p>
                Rakhi bandhun ghe, gifts dyayla ready raha 😌💸😂
              </p>

              <p>
                Aapli masti, khech khech ani ashich gossip karat rahu 😂🤌🏻
              </p>

              <p>
                Happy Rakhi! 🧿❤️
              </p>
            </div>

            <div className="photos">
              <img
                src="/rakhi-for-om/photos/photo1.jpeg"
                alt="Memory 1"
              />

              <img
                src="/rakhi-for-om/photos/photo2.jpeg"
                alt="Memory 2"
              />

              <img
                src="/rakhi-for-om/photos/photo3.jpeg"
                alt="Memory 3"
              />

              <img
                src="/rakhi-for-om/photos/photo4.jpeg"
                alt="Memory 4"
              />
            </div>

            <div className="final-heart">
              ❤️
            </div>
          </div>
        )}

      </div>
    </div>
  );
}

export default App;