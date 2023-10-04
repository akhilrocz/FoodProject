import React from "react";
import { Link } from "react-router-dom";

const CheckoutSteps = ({ delivery, confirmOrder, payment }) => {
  // This component renders a progress bar for the checkout process, with steps for delivery, confirm order, and payment.
  // The steps are rendered as links, and the active step is highlighted.
  return (
    <div className="checkout-progress d-flex justify-content-center mt-5">
      {delivery ? (
        // If the delivery step is complete, render a link to the shipping page.
        <Link to="shipping" className="float-right">
          <div className="triangle2-active"></div>
          <div className="step active-step">Address</div>
          <div className="triangle2-active"></div>
        </Link>
      ) : (
        // If the delivery step is not complete, render a disabled link.
        <Link to="#!" disabled>
          <div className="triangle2-incomplete"></div>
          <div className="step incomplete">Address</div>
          <div className="triangle2-incomplete"></div>
        </Link>
      )}
      {confirmOrder ? (
        // If the confirm order step is complete, render a link to the confirm order page.
        <Link to="/order/confirm" className="float-right">
          <div className="triangle2-active"></div>
          <div className="step active-step">Confirm Order</div>
          <div className="triangle2-active"></div>
        </Link>
      ) : (
        // If the confirm order step is not complete, render a disabled link.
        <Link to="#!" disabled>
          <div className="triangle2-incomplete"></div>
          <div className="step incomplete">Confirm Order</div>
          <div className="triangle2-incomplete"></div>
        </Link>
      )}

      {/* PAYMENT */}

      {payment ? (
        // If the confirm order step is complete, render a link to the confirm order page.
        <Link to="/payment" className="float-right">
          <div className="triangle2-active"></div>
          <div className="step active-step">Payment</div>
          <div className="triangle2-active"></div>
        </Link>
      ) : (
        // If the confirm order step is not complete, render a disabled link.
        <Link to="#!" disabled>
          <div className="triangle2-incomplete"></div>
          <div className="step incomplete">Payment</div>
          <div className="triangle2-incomplete"></div>
        </Link>
      )}
    </div>
  );
};

export default CheckoutSteps;
