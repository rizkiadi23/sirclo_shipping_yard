import MotorBoat from "./classes/MotorBoat";
import SailBoat from "./classes/SailBoat";
import Yacht from "./classes/Yacht";
import ShipYard from "./classes/ShipYard";
import Ship from "./abstracts/Ship";

const motorBoatOne: MotorBoat = new MotorBoat('Bulgary Boat', 2021, 'Red');
const motorBoatTwo: MotorBoat = new MotorBoat('Ukraine Boat', 2001, 'Yellow-Blue');
console.log(motorBoatOne.getMotorBoatInfo());
console.log(motorBoatTwo.getMotorBoatInfo());

const sailBoatOne: SailBoat = new SailBoat('Sail.js Boat', 1990, 'Black');

const superYacht: Yacht = new Yacht('Russian Yacht', 2010, 'Yellow');

const tanjungPriokShipYard: ShipYard = new ShipYard();

tanjungPriokShipYard.registerShips([motorBoatOne, sailBoatOne, superYacht]);

tanjungPriokShipYard.listAllShips();

tanjungPriokShipYard.removeShip('Bulgary Boat');

tanjungPriokShipYard.listAllShips();

// Sample Polymorphism Implementation - New Ship initiated by Yacht Type
const crazyRichYacht: Ship = new Yacht('Crazy Yacht', 2022, 'Black and White');
tanjungPriokShipYard.addShip(crazyRichYacht);


// Print all registered ships in the shipyard
tanjungPriokShipYard.listAllShips();