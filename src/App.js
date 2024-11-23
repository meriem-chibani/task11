import React from 'react';
import './App.css';
import Head from './components/Head';
import Services from './components/Services';
import Consulting from './components/Consulting';
import Stats from './components/Stats';

const App = () => {
  return (
    <div className="App">
      <Head />
    <div className="serv">
      <Services
       icon = "https://img.freepik.com/premium-vector/circular-marketing-icon_1453-93.jpg"
       title = "Marketing & SEO "
       description = "Expand your online reach with our marketing and SEO services."
       link = " See more" />

      <Services
       icon = "https://cdn-icons-png.flaticon.com/512/295/295134.png"
       title = "Startup Agency "
       description = "Get the right start with expert advice and services for startups."
       link = " See more" />

      <Services
       icon = "https://cdn-icons-png.flaticon.com/512/7713/7713554.png"
       title = "Finance Solution "
       description = "Helping corporate businesses grow with tailored solutions."
       link = " See more" />

      <Services
       icon = "https://cdn-icons-png.flaticon.com/512/13366/13366308.png"
       title = "Corporate Business "
       description = "Helping corporate businesses grow with tailored solutions."
       link = " See more" />

      <Services
       icon = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQONogOvYCrlyBzgs8gCDdBYIkTGKqmA9EFOg&s"
       title = "Travel Agency"
       description = "Helping corporate businesses grow with tailored solutions."
       link = " See more" />

      <Services
       icon = "https://www.freeiconspng.com/thumbs/restaurant-icon-png/restaurant-icon-png-7.png"
       title = "Food and Restaurant"
       description = "Helping corporate businesses grow with tailored solutions."
       link = " See more" />

      </div>

      <Consulting />
      <Stats />
    </div>
  );
};

export default App;
