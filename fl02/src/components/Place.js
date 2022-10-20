/**
 * proj_path: ch06/ex/proj/famous-location-02
 * ./src/components/Place.js
 */

// import modules
// code here
import Location from "./Location";
import Majors from "./Majors";
const Place = ({ name, locations, majors }) => (
  <section id={name.toLowerCase().replace(/ /g, "-")}>
    <h2>{name}</h2>
    <Location locations={locations} />
    <Majors majors={majors} />
  </section>
);

// export module
// code here
export default Place;