import chai from 'chai';
import ShipYard from '../../lib/classes/ShipYard';
import MotorBoat from "../../lib/classes/MotorBoat";
import SailBoat from "../../lib/classes/SailBoat";
import Yacht from "../../lib/classes/Yacht";

describe('Testing for ShipYard class', () => { 
  let sailBoat: ShipYard;

  // List of Child Ship instances
  let _motorBoat: MotorBoat;
  let _sailBoat: SailBoat;
  let _yacht: Yacht;

  beforeEach(() => {
    sailBoat = new ShipYard();
    _motorBoat = new MotorBoat('Test Motor Boat', 2000, 'Red');
    _sailBoat = new SailBoat('Test Sail Boat', 2019, 'Black');
    _yacht = new Yacht('Test Yacht', 2019, 'Purple');
  });

  it('Should be able to register various boats into the ship yard via registerShips()',  () => {
    sailBoat.registerShips([_motorBoat, _sailBoat, _yacht]);
    chai.expect(sailBoat.getShips().length).to.be.eql(3);
  });

  it('Should be able to add new ship', () => {
    const additionalYatch: Yacht = new Yacht('Addditional Yatch', 2000, 'Yellow');
    sailBoat.addShip(additionalYatch);
    chai.expect(sailBoat.getShips().length).to.be.eq(1);
  });

  it('Should be able to remove existing ship', () => {
    sailBoat.registerShips([_motorBoat, _sailBoat, _yacht]);
    sailBoat.removeShip('Test Motor Boat');
    chai.expect(sailBoat.getShips().length).to.be.eq(2);
  });

  it('Should be able to print all the registered ships to the shipyard', () => {
    sailBoat.registerShips([_motorBoat, _sailBoat, _yacht]);
    chai.expect(sailBoat.listAllShips());
  });

  it('Should be able to print even no registered ships to the shipyard', () => {
    chai.expect(sailBoat.listAllShips());
  });
 });