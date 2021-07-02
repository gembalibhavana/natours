/* eslint-disable */

import axios from 'axios';
import { showAlert } from './alerts';
export const bookTour = async (tourId) => {
  //get checkout session
  try {
    const stripe = Stripe(
      'pk_test_51J8fh0SCLqUhuhI2aaHu0R0caTZg3W0DaINQv49SpaxlkLvIgCbPKDlC31EFHWeDbGakubrgDwjXSbri38Ukv0g500doPLtgoA'
    );
    const session = await axios(`/api/v1/bookings/checkout-session/${tourId}`);
    await stripe.redirectToCheckout({ sessionId: session.data.session.id });
  } catch (err) {
    showAlert('error', err);
  }
  //create stripe
};
