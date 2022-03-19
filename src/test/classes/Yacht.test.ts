import Yacht from '../../lib/classes/Yacht';
import chai from 'chai';

describe('Testing for yacht class', () => {

  let yacht: Yacht;

  beforeEach(() => {
    yacht = new Yacht('Yacht Test', 2011, 'Blue');
  });

  it('Should be able to getShipInfo', () => {
    chai.expect(yacht.getShipInfo().name, 'Yacht Test');
    chai.expect(yacht.getShipInfo().year.toString(), '2011');
    chai.expect(yacht.getShipInfo().color, 'Blue');
  });

  it('Should be able to set the yacht owner name', () => {
    yacht.setYachtOwnerName('Roman Abramovic');
    chai.expect(yacht.getYachtInfo().yachtOwnerName, 'Roman Abramovic');
  });

  it('Should be able to generate an id and be seen via getyachtInfo() method', () => {
    chai.expect(yacht.getYachtInfo().yachtId).greaterThan(0);
  });

  it('Should be able to run sail() method', () => {
    chai.expect(yacht.sail());
  });

  it('Should be able to run park() method', () => {
    chai.expect(yacht.park());
  });
});