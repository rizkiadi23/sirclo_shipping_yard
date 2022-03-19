import chai from 'chai';
import MotorBoat from "../../lib/classes/MotorBoat";

describe('Testing for MotorBoat class', () => {

  let motorBoatTest: MotorBoat;

  beforeEach(() => {
    motorBoatTest = new MotorBoat('Motor Boat Test', 2001, 'Black');
  });

  it('Should be able to getShipInfo', () => {
    chai.expect(motorBoatTest.getShipInfo().name, 'Motor Boat Test');
    chai.expect(motorBoatTest.getShipInfo().year.toString(), '2001');
    chai.expect(motorBoatTest.getShipInfo().color, 'Black');
  });

  it('Should be able to generate an id and be seen via getMotorBoatInfo() method', () => {
    chai.expect(motorBoatTest.getMotorBoatInfo().motorBoatId).greaterThan(0);
  });

  it('Should be able to run sail() method', () => {
    chai.expect(motorBoatTest.sail());
  });

  it('Should be able to run park() method', () => {
    chai.expect(motorBoatTest.park());
  });
});