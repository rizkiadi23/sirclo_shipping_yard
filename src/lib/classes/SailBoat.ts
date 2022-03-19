import Ship from "../abstracts/Ship";
import { ShipInfoModel } from "../models/ShipInfo";

class SailBoat extends Ship {
  private sailBoatId: number = 0;

  shipInfo: ShipInfoModel = {
    name: '',
    year: 0,
    color: ''
  }

  constructor(name: string, year: number, color: string) {
    super();
    this.shipInfo.name = name;
    this.shipInfo.year = year;
    this.shipInfo.color = color;
    this.sailBoatId = this.generateId();
  }

  getShipInfo(): ShipInfoModel {
    return this.shipInfo;
  }

  getSailBoatInfo(): any {
    return {
      sailBoatId: this.sailBoatId,
      ...this.shipInfo,
    }
  }

  park(): void {
    console.log("Sail Boat successfully parked");
  }

  sail(): void {
    console.log("Sail Boat started to sail the sea");
  }
}

export default SailBoat;