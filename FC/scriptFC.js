function DomElement(selector, height, width, bg, fontSize){
  this.selector = selector;
  this.height = height;
  this.width = width;
  this.bg = bg;
  this.fontSize = fontSize;
};

DomElement.prototype.getElement = function(){
  let div = 'selector';
  if(div[0] === '.') {
    let div = document.createElement('div');
    div.className = 'selector';
  } else if(div[0] === '#') {
    let p = document.createElement('p');
    p.setAttribute = ('id', 'selector');
  }
};

document.body.style.cssText = height;
document.body.style.cssText = width;
document.body.style.cssText = bg;
document.body.style.cssText = fontSize;

let home1 = new DomElement ('.doors', '20px', '30px', 'red', '15px');
home1.getElement();
console.log(home1);
