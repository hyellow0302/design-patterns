abstract class Animal {
  constructor(protected name: string) {}

  abstract sound(): void;
}

class Dog extends Animal {
  sound(): void {
    console.log(`${this.name}은 멍멍!`);
  }

  constructor(name: string) {
    super(name);
  }
}

class Cat extends Animal {
  sound(): void {
    console.log(`${this.name}은 야옹!`);
  }

  constructor(name: string) {
    super(name);
  }
}

/* 완전히 형태가 다른 Tiger 클래스 */
class Tiger {
  constructor() {}

  private _name: string | null = null;

  set name(v: string) {
    this._name = v;
  }

  get name() {
    return this._name;
  }

  roar(): string {
    return "으르릉~";
  }
}

class TigerAdatper extends Animal {
  private tiger: Tiger;

  constructor(name: string) {
    super(name);
    this.tiger = new Tiger();
    this.tiger.name = name;
  }

  sound(): void {
    console.log(`${this.tiger.name}은 ${this.tiger.roar()}`);
  }
}

/* 메인 입니다람쥐! */
const list = Array<Animal>();
list.push(new Dog("흐꼬미"));
list.push(new Dog("콩이"));
list.push(new Cat("레오"));
list.push(new TigerAdatper("풍풍"));

list.forEach((animal) => {
  animal.sound();
});
