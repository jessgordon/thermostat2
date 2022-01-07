class Thermostat {
  constructor() {
    this.temperature = 20;
    this.powerSavingMode = true;
  };

  getTemperature() {
    return this.temperature;
  };

  up() {
    return this.temperature += 1;
  };

  down() {
    if (this.temperature > 10) {
      return this.temperature -= 1;
    };
  };

  setPowerSavingMode(boolean) {
    return this.powerSavingMode = boolean; 
  };
}

module.exports = Thermostat;