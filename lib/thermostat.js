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
    return this.temperature -= 1;
  };

  setPowerSavingMode(boolean) {
    return this.powerSavingMode = boolean; 
  };
}

module.exports = Thermostat;