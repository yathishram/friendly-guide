import { Duck } from "../duck";
import { FlyWithWings } from "../flyBehavior/flywithwings";
import { Quack } from "../quackBehavior/quack";

export class MallardDuck extends Duck {
  constructor() {
    super(new FlyWithWings(), new Quack());
  }

  public display(): void {
    console.log("I'm a real Mallard duck");
  }
}
