import { ShipInfoModel } from "../models/ShipInfo";

/**
 * A sample implementation of abstraction concept in OOP
 * Ship as the abstract class which acts as a base class for the inherited sub-classes
 */
abstract class Ship {
  // abstract property
  abstract shipInfo: ShipInfoModel;

  // abstract methods
  abstract park(): void;

  abstract sail(): void;

  abstract getShipInfo(): any;

  // shared method
  generateId() {
    return Number((Math.random() * 100).toFixed(0));
  }
}

export default Ship;