import { FlyBehavior, QuackBehavior } from "./types";

export abstract class Duck {
  public flyBehavior: FlyBehavior;
  public quackBehavior: QuackBehavior;

  constructor(flyBehavior: FlyBehavior, quackBehavior: QuackBehavior) {
    this.flyBehavior = flyBehavior;
    this.quackBehavior = quackBehavior;
  }

  public swim(): void {
    console.log("All ducks float, even decoys!");
  }

  public display(): void {
    console.log("Displaying duck");
  }

  public performQuack(): void {
    this.quackBehavior.quack();
  }

  public performFly(): void {
    this.flyBehavior.fly();
  }

  public setFlyBehavior(flyBehavior: FlyBehavior): void {
    this.flyBehavior = flyBehavior;
  }

  public setQuackBehavior(quackBehavior: QuackBehavior): void {
    this.quackBehavior = quackBehavior;
  }
}
