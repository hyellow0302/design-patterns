/*************** 추상 계층 ***************/

class Shape {
  constructor(private vertax: number) {}
  setVertax() {
    return `꼭짓점 개수가 ${this.vertax}개인 도형이 생성되었습니다.`;
  }

  getVertax() {
    return this.vertax;
  }

  produceShape(color: Color): void {
    color.vertax(this);
  }
}

/* 추가 기능 */
class configShape extends Shape {
  constructor(vertax: number) {
    super(vertax);
  }

  getConfigShape(): string {
    let result = "꼭짓점이 3개이상이므로 도형이 맞습니다.";
    let v = super.getVertax();

    if (v < 3) {
      result = "꼭짓점이 2개이하이므로 도형이 아닙니다.";
    }

    return result;
  }
}

/*************** 구현 계층 ***************/

interface Color {
  vertax(shape: Shape): void;
}

class Red implements Color {
  vertax(shape: Shape): void {
    console.log(`${shape.setVertax()} 이 도형의 색깔은 빨강입니다.`);
  }
}

class Blue implements Color {
  vertax(shape: Shape): void {
    console.log(`${shape.setVertax()} 이 도형의 색깔은 파랑입니다.`);
  }
}

/*************** 클라이언트 ****************/
// const triangle = new Shape(3);
const triangle = new configShape(3);
const umm = new configShape(2);

const redColor = new Red();
const blueColor = new Blue();

triangle.produceShape(redColor);
console.log(`결과적으로 ${triangle.getConfigShape()}`);

umm.produceShape(blueColor);
console.log(`결과적으로 ${umm.getConfigShape()}`);
