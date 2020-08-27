const messageDelay = () => Math.floor(Math.random() * 5000);

const getMarsTemperature = () => {
  const maxTemperature = 58;
  return Math.floor(Math.random() * maxTemperature);
};

function sendMarsTemperature() {  
  setTimeout(() => console.log("Mars temperature is: 20 degree Celsius"), messageDelay());
}

sendMarsTemperature();