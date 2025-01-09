import Title from '../../../components/Title';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import CheckOutFrom from './CheckOutFrom';
const stripePromise = loadStripe(import.meta.env.VITE_Payment_Gateway_key);
const Payment = () => {
  return (
    <div>
      <Title heading="Payment" subHeading="Please pay to eat"></Title>
      <div>
        <Elements stripe={stripePromise}>
          <CheckOutFrom></CheckOutFrom>
        </Elements>
      </div>
    </div>
  );
};

export default Payment;
