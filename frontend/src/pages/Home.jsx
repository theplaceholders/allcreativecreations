import { useState } from 'react';
import Calendar from 'react-calendar'
import 'react-calendar/dist/Calendar.css';
import '../styles/pages_styles/home.sass';

function Home() {
  const [value, onChange] = useState(new Date());
  return (
    <div className='HomeBody'>
      <h1>All Creative Creations</h1>
      <h1>All Creative Creations</h1>
      <h1>All Creative Creations</h1>
      <h1>All Creative Creations</h1>
      <h1>All Creative Creations</h1>
      <h1>All Creative Creations</h1>
      <h1>All Creative Creations</h1>
      <h1>All Creative Creations</h1>
      <h1>All Creative Creations</h1>
      <h1>All Creative Creations</h1>
      <h1>All Creative Creations</h1>
      <h1>All Creative Creations</h1>
      <h1>All Creative Creations</h1>
      <h1>All Creative Creations</h1>
      <h1>All Creative Creations</h1>
      <h1>All Creative Creations</h1>
      <h1>All Creative Creations</h1>
      <h1>All Creative Creations</h1>
      <h1>All Creative Creations</h1>
      <Calendar onChange={onChange} value={value} />
    </div>
  );
}

export default Home;