import * as React from "react";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <header className="title-wrapper">
        <h1>Er du den nye</h1>
      </header>
      <img className="pablo" src="/pablo.png" alt="Padlo Escobar" />
      <section className="info">
        <h2>Uoffisielt NM i padeltennis for undergrunns-spillere</h2>
        <div className="rolex-wrapper">
          <img className="rolex" src="/rolex.png" alt="Rolex" />
        </div>
        <div className="time">
          <p>Lørdag 24.10.20</p>
          <p>15-18</p>
        </div>
        <div className="place">
          <p>All Star Padel</p>
          <p>Økern</p>
        </div>
        <div className="star-wrapper">
          <img className="star" src="/star.png" alt="Star" />
        </div>
      </section>
      <section>
        <h2>Pauseunderholdning</h2>
        <h1>PADELE</h1>
        <img className="padele" src="/padele.png" alt="Padele" />
      </section>
      <section className="mer-info">
        <h2>Mer informasjon</h2>
        <p>Rackets kan leies for 50 kr.</p>
        <p>
          <br />
        </p>
        <p>Ta med innesko, treningstøy, drikke og snacks til deg selv.</p>
      </section>
      <section>
        <h2>How to play</h2>
        <iframe
          title="Padel Rules"
          className="video"
          src="https://www.youtube.com/embed/RkdQ61VKKtI"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </section>
      <section className="fest">
        <h2>... en siste ting</h2>
        <h1>Vær klar for fæst!</h1>
      </section>
    </div>
  );
}
