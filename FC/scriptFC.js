// function DomElement(selector, height, width, bg, fontSize){
//   this.selector = selector;
//   this.height = height;
//   this.width = width;
//   this.bg = bg;
//   this.fontSize = fontSize;
//   this.getElement = function(){
//     if(this.selector[0] === '.') {
//       let div1 = document.createElement('div');
//       div1.className = 'selector';
//       div1.style.cssText = `height: ${height}px; width: ${width}px; background: ${bg}; font-size: ${fontSize}px`;
//       div1.textContent = 'есть надежда';
//       document.body.append(div1);
  
//     } else if(this.selector[0] === '#') {
//       let div1 = document.createElement('p');
//       div1.setAttribute = ('id', 'selector');
//       document.body.append(div1);
//       div1.style.cssText = `height: ${height}px; width: ${width}px; background: ${bg}; font-size: ${fontSize}px`;
//       div1.textContent = 'есть надежда'; 
//       };
//   };
// }

// const home = new DomElement ('.doors', '100', '100', 'red', '15');
// home.getElement();

class First {
  hello(){
    console.log('Привет я метод родителя!');
  }
};

class Second extends First {
  hello(){
    super.hello();
    console.log('А я наследуемый метод!');
  }
  
};

let second = new Second();
console.log(second.hello());