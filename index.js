// Code your solution in this file.
function lowerCaseDrivers(drivers)
{
  const lowerDrivers = drivers.map(driver => driver.toLowerCase());
  return lowerDrivers;
}
function nameToAttributes(drivers)
{
  const newDrivers = drivers.map(driver => {
    let newDriver = {};
    newDriver.firstName = driver.split(" ")[0];
    newDriver.lastName = driver.split(" ")[1];
    return newDriver;
  });

  return newDrivers;
}
function attributesToPhrase(drivers)
{
  const driverStrings = drivers.map(driver => `${driver.name} is from ${driver.hometown}`)
  return driverStrings;
}
