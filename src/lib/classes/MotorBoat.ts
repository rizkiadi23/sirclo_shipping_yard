import Ship from "../abstracts/Ship";
import { ShipInfoModel } from "../models/ShipInfo";

class MotorBoat extends Ship {
  private motorBoatId: number = 0;

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
    this.motorBoatId = this.generateId();
  }

  getShipInfo(): ShipInfoModel {
    return this.shipInfo;
  }

  getMotorBoatInfo(): any {
    return {
      motorBoatId: this.motorBoatId,
      ...this.shipInfo,
    }
  }

  park(): void {
    console.log("Motor Boat successfully parked");
  }

  sail(): void {
    console.log("Motor Boat started to sail the sea");
  }
}

export default MotorBoat;