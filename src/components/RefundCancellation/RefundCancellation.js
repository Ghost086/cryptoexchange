import React from 'react';
import { I18n } from 'react-i18next';

const RefundCancellation = props => {
  return (
    <I18n ns="translations">
      {t => (
        <div className="container">
          <div className="row">
            <div className="col-xs-12">
              <h2>{t('refund.title')}</h2>

              <p>We will revert any trade by the request of the customer according to the current market rate, provided the opposite trade direction is supported at the time the refund is requested.</p>
              <p>Otherwise, no refunds are possible and it is the sole responsibility of the user to make sure that he controls the wallet the address of which he uses to receive funds from Unicrypto.</p>
              <p>On any case of a refund after more than a day after the purchase had been made, an administrative fee of 5% will be retained by Unicrypto.</p>
              <p>
                {t('refund.4')} <a href="mailto:support@unicrypto.io">support@unicrypto.io</a>
              </p>
            </div>
          </div>
        </div>
      )}
    </I18n>
  );
};

export default RefundCancellation;
