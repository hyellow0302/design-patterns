/*********** Component ************/

abstract class Component {}

abstract class Component2 {}

/*********** Leaf *********** file */

class myFile extends Component {}

/*********** Composite ************/
class myFolder extends Component {
  private components: Array<Component> = [];

  add(FileOrFolder: Component) {
    console.log("추가됐슈~~~~~~~!!!");
    this.components.push(FileOrFolder);
  }
}

/************** 상속받지않은 클래스 *************/
class Icon extends Component2 {}

/************ 클라이언트 *************/
const folderA = new myFolder();
const folderB = new myFolder();

const fileA = new myFile();
const fileB = new myFile();

const icon = new Icon();

folderA.add(folderB);
folderB.add(fileA);
// fileA.add(fileB);
folderA.add(icon); // 이거 원래 안돼야함
/*
TypeScript 또는 JavaScript에서는 런타임 시 동적 타이핑이 적용되므로 엄격한 타입 체크가 이루어지지 않습니다.
즉, icon 객체가 Component 타입을 상속받지 않아도 코드는 컴파일 및 실행됩니다. 이것은 TypeScript 또는 JavaScript의 동적 타이핑 특성 때문입니다. 런타임에 객체의 타입이 검사되지 않으며, 대신 실행 시 동적으로 객체를 처리합니다.
따라서 코드에서 folderA.add(icon)은 구문적으로 유효하지만, 이러한 동적 타이핑 특성 때문에 런타임에 예기치 않은 동작을 유발할 수 있습니다. 이것은 객체지향적으로 바람직하지 않을 수 있으며, 개발자가 코드를 신중하게 작성하고 객체의 타입 관계를 잘 이해해야 함을 의미합니다.
*/
