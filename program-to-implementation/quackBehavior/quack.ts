import { QuackBehavior } from "../types";

export class Quack implements QuackBehavior {
  public quack(): void {
    console.log("Quack");
  }
}
