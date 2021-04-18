import React, { useState, useEffect } from "react";
import Loading from "./Loading";
import Tours from "./Tours";
// ATTENTION!!!!!!!!!!
// I SWITCHED TO PERMANENT DOMAIN
const url = "https://course-api.com/react-tours-project";

function App() {
  // let's set up a state value for "loading", which will be set to "true" by default...
  const [loading, setLoading] = useState(true);
  // let's set up a state value for "tours", which by default will be set to an empty array...
  const [tours, setTours] = useState([]);

// this is for our "not interested" button
// we create a function called "removeTour" with the parameter of "id", for the ID of each item in the "tours" array
  const removeTour = (id) => {
    // let's create a new array with the "filter" method. If the ID of the item (tour) from the "tours" array
    // does not match the ID that we are currently clicking on, then put that item in the new array (newTours)..
    const newTours = tours.filter((tour) => tour.id !== id);
    // now the state value will be the new array (newTours)..
    setTours(newTours);
  }


  // now let's fetch the data with a function named "fetchTours"...
  const fetchTours = async () => {
    // this is just in case "setLoading" default value is equal to "false"..
    setLoading(true);

    // this will catch errors, or if there are no errors, will fetch the API...
    try{
      // this will fetch the API...
      const response = await fetch(url);

      // this will fetch the .json file because we will need to parse it...
      const tours = await response.json();

      // this will change what we are currently displaying on the screen...
      setLoading(false);

      // we pass in the "tours" that we just fetched from the API into the state value...
      setTours(tours)

    } catch (error) {
      // even if there is an error, set "loading" to false...
      setLoading(false)
      console.log(error)
    }
  };

  // now let's invoke the "fetchTours" function once the "App" component renders...
  // the empty array assures that the function only runs once...
  useEffect(() =>{
    fetchTours();
  }, []);


  // if "loading" is true, return the "Loading" component...
  if (loading) {
    return (
      <main>
        <Loading />
      </main>
    );
  }

  // if the user has deleted all tours from the screen...
  if(tours.length === 0){
    // return "No Tours Left", with a button that will repopulate the "tours" array on the screen by using the "fetchTours" function...
    return (
      <main>
        <div className="title">
          <h2>no tours left</h2>
          <button className="btn" onClick = {fetchTours}>refresh</button>
        </div>
      </main>
    )
  }
  // otherwise, we will load the "Tours" component...
  return (
    <main>
      {/* our "tours" prop is equal to the "tours" state value... */}
      <Tours tours={tours} removeTour={removeTour}/>
    </main>
  );
}

export default App;
