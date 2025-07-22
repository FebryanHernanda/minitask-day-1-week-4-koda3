const getTraffics = document.querySelectorAll(".circle");

const trafficRed = (time) => {
  return new Promise((resolve) => {
    getTraffics[0].classList.add("red");
    setTimeout(() => {
      getTraffics[0].classList.remove("red");
      resolve();
    }, time);
  });
};

const trafficYellow = (time) => {
  return new Promise((resolve) => {
    getTraffics[1].classList.add("yellow");
    setTimeout(() => {
      getTraffics[1].classList.remove("yellow");
      resolve();
    }, time);
  });
};

const trafficGreen = (time) => {
  return new Promise((resolve) => {
    getTraffics[2].classList.add("green");
    setTimeout(() => {
      getTraffics[2].classList.remove("green");
      resolve();
    }, time);
  });
};

const trafficLight = async () => {
  while (true) {
    await trafficRed(3000);
    await trafficYellow(2000);
    await trafficGreen(3000);
  }
};

trafficLight();
