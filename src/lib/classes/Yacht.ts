import Ship from "../abstracts/Ship";
import { ShipInfoModel } from "../models/ShipInfo";

class Yacht extends Ship {
  private yachtId: number = 0;
  private yachtOwnerName: string = '';

  shipInfo: ShipInfoModel = {
    name: '',
    year: 0,
    color: ''
  }

  setYachtOwnerName(name: string) {
    this.yachtOwnerName = name;
  }

  constructor(name: string, year: number, color: string) {
    super();
    this.shipInfo.name = name;
    this.shipInfo.year = year;
    this.shipInfo.color = color;
    this.yachtId = this.generateId();
  }

  getShipInfo(): ShipInfoModel {
    return this.shipInfo;
  }

  getYachtInfo(): any {
    return {
      yachtId: this.yachtId,
      yachtOwnerName: this.yachtOwnerName,
      ...this.shipInfo,
    }
  }

  park(): void {
    console.log("Yacht successfully parked");
  }

  sail(): void {
    console.log("Yacht started to sail the sea");
  }
}

export default Yacht;