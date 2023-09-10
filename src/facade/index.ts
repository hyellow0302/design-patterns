/*********** 서브시스템1: 물 넣기 *************/

class SubSystemOne_PutWater {
  setWater() {
    return console.log(" 물을 넣었습니다. ");
  }
}

/*********** 서브시스템2: 면 넣기 *************/

class SubSystemTwo_PutNoodle {
  setNoodle() {
    return console.log(" 면을 넣었습니다. ");
  }
}

/*********** 서브시스템3: 라면수프 넣기 *************/

class SubSystemThree_PutSoup {
  setSoup() {
    return console.log(" 라면수프을 넣었습니다. ");
  }
}

/*********** 서브시스템4: 상 차리기 *************/

class SubSystemOne_Setting {
  setFood() {
    return console.log(" 밥상까지 다 차렸습니다. 먹기만하면 되네요! ");
  }
}

/*********** 퍼사드: 동생 *************/

class Facade_Sister {
  private water: SubSystemOne_PutWater;
  private noodle: SubSystemTwo_PutNoodle;
  private soup: SubSystemThree_PutSoup;
  private setting: SubSystemOne_Setting;

  constructor() {
    this.water = new SubSystemOne_PutWater();
    this.noodle = new SubSystemTwo_PutNoodle();
    this.soup = new SubSystemThree_PutSoup();
    this.setting = new SubSystemOne_Setting();
  }

  public Please_cook_ramen_for_me(): void {
    this.water.setWater();
    this.noodle.setNoodle();
    this.soup.setSoup();
    this.setting.setFood();
  }
}

/*********** 클라이언트: 나 *************/

const dinner = new Facade_Sister();
dinner.Please_cook_ramen_for_me();
