// Code your solution here

const drivers = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'Bobby'];

const findMatching = (drivers, name) => drivers.filter(driverName => driverName.toLowerCase() === name.toLowerCase());

const fuzzyMatch = (drivers, letters) => drivers.filter(driverName => driverName.slice(0, letters.length) === letters);

const matchName = (drivers, name) => drivers.filter(driver => driver.name.toLowerCase() === name.toLowerCase());