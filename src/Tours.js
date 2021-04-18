import React from 'react';
import Tour from './Tour';

// let's destructure our "tours" prop from App.js
const Tours = ({tours, removeTour}) => {
  return <section>
    <div className="title">
      <h2>our tours</h2>
      <div className="underline"></div>
    </div>
    {/* let's iterate over the "tours"...*/}
    <div> 
      {tours.map((tour) =>{

        // for every item(tour) in the "tours" array, we'll return a "Tour" component
        // the spread operator allows us to access all the properties of each item (tour)
        // we are also passing the "removeTour" function as a prop into the "Tour" component
        // so, the "removeTour" prop is equal to the "removeTour" function that is coming from App.js...
       return <Tour key={tour.id} {...tour} removeTour = {removeTour}></Tour>
      }
      )}
    </div>
  </section>
};

export default Tours;
