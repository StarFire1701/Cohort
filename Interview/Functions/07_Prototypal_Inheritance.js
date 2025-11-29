class A {
    funinsideA() {
        console.log('Hi I am inside Function A');
    }
}


class B {
    funinsideB() {
        console.log('Hi I am inside Function B');
    }
}
B.prototype = A.prototype;

const temp1 = new A();
const temp2 = new B();
temp1.funinsideA();
temp2.funinsideB();
temp2.funinsideA();