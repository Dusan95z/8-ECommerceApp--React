import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { useCartContext } from '../context/cart_context';
import { PageHero, StripeCheckout } from '../components';

const CheckoutPage = () => {
  return (
    <main>
      <PageHero title='checkout' />
      <Wrapper className='page'>
        <h1>checkout here</h1>
      </Wrapper>
    </main>
  );
};
const Wrapper = styled.div``;

export default CheckoutPage;
