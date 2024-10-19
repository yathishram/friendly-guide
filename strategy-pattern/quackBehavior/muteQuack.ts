import { QuackBehavior } from "../types";

export class MuteQuack implements QuackBehavior {
  public quack(): void {
    console.log("<< Silence >>");
  }
}
