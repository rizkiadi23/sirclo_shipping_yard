import chai from 'chai';
import SailBoat from "../../lib/classes/SailBoat";

describe('Testing for SailBoat class', () => {

  let sailBoat: SailBoat;

  beforeEach(() => {
    sailBoat = new SailBoat('Sail Boat Test', 2008, 'Red');
  });

  it('Should be able to getShipInfo', () => {
    chai.expect(sailBoat.getShipInfo().name, 'Sail Boat Test');
    chai.expect(sailBoat.getShipInfo().year.toString(), '2008');
    chai.expect(sailBoat.getShipInfo().color, 'Red');
  });

  it('Should be able to generate an id and be seen via getSailBoatInfo() method', () => {
    chai.expect(sailBoat.getSailBoatInfo().sailBoatId).greaterThan(0);
  });

  it('Should be able to run sail() method', () => {
    chai.expect(sailBoat.sail());
  });

  it('Should be able to run park() method', () => {
    chai.expect(sailBoat.park());
  });
});