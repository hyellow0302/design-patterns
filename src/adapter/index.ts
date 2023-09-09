// 아이폰 8핀 충전기로 갤럭시 폰을 충전할 수 있을까?! 타입전환 어댑터를 이용할 수 밖에 ~~

/*************** Target ****************/
abstract class Charge {
  constructor(protected deviceApple: string) {}

  abstract eightPin_Charge(): void;
}

class iphone extends Charge {
  battery = 10;

  eightPin_Charge(): void {
    console.log(
      `⚡ 현재 ${this.deviceApple}을(를) 충전중입니다. ⚡ - ${this.battery}%`
    );
    console.log(
      `⚡ 충전하시는동안 휴대폰 사용을 가급적이면 자제해주시길 바랍니다. ⚡`
    );
    this.battery = this.battery + 10;
    console.log(
      `⚡ 충전하시는동안 휴대폰 사용을 가급적이면 자제해주시길 바랍니다. - ${this.battery} ⚡`
    );
  }

  constructor(deviceApple: string) {
    super(deviceApple);
  }
}

class airpods extends Charge {
  battery = 10;

  eightPin_Charge(): void {
    console.log(
      `⚡ 현재 ${this.deviceApple}을(를) 충전중입니다. ⚡ - ${this.battery}%`
    );
    console.log(
      `⚡ 충전하시는동안 휴대폰 사용을 가급적이면 자제해주시길 바랍니다. ⚡`
    );
    this.battery = this.battery + 10;
    console.log(
      `⚡ 충전하시는동안 휴대폰 사용을 가급적이면 자제해주시길 바랍니다. - ${this.battery}%⚡`
    );
  }

  constructor(deviceApple: string) {
    super(deviceApple);
  }
}

/*************** Adaptee ****************/
class galaxy {
  battery = 10;
  private deviceSamsung: string;

  set setDevice(model: string) {
    this.deviceSamsung = model;
  }

  get getDevice() {
    return this.deviceSamsung;
  }

  constructor(_deviceSamsung: string) {
    this.deviceSamsung = _deviceSamsung;
  }

  Ctype_Charge(): void {
    console.log(`🌟 현재 ${this.deviceSamsung}을(를) 충전중입니다~ 🌟`);
    console.log(`🌟 행복한 하루 되세요 -삼성- 🌟`);
    this.battery = this.battery + 10;
  }
}

/*************** Adapter ****************/
class GalaxyAdapter extends Charge {
  private galaxy: galaxy;

  constructor(_galaxy: galaxy) {
    super(_galaxy.getDevice);
    this.galaxy = _galaxy;
    this.galaxy.setDevice = _galaxy.getDevice;
  }

  eightPin_Charge(): void {
    this.galaxy.Ctype_Charge();
  }
}

/*************** Client ****************/

const chargeList = Array<Charge>();
chargeList.push(new iphone("아이폰14"));
chargeList.push(new airpods("에어팟3"));
// chargeList.push(new galaxy("갤럭시100"));

var galaxy100 = new galaxy("갤럭시 100");

chargeList.push(new GalaxyAdapter(galaxy100));

chargeList.forEach((phone) => {
  phone.eightPin_Charge();
});

console.log(galaxy100.battery);

chargeList.forEach((phone) => {
  phone.eightPin_Charge();
});
console.log(galaxy100.battery);
