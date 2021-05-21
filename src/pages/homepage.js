import React from 'react';
import '../styles/homepage.css';

function Homepage() {
  return (
    <div className="home-page">
      <header><h1 className="page-title">Giorgia Leonia</h1></header>
      <p className="subtitulo">Meu lançamento mais recente</p>
      <div className="soundcloud-div">
        <iframe title="Giorgia Leonia cover @ SoundCloud" width="100%" height="166" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1052617705&color=%23d7a5ed&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"></iframe><div ><a href="https://soundcloud.com/giorgialeonia" title="Giorgia Leonia" target="_blank" rel="noreferrer">Giorgia Leonia</a> · <a href="https://soundcloud.com/giorgialeonia/hold-on-were-going-home-slow-version-giorgia-leonia" title="Hold On We&#x27;re Going Home (slow version) - Giorgia Leonia" target="_blank" rel="noreferrer">Hold On We&#x27;re Going Home (slow version) - Giorgia Leonia</a></div>
      </div>
    </div>
  );
}

export default Homepage;
