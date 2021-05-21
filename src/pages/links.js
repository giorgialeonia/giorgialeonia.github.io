import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '../styles/links.css';

function Links() {
  return (
    <section className="links-section">
      Me acompanhe!

      <div>
        <a class="icon" target="_blank" rel="noreferrer" href="https://www.instagram.com/giorgialeonia/">
          <FontAwesomeIcon icon={['fab', 'instagram']} size="4x" />
        </a>

        <a class="icon" target="_blank" rel="noreferrer" href="https://www.twitter.com/giorgiacodes">
          <FontAwesomeIcon icon={['fab', 'twitter']} size="4x" />
        </a>

        <a class="icon" target="_blank" rel="noreferrer" href="https://www.youtube.com/channel/UCrD8Klpwknc5T0ul7p4u0JQ">
          <FontAwesomeIcon icon={['fab', 'youtube']} size="4x" />
        </a>

        <a class="icon" target="_blank" rel="noreferrer" href="https://soundcloud.com/giorgialeonia">
          <FontAwesomeIcon icon={['fab', 'soundcloud']} size="4x" />
        </a>

        <a class="icon" target="_blank" rel="noreferrer" href="https://www.tiktok.com/@giorgialeonia">
          <FontAwesomeIcon icon={['fab', 'tiktok']} size="4x" />
        </a>
      </div>
    </section>
  );
}

export default Links;
