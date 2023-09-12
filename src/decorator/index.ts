/***** Component *******/

interface Component {
  deco(): string; // 옷을 입혀주자
}

/***** ConcreteComponent *******/

class ConcreteComponent implements Component {
  deco(): string {
    return "검은콩으로 눈코입을 붙여줍니다.";
  }
}

/****** Decorator ********/
abstract class Decorator implements Component {
  private snowmanComponent: Component;

  constructor(snowmanComponent: Component) {
    this.snowmanComponent = snowmanComponent;
  }
  deco(): string {
    return this.snowmanComponent.deco();
  }
}

/* 꾸며줄 재료들 */
class Muffler extends Decorator {
  constructor(snowmanComponent: Component) {
    super(snowmanComponent);
  }

  deco(): string {
    return super.deco() + "목도리도 해줍니다.";
  }
}

class Cap extends Decorator {
  constructor(snowmanComponent: Component) {
    super(snowmanComponent);
  }

  deco(): string {
    return super.deco() + "모자도 해줍니다.";
  }
}

/************* 클라이언트 ************/

const onlyBeen = new ConcreteComponent();
console.log(`눈만 있는 눈사람: ${onlyBeen.deco()}`);

const allDeco = new Cap(new Muffler(new ConcreteComponent()));
console.log(`다 갖춘 눈사람: ${allDeco.deco()}`);
