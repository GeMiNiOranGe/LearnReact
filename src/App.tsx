import React from 'react';

import YoutubeCard from './components/YoutubeCard';
import WelcomePage from './pages/WelcomePage';
import './App.css';

function App(): React.JSX.Element {
  return (
    <>
      <WelcomePage />

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
    </>
  );
}

export default App;
