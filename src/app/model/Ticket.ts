import { Guest} from './Guest';
import { Coordinates } from './Coordinates';

export class Ticket {
  public arrival: Date;
  public departure: Date;
  public from: Coordinates;
  public guest: Guest;
  public id: string;
  public no: string;
  public rtArrival: Date;
  public rtDeparture: Date;
  public stops: Coordinates[];
  public to: Coordinates;

}
