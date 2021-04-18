import React, { useState } from 'react';

// let's destructure all the properties from the "tour" item
const Tour = ({id, image, info, price, name, removeTour}) => {

  // let's set up a state value for a "read more" toggle, which by default we will set to false...
  const [readMore, setReadMore] = useState(false)

  // we will return an article containing the item's image , name, price and info, along with a delete button..
  return <article className="single-tour">
    <img src={image} alt={name}/>
    <footer>
      <div className="tour-info">
        <h4>{name}</h4>
        <h4 className="tour-price">${price}</h4>
      </div>
       
       {/* if the readMore state value is "true", then display all of the "info" value */}
       {/* otherwise, only display 200 characters from the "info" value (start:0, end:200) */}
      <p>
        {readMore ? info : `${info.substring(0, 200)}...`}

{/* this toggles the readMore state, so if it starts off "false", it will now be "true", if it's "true", then it will now be "false" */}
        <button onClick={() => setReadMore(!readMore)}>

          {/* if the state value of "readMore" is true, dispaly "show less", if it is false, display "show more" */}
          {readMore ? 'show less' : 'read more'}
        </button>
      </p>

      {/* invoke the "removeTour" function with the item ID as the parameter*/}
      <button className="delete-btn" onClick={() =>
      removeTour(id)}>
        not interested
        </button>
    </footer>
  </article>
};

export default Tour;
