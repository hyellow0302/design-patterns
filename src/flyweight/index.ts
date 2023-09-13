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
  private shape: string; // intrinsicState

  constructor(shape: string) {
    this.shape = shape;
  }

  produce(): void {
    return console.log(
      `${this.shape}모양인 인형을 제작 완료했습니다. \n -----------------------------------------------------------`
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
      console.log("기존에 이미 제작했던 인형모양입니다. 다시 제작 중 ..... ");
      console.log(this.cache);
      console.log("\n");
      return this.cache[shape];
    } else {
      console.log("새로 기획된 인형모양입니다. 제작 중 .....");
      const newBase = new BaseDoll(shape);
      this.cache[shape] = newBase;
      console.log(this.cache);
      console.log("\n");
      return newBase;
    }
  }
}

/**************** Client *****************/
const basicDoll1 = DollFactory.getDoll("곰돌이모양");
const basicDoll2 = DollFactory.getDoll("곰돌이모양");
const basicDoll3 = DollFactory.getDoll("토끼모양");
const basicDoll4 = DollFactory.getDoll("토끼모양");
const basicDoll5 = DollFactory.getDoll("햄스터모양");
const basicDoll6 = DollFactory.getDoll("햄스터모양");
