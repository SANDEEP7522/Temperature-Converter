import { useState } from "react";
import "./App.css";


function App() {
  const [temp, setTemp] = useState("");
  const [unit, setUnit] = useState("F");

  const handleInputChange = (event) => {
    setTemp(event.target.value);
  };

  const handleUnitChange = (event) => {
    setUnit(event.target.value);
  };

  const convertedTemperature = () => {
    const tem = parseFloat(temp);

    if (isNaN(tem)) return "Invalid Input";

    if (unit === "F") {
      return `${(((tem - 32) * 5) / 9).toFixed(2)} °C`;
    } else {
      return `${((tem * 9) / 5 + 32).toFixed(2)} °F`;
    }
  };

 const getTemperatureMoreThenNormal = () => {
  const temColor = parseFloat(temp);

  if (isNaN(temColor)) {
    return 'text-gray-800';
  }

  if(unit === 'F'){
    return temColor > 100 ? 'text-red-800' : 'text-gray-800';
  
  } else{
    return temColor > 37 ? 'text-red-800' : 'text-gray-800';
  }

 };


  return (
    <div
      className="flex flex-col items-center justify-center min-h-screen  
    font-sans bg-yellow-500 rounded-md bg-clip-padding backdrop-filter 
     backdrop-blur-sm bg-opacity-30 border border-gray-100"
    >
      <div className="flex flex-col items-center justify-center rounded-xl bg-yellow-400" >
      <h2 className=" text-2xl font-bold mb-5 ml-5">Temperature Converter</h2>
      <div className="flex flex-col items-center justify-center gap-2 mb-10">
        <input
          type="text"
          value={temp}
          onChange={handleInputChange}
          placeholder="Enter temperature"
          className="p-2 border border-gray-300 shadow-lg rounded-md "
        />
        <select
          value={unit}
          onChange={handleUnitChange}
          className="p-2 border border-gray-300 rounded-lg "
        >
          <option value="F">Fahrenheit</option>
          <option value="C">Celsius</option>
        </select>

        <div className="text-lg font-normal mt-4">
          <div className={`mt-2 text-2xl ml-5 font-extrabold  ${getTemperatureMoreThenNormal()}`}>Converted Temperature:</div>
          <p className={`mt-2 text-2xl ml-5 font-extrabold ${getTemperatureMoreThenNormal()}`}>
            {isNaN(parseFloat(temp)) ? "Invalid Input" : `${convertedTemperature()} `}
          </p>
        </div>
        </div>
      </div>
    </div>
  );
}

export default App;
