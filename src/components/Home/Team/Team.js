import React from 'react';
import TeamMember from './TeamMember/TeamMember';
import { I18n } from 'react-i18next';
import styles from './Team.scss';

const Team = () => (
  <I18n ns="translations">
    {t => (
      <div className={styles.container}>
        <div className="container">
          <div className={`${styles.row} row`}>
            <div className="col-xs-12">
              <h2 className="title">{t('about.teamtitle')}</h2>
            </div>

            <TeamMember
              id="#"
              name="Yash Mishra"
              country="IND"
              fullCountryName={t('about.india')}
              description="CEO / Founder of Unicrypto"
              social={{
                linkedin: 'https://www.linkedin.com/in/oleg-belousov-%E5%A5%A5%E5%88%97%E6%A0%BC-b4112145/',
                twitter: 'https://twitter.com/iooleg',
                medium: 'https://medium.com/@IoOleg',
                github: 'https://github.com/BeOleg',
              }}
            />
          </div>
        </div>
      </div>
    )}
  </I18n>
);

export default Team;
