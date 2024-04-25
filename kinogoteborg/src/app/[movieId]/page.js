//import rendersaloon to render page.
//build modal to use booking.js 
//add state for booking to use, might be better placed in booking.js
renderSaloon(2)
  .then(cinema => console.log(cinema))
  .catch(error => console.error(error));
