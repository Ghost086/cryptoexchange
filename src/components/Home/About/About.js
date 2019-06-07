import React from 'react';
import styles from './About.scss';
import { I18n, Trans } from 'react-i18next';

const About = () => (
  <I18n ns="translations">
    {t => (
      <div id="about" className={styles.about}>
        <div className="container">
          <div className="row">
            <div className="col-xs-12">
              <h2 className="title">{t('about.title')}</h2>
            </div>

            <div className="col-xs-12 col-sm-6">
              <p>Unicrypto is a fast, reliable and fully transparent cryptocurrency exchange built by crypto enthusiasts, for crypto enthusiasts.</p>
              <p>We are a group of cryptocurrency professionals.</p>
              <p>{t('about.3')}</p>
              <p>{t('about.4')}:</p>
            </div>

            <div className="col-xs-12 col-sm-6">
              <p>{t('about.5')}</p>

              <p>Unicrypto is built on several core values that guide our team in our day to day operations. Among them are complete transparency, a strive to help make cryptocurrency as accessible as possible.</p>
            </div>
          </div>
        </div>
      </div>
    )}
  </I18n>
);

export default About;
