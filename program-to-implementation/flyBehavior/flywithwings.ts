import { FlyBehavior } from "../types";

export class FlyWithWings implements FlyBehavior {
  public fly(): void {
    console.log("I'm flying!");
  }
}
