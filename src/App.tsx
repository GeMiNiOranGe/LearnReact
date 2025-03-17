import React from 'react';

import YoutubeCard from './components/YoutubeCard';
import logo from './assets/icons/logo.svg';
import './App.css';

function App(): React.JSX.Element {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>

      <div className="videos">
        <YoutubeCard videoId="Vk5-c_v4gMU" title="Magnetic - ILLIT" />
        <YoutubeCard videoId="G6CSdvvrI-k" title="Ash - LE SSERAFIM" />
        <YoutubeCard videoId="jWQx2f-CErU" title="Whiplash - aespa" />
        <YoutubeCard videoId="UhxW9Njqqu0" title="BLACKPINK - Typa Girl" />
        <YoutubeCard videoId="SX_ViT4Ra7k" title="Lemon - Kenshi Yonezu" />
        <YoutubeCard videoId="8iuLXODzL04" title="Tabun - YOASOBI" />
        <YoutubeCard
          videoId="dawrQnvwMTY"
          title="Fujii Kaze - Shinunoga E-Wa"
        />
        <YoutubeCard videoId="0UAMSoY_k34" title="shimamo -Yasashii Koibito" />
        <YoutubeCard videoId="y8eLBLyVLgU" title="Hedley - Lose Control" />
        <YoutubeCard
          videoId="iuJDhFRDx9M"
          title="Tokyo Drift - Teriyaki Boyz"
        />
        <YoutubeCard
          videoId="OJniq9KuDAQ"
          title="Eye of the Storm - WattWhite"
        />
        <YoutubeCard
          videoId="fzQ6gRAEoy0"
          title="Porter Robinson & Madeon - Shelter"
        />
      </div>
    </div>
  );
}

export default App;
