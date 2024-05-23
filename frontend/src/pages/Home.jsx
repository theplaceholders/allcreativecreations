import './home.sass';

import { AppointmentRequestForm } from '../components';
import Typography from '@mui/material/Typography';

function Home() {

  const styles = {
    withTitle:{
      fontSize: '3rem', 
      padding: '12rem', 
      display: 'flex', 
      justifyContent: 'center', 
      alignItems: 'center'
    },
    withoutTitle:{
      fontSize: '3rem', 
      padding: '2rem 12rem', 
      display: 'flex', 
      justifyContent: 'center', 
      alignItems: 'center'
    }
  }

  return (
    <div className='HomeBody'>
      <section name="welcome">
        <Typography 
          style={styles.withTitle}
        >Coming soon... All Creative Creations is the ultimate destination for unique and memorable events! Stay tuned for our launch date.</Typography>
      </section>
      <section name="info-1">
      <Typography 
          style={styles.withTitle}
        >Our story is still being written... All Creative Creations is a new and exciting venture in the world of event hosting. Stay tuned for our mission statement and more!</Typography>
      </section>
      <section name="info-2" style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
        <h1>Types of Events and services</h1>
        <Typography 
          style={styles.withoutTitle}
        >Get ready to book your next event... Our schedule is coming together, and we can't wait to share it with you!</Typography>
      </section>
      <section name="info-3" style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
        <h1>Process for reservations</h1>
        <Typography 
          style={styles.withoutTitle}
        >Get ready to book your next event... Our schedule is coming together, and we can't wait to share it with you!</Typography>
      </section>
      <section name="contact">
        <AppointmentRequestForm />
      </section>
    </div>
  );
}

export default Home;