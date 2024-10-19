import { Duck } from "../duck";
import { FlyNoWay } from "../flyBehavior/flynoway";
import { Quack } from "../quackBehavior/quack";

export class ModelDuck extends Duck {
  constructor() {
    super(new FlyNoWay(), new Quack());
  }

  public display(): void {
    console.log("I'm a model duck");
  }
}
