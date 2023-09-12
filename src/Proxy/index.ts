/************** Subject ***************/

interface Subject {
  print(): void;
}

/************** RealSubject ***************/

class RealsSubject implements Subject {
  print(): void {
    console.log("여기에 접근할 수 있습니다.");
  }
}

/************** Proxy ***************/

class Proxy_ implements Subject {
  text: RealsSubject;

  print(): void {
    console.log("프록시 객체를 지나");

    this.text = new RealsSubject();

    return this.text.print();
  }
}

/************** Client ***************/

const proxy = new Proxy_();
proxy.print();
