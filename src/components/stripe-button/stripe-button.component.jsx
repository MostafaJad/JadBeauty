import React from 'react';
import StripeCheckout from "react-stripe-checkout";

const StripeCheckoutButton = ({price})=> {
    const priceForStripe = price * 100;
    const publishableKey = 'pk_test_QPjXkJGjS2V8SfaMhM66MWin00hErjIIMS';

    const onToken = token=>{
        console.log(token);
        alert('Payment Successful')
    }
    return (
        <StripeCheckout
            label='Pay Now'
            name={'JadBeauty.'}
            billingAddress
            shippingAddress
            image='/images/logo.svg'
            description={`Your total is $${price}`}
            amount={priceForStripe}
            panelLabel='Pay Now'
            token={onToken}
            stripeKey={publishableKey}
        />
    );

};
export default StripeCheckoutButton;
