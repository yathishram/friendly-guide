import { QuackBehavior } from "../types";

export class Squeak implements QuackBehavior {
  public quack(): void {
    console.log("Squeak");
  }
}
