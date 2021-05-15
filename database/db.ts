import Dexie from "dexie";

class TimeKeeperDatabase extends Dexie {
  // Declare implicit table properties.
  // (just to inform Typescript. Instanciated by Dexie in stores() method)
  timecards: Dexie.Table<ITimeCard, number>; // number = type of the primkey
  //...other tables goes here...

  constructor() {
    super("timekeeper");
    this.version(1).stores({
      timecards: "++id,date,text,cardType",
      //...other tables goes here...
    });
    // The following line is needed if your typescript
    // is compiled using babel instead of tsc:
    this.timecards = this.table("timecards");
  }
}

export interface ITimeCard {
  id?: number;
  date: Date;
  text: string;
  cardType: "countUp" | "countDown";
}

const db = new TimeKeeperDatabase();

export { db };
