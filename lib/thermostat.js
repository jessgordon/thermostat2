class Thermostat {
  constructor() {
    this.temperature = 20;
    this.powerSavingMode = true;
    this.minimumTemp = 10;
    this.maximumTemp = 25;
  };

  getTemperature() {
    return this.temperature;
  };

  up() {
    if (this.temperature < this.maximumTemp) {
      return this.temperature += 1;
    };
  };

  down() {
    if (this.temperature > this.minimumTemp) {
      return this.temperature -= 1;
    };
  };

  setPowerSavingMode(boolean) {
    if (boolean === false) {
      this.maximumTemp = 32;
    } else {
      this.maximumTemp = 25;
    }
    return this.powerSavingMode = boolean; 
  };
}

module.exports = Thermostat;