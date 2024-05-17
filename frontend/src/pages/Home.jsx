import './home.sass';

import { AppointmentRequestForm } from '../components';

function Home() {
  return (
    <div className='HomeBody'>
      <section name="welcome">
        <h1>All Creative Creations</h1>
      </section>
      <section name="info-1">
        <h1>All Creative Creations</h1>
      </section>
      <section name="info-2">
        <h1>All Creative Creations</h1>
      </section>
      <section name="info-3">
        <h1>All Creative Creations</h1>
      </section>
      <section name="contact">
        <AppointmentRequestForm />
      </section>
      <section>
        <h1>test</h1>
      </section>
    </div>
  );
}

export default Home;