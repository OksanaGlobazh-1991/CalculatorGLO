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

// class First {
//   hello(){
//     console.log('Привет я метод родителя!');
//   }
// };

// class Second extends First {
//   hello(){
//     super.hello();
//     console.log('А я наследуемый метод!');
//   }
  
// };

// let second = new Second();
// console.log(second.hello());

const myLesson = [
  {lesson: 1, type: 'basic', points: 2},
  {lesson: 2, type: 'additional', points: 4},
  {lesson: 3, type: 'basic', points: 6},
  {lesson: 4, type: 'additional', points: 3},
  {lesson: 5, type: 'basic', points: 4},
  {lesson: 6, type: 'basic', points: 2},
  {lesson: 7, type: 'additional', points: 2},
  {lesson: 8, type: 'basic', points: 6},
  {lesson: 9, type: 'basic', points: 4},
  {lesson: 10, type: 'basic', points: 6},
  {lesson: 11, type: 'additional', points: 5}, 
  {lesson: 12, type: 'basic', points: 2}, 
  {lesson: 13, type: 'additional', points: 2}, 
  {lesson: 14, type: 'basic', points: 4},
  {lesson: 15, type: 'additional', points: 1},
  {lesson: 16, type: 'additional', points: 7},
];

for (let i = 0; i < myLesson.length; i++) {
  if (myLesson[i].type === 'basic') {
    myLesson[i].points /= 2;
  } else {
    myLesson.splice(i, 1);
    i--;
  }
}

console.log(myLesson);