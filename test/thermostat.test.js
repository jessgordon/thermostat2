const Thermostat = require('../lib/thermostat');

describe('Thermostat Class', () => {

  const thermostat = new Thermostat();

  it('creates an instance of the Thermostat Class', () => {
    expect(thermostat).toBeInstanceOf(Thermostat);
  });

  it('gives temperature reading', () => {
    expect(thermostat.getTemperature()).toBe(20);
  });
})