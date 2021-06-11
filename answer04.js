function printTemperatures(temperatures) {
  if (!temperatures || temperatures.length === 0) {
    console.log("0");
    return;
  }

  let closestNumber = 0;
  let farNumber = 0;

  temperatures.forEach(function (temperature) {
    console.log(temperature);
    console.log(Math.abs(temperature));
    if (closestNumber === 0) {
      closestNumber = temperature;
    }

    if (temperature > 0) {
      if (temperature <= Math.abs(closestNumber)) {
        closestNumber = temperature;
      }

      if (temperature >= Math.abs(farNumber)) {
        farNumber = temperature;
      }
    }

    if (temperature < 0) {
      if (-temperature < Math.abs(closestNumber)) {
        closestNumber = temperature;
      }

      if (Math.abs(temperature) > Math.abs(farNumber)) {
        farNumber = temperature;
      }
    }
  });

  console.log(`nearest temperature is: ${closestNumber}`);
  console.log(`farthest temperature is: ${farNumber}`);
}

printTemperatures([42, 5, 12, 21, -5, 24, -43]);
