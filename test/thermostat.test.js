const Thermostat = require('../lib/thermostat');

describe('Thermostat Class', () => {

  beforeEach(() => {
    thermostat = new Thermostat();
  })

  it('creates an instance of the Thermostat Class', () => {
    expect(thermostat).toBeInstanceOf(Thermostat);
  });

  it('gives temperature reading', () => {
    expect(thermostat.getTemperature()).toBe(20);
  });

  it('increases the temperature by 1', () => {
    thermostat.up();
    expect(thermostat.getTemperature()).toBe(21);
  });

  it('decreases the temperature by 1', () => {
    thermostat.down();
    expect(thermostat.getTemperature()).toBe(19);
  });

  it('is initialized with power saving mode on', () => {
    expect(thermostat.powerSavingMode).toBe(true);
  });

  it('disables power saving mode', () => {
    thermostat.setPowerSavingMode(false);
    expect(thermostat.powerSavingMode).toBe(false);
  });

  it('has a minimum temperature of 10 degrees', () => {
    for (let i = 0; i < 11; i++) {
      thermostat.down();
    };

    expect(thermostat.getTemperature()).toBe(10);
  });

  it('has a maximum temperature of 25 degrees when power saving mode is on', () => {
    for (let i = 0; i < 6; i++) {
      thermostat.up();
    };

    expect(thermostat.getTemperature()).toBe(25);
  });

  it('has a maximum temperature of 32 degrees when power saving mode is off', () => {
    thermostat.setPowerSavingMode(false);
    
    for (let i = 0; i < 13; i++) {
      thermostat.up();
    };

    expect(thermostat.getTemperature()).toBe(32);
  });
})