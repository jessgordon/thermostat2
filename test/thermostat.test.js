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
})