/****************
 * FlyweightFactory
 * 만일 객체가 메모리에 존재하면 그대로 가져와 반환하고, 없다면 새로 생성해 반환한다
 * *****************/

class BaseDoll {
  public shape: string; // 모양 - 곰도리가 거의 고정
  public color: string; // 색 - 흰색이 거의 고정

  constructor(shape: string, color: string) {
    this.shape = shape;
    this.color = color;
  }
}

class DollFactory {
  // 캐시를 저장하는 곳: 자주 변하지 않는 Font 정보를 저장합니다.
  private static cache: { [base: string]: BaseDoll } = {};

  public static getDoll(base: string): BaseDoll {
    // 캐시가 존재한다면 해당 캐시에서 폰트를 반환합니다.
    if (base in this.cache) {
      console.log("기존에 이미 제작했던 인형입니다. 다시 제작 중 ..... ");
      return this.cache[base];
    } else {
      // 캐시가 존재하지 않는다면 캐시에 해당 값을 저장하고 반환합니다.
      const split = base.split(", ");
      const newBase = new BaseDoll(split[0], split[1]);

      this.cache[base] = newBase;
      console.log("새로 기획된 인형입니다. 제작 중 .....");
      /// console.log(this.cache);
      return newBase;
    }
  }
}

/**************** Flyweight *****************/

class Doll {
  private info: BaseDoll; // 자주 바뀌지않는 캐시된 인형 모양과 색
  private clothes: string; // 매번 바뀌는 옷

  constructor(info: BaseDoll, clothes: string) {
    this.info = info;
    this.clothes = clothes;
  }

  getClothe(): void {
    return console.log(
      `${this.info.color}을 가진 ${this.info.shape}모양인 인형을 제작했습니다. 이번 시즌에는 ${this.clothes} 옷을 입도록 제작했습니다. \n -----------------------------------------------------------`
    );
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
