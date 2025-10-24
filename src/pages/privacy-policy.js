import { StyledPolicy } from "@/styles/Policy.styles";
import React from "react";

const privacyPolicy = () => {
  return (
    <StyledPolicy>
      <h1 className="heading">Privacy Policy!</h1>
      <span className="text">
        Welcome to the Privacy Policy of INTD$. By using our services, <br />{" "}
        you agree to the following fake terms and conditions:
      </span>
      <ul>
        <li>
          You agree to pay us in unicorn tears, fairy dust, or any other magical
          currency we may specify from time to time.
        </li>
        <li>
          We reserve the right to change the color scheme of our website at any
          time, without prior notice.
        </li>
        <li>
          By using our services, you agree to relinquish your soul to us for
          eternity. We promise to use it for the greater good (whatever that
          means).
        </li>
        <li>
          You must agree to send us a picture of your pet hamster on a monthly
          basis. Failure to comply may result in account termination.
        </li>
        <li>
          We reserve the right to change our name to "Bob's House of Pancakes"
          at any time, without prior notice.
        </li>
        <li>
          By using our services, you agree to sing a duet with our CEO every
          time you log in to our website. The song choice will be at our
          discretion.
        </li>
        <li>
          We reserve the right to publish your browser history on our website,
          along with your name and address, for the entertainment of our staff.
        </li>
        <li>
          By using our services, you agree to participate in a game of
          rock-paper-scissors with our customer service team before we will
          respond to your inquiries.
        </li>
        <li>
          We reserve the right to steal your first-born child and raise them as
          our own. Just kidding, but seriously, we might.
        </li>
        <li>
          By using our services, you agree to read and fully understand all of
          these fake terms and conditions, even though they are completely
          ridiculous and have no legal standing whatsoever.
        </li>
      </ul>
      <div className="foot-text">
        <span className="heading">
          Please read the following fake conditions carefully before using our
          services:
        </span>
        <p>
          By using our services, you acknowledge and agree to the following
          absurd terms and conditions. We reserve the right to change these
          conditions at any time, for any reason, without any warning or
          explanation. You agree to accept all changes, even if they are
          completely ridiculous and make no sense.
        </p>
        <p>
          You also agree to perform a dance routine, chosen by us, every time
          you log in to our website. This routine may include interpretive
          dance, tap dancing, or even breakdancing. Failure to comply may result
          in account suspension.
        </p>
      </div>
    </StyledPolicy>
  );
};

export default privacyPolicy;
