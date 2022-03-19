import Ship from "../abstracts/Ship";

class ShipYard {
  private ships: Ship[] = [];

  getShips() {
    return this.ships;
  }

  registerShips(ships: Ship[]) {
    this.ships = ships;
  }

  addShip(ship: Ship) {
    this.ships.push(ship);
  }

  removeShip(name: string) {
    this.ships = this.ships.filter((el) => el.shipInfo.name !== name);
  }

  listAllShips() {
    console.log(`Name   | Year    | Color`);
    for (let ship of this.ships) {
      console.log(`${ship.shipInfo.name} | ${ship.shipInfo.year} | ${ship.shipInfo.color}`);
    };
    console.log(" ");
  }
}

export default ShipYard;