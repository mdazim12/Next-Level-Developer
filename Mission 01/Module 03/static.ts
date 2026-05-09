
 /// static

 class Counter {
   static count : number = 0;

    static incremeent() {
        return (Counter.count = Counter.count + 1);
    }

    static decrement() {
        return (Counter.count = Counter.count - 1);
    }
 }


 const instance1 = new Counter();


//  instance1.incremeent();

//  console.log(instance1.incremeent());   // 1
//  console.log(instance1.incremeent());   // 1 >> 2
//  console.log(instance1.incremeent());   // 2 >> 3


//  const instance2 = new Counter();
//  console.log(instance2.incremeent());


//   const instance3 = new Counter();
//   console.log(instance3.incremeent());


console.log(Counter.incremeent());
console.log(Counter.incremeent());
console.log(Counter.incremeent());


