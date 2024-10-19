import { Duck } from "./duck";
import { MallardDuck } from "./ducksTypes/mallardDuck";
import { ModelDuck } from "./ducksTypes/modeDuck";
import { FlyRocketPowered } from "./flyBehavior/flyRocketPowered";

class MiniDuckSimulator {
  static main() {
    const mallard: Duck = new MallardDuck();

    console.log("Mallad Duck");
    mallard.performQuack();
    mallard.performFly();

    console.log("---------------------");

    const model: Duck = new ModelDuck();

    console.log("Model Duck");
    // Perform default behavior
    model.performFly();

    // Let's set the behavior dynamically
    model.setFlyBehavior(new FlyRocketPowered());

    model.performFly();
  }
}

MiniDuckSimulator.main();
