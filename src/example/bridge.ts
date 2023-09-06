/*************** 기능 계층 ***************/
class Draft {
  constructor(
    private title: string,
    private author: string,
    private content: string[]
  ) {}

  getTitle() {
    return this.title;
  }
  getAuthor() {
    return this.author;
  }
  getContent() {
    return this.content;
  }

  print(display: Display): void {
    display.title(this);
    display.author(this);
    display.content(this);
  }
}

/* 추가 기능 */
class CharatersCounter extends Draft {
  constructor(title: string, author: string, content: string[]) {
    super(title, author, content);
  }

  getCharacterCount(): number {
    let count = 0;

    count += this.getTitle().length;
    count += this.getAuthor().length;

    this.getContent().forEach((element) => (count += element.length));

    return count;
  }
}

/*************** 구현 계층 ***************/
// interface
interface Display {
  title(draft: Draft): void;
  author(draft: Draft): void;
  content(drfat: Draft): void;
}

// interface를 구성하는 클래스 - SimpleDisplay
class SimpleDisplay implements Display {
  title(draft: Draft): void {
    console.log(draft.getTitle());
  }
  author(draft: Draft): void {
    console.log(draft.getAuthor());
  }
  content(draft: Draft): void {
    const content = draft.getContent();

    content.forEach((element) => {
      console.log(element);
    });
  }
}

// interface를 구성하는 클래스 - SimpleDisplay
class nameDisplay implements Display {
  title(draft: Draft): void {
    console.log(`제목: ${draft.getTitle()}`);
  }
  author(draft: Draft): void {
    console.log(`저자: ${draft.getAuthor()}`);
  }
  content(draft: Draft): void {
    const content = draft.getContent();

    console.log("내용:");
    content.forEach((element) => {
      console.log(`       ${element}`);
    });
  }
}

// 작성한 코드 테스트
const title = "동그라미는 원이다.";
const author = "이혜인";
const content = ["우엑 !", "이건 아웃이야", "개구리는 검은색"];

// const draft = new Draft(title, author, content);
const draft = new CharatersCounter(title, author, content);

// const display = new SimpleDisplay();
const display = new nameDisplay();

draft.print(display);

console.log(`전체 문자수: ${draft.getCharacterCount()}`);
