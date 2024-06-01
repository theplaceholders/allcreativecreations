import { AppointmentRequestForm } from '../components';

import './contactUs.sass'

function ContactUs() {
  return (
    <div id="contactUsPage">
      <div name="spacer" />
      <section name="contactForm">
        <section name="quotes&messages">
          <h2>Get In Touch</h2>
          <p>"Celebrate what you want to see more of." - Tom Peters</p>
          <p>Please complete our inquiry form below</p>
          <p>we will get back to you in 24-72 hours</p>
        </section>
        <AppointmentRequestForm />
      </section>
    </div>
  );
}

export default ContactUs;