/****************
 * Flyweight
 * 공유에 사용할 클래스의 인터페이스 제공
 * *****************/

interface Doll {
  // method(extrinsicState)
  produce(): void;
}

/****************
 * ConcreteFlyweight
 * Flyweight의 내용을 정의합니다. 실제 공유될 객체입니다.
 * *****************/

class BaseDoll implements Doll {
  private shape: string;
  private clothes: string; // 매번 바뀌는 옷

  constructor(shape: string) {
    this.shape = shape;
  }

  setClothes(clothes: string): void {
    this.clothes = clothes;
  }

  produce(): void {
    return console.log(
      `${this.shape}모양인 인형을 제작했습니다. 이번 시즌에는 ${this.clothes} 옷을 입도록 제작했습니다. \n -----------------------------------------------------------`
    );
  }
}

/****************
 * ConcreteFlyweight
 * 해당 공장을 사용해서 Flyweight의 객체를 생성하고 관리해주는 역할
 * *****************/

class DollFactory {
  // flyweightCollection
  private static cache: { [shape: string]: BaseDoll } = {};

  // getFlyweight();
  public static getDoll(shape: string): Doll {
    if (shape in this.cache) {
      console.log("기존에 이미 제작했던 인형입니다. 다시 제작 중 ..... ");
      return this.cache[shape];
    } else {
      console.log("새로 기획된 인형입니다. 제작 중 .....");
      const newBase = new BaseDoll(shape);

      this.cache[shape] = newBase;

      return newBase;
    }
  }
}

/**************** Client *****************/
const basicDoll = new Doll(DollFactory.getDoll("곰돌이, 하얀색"), "물고기");
basicDoll.getClothe();

const basicDoll2 = new Doll(DollFactory.getDoll("곰돌이, 하얀색"), "흰곰");
basicDoll2.getClothe();

const basicDoll3 = new Doll(DollFactory.getDoll("곰돌이, 하얀색"), "문어");
basicDoll3.getClothe();

const basicDoll4 = new Doll(
  DollFactory.getDoll("고양이, 파란색과 하얀색이 섞인색"),
  "고양이"
);
basicDoll4.getClothe();
