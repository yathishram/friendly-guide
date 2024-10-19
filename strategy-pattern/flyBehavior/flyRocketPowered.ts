import { FlyBehavior } from "../types";

export class FlyRocketPowered implements FlyBehavior {
  public fly(): void {
    console.log("I'm flying with a rocket!");
  }
}
