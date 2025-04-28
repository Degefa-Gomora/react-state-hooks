import React, { useState, useEffect } from "react";

function UseEffectForTitle() {
  // //array destructuring
  const [count, setCount] = useState(0);
  useEffect(() => {
  //   // This will run only once when component mounts
    alert("Component is mounted");
  //   // Cleanup function
    return () => {
      document.title = "React App"; // Reset title when component unmounts
    };
  }, []); // Empty dependency array means this runs only on mount or initial render

  useEffect(() => {
    document.title = `TitleCount: ${count}`;
  }, [count]); // Only runs when count changes

  // // useEffect(() => {
  // //   document.title = `TitleCount: ${count}`;
  // // }); // This will run at every render

  const incrementCount = () => {
    setCount((prevCount) => prevCount + 1);
  };

  return (
    <>
      <div className="container text-center mt-5 border p-4 rounded border-warning border-3 border-box">
        <button className="btn btn-success btn-lg" onClick={incrementCount}>
          Click here
        </button>
        <p className="p-3 text-primary fw-bold">
          Count Displayer: {count}
        </p>
      </div>
    </>
  );
}

export default UseEffectForTitle;


























// import { useState, useEffect } from "react";

// function FlightBooking() {
//   const [departureCity, setDepartureCity] = useState("New York");
//   const [arrivalCity, setArrivalCity] = useState("Los Angeles");
//   const [departureDate, setDepartureDate] = useState("2025-05-01");
//   const [numberOfPassengers, setNumberOfPassengers] = useState(1);

//   useEffect(() => {
//     console.log("Searching for flights...");
//     console.log(`From: ${departureCity}`);
//     console.log(`To: ${arrivalCity}`);
//     console.log(`Date: ${departureDate}`);
//     console.log(`Passengers: ${numberOfPassengers}`);

//     // In real app, you'd call an API here
//     // fetchFlights(departureCity, arrivalCity, departureDate, numberOfPassengers);
//   }, [departureCity, arrivalCity, departureDate, numberOfPassengers]); // ✅ 4 dependencies

//   return (
//     <div>
//       <h1>Book Your Flight</h1>

//       <input
//         type="text"
//         value={departureCity}
//         onChange={(e) => setDepartureCity(e.target.value)}
//         placeholder="Departure City"
//       />

//       <input
//         type="text"
//         value={arrivalCity}
//         onChange={(e) => setArrivalCity(e.target.value)}
//         placeholder="Arrival City"
//       />

//       <input
//         type="date"
//         value={departureDate}
//         onChange={(e) => setDepartureDate(e.target.value)}
//       />

//       <input
//         type="number"
//         value={numberOfPassengers}
//         min="1"
//         onChange={(e) => setNumberOfPassengers(e.target.value)}
//       />
//     </div>
//   );
// }

// export default FlightBooking;