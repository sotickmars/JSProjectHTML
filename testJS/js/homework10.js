
class Clock{
    constructor({template}){
        this.template = template;
    }

    render(){
      let date = new Date();
  
      let hours = date.getHours();
      if (hours < 10) hours = '0' + hours;
  
      let mins = date.getMinutes();
      if (mins < 10) mins = '0' + mins;
  
      let secs = date.getSeconds();
      if (secs < 10) secs = '0' + secs;
  
      let output = this.template
        .replace('h', hours)
        .replace('m', mins)
        .replace('s', secs);
  
      console.log(output);
    }

    start(){
        this.render();
        this.timer = setInterval(() => this.render(), 1000);
    }

    stop(){
        this.render();
        clearInterval(this.timer);
    }
}

let clock = new Clock({template: 'h:m:s'});
  clock.start();


  class ExtendedClock extends Clock{
    constructor(modeTime){
      super(modeTime)
      let {precision=1000} = modeTime;
      this.precision = precision;
    }
    start(){
      this.timer = setInterval(() => this.render(),this.precision);
    }
}

  let extendedClock = new ExtendedClock({
    template:'h:m:s',
    precision: 10000,
  });
  extendedClock.start()


// const Shapes = {
//     circle: 'Circle',
//     square: 'Square',
//   };
  
//   function Shape(type, name) {
//     this.name = name;
//     this.type = type;
//     this.sq = function () {
//       return this.calcSq();
//     };
//   }
  
//   function Сircle(name, d) {
//     const circle = new Shape(Shapes.circle, name);
//     circle.d = d;
//     circle.calcSq = function () {
//       return (this.d / 2) ** 2 * Math.PI;
//     };
//     Object.defineProperty(circle, 'square', {
//       get: function () {
//         return this.calcSq();
//       },
//       enumerable: true,
//     });
//     return circle;
//   }
  
//   function Square(name, side) {
//     const shape = new Shape(Shapes.square, name);
//     for (const key in shape) {
//       this[key] = shape[key];
//     }
//     this.side = side;
//     this.calcSq = function () {
//       return this.side ** 2;
//     };
//     Object.defineProperty(this, 'square', {
//       get: () => {
//         return this.calcSq();
//       },
//       enumerable: true,
//     });
//   }
  
//   const showShape = (shape) => {
//     console.log('--------------------');
//     console.log('showShape -> name', shape.name);
//     console.log('showShape -> type', shape.type);
//     console.log('showShape -> square', shape.square);
//     switch (shape.type) {
//       case Shapes.circle:
//         console.log('showShape -> diameter', shape.d);
//         break;
//       case Shapes.square:
//         console.log('showShape -> side', shape.side);
//         break;
  
//       default:
//         break;
//     }
//   };
  
//   showShape(new Сircle('one', 3));
//   showShape(new Square('two', 3));