function DomElement(selector, height, width, bg, fontSize){
  this.selector = selector;
  this.height = height;
  this.width = width;
  this.bg = bg;
  this.fontSize = fontSize;
};

DomElement.prototype.getElement = function(){
  if(this.selector[0] === '.') {
    let div1 = document.createElement('div');
    div1.className = 'selector';
    div1.style.cssText = `height: 50px; width: 100px; background: red; font-size: 20px`;
    div1.textContent = 'есть надежда';
    document.body.append(div1);

  } else if(this.selector[0] === '#') {
    let div1 = document.createElement('p');
    div1.setAttribute = ('id', 'selector');
    document.body.append(div1);
    div1.style.cssText = `height: 50px; width: 100px; background: red; font-size: 20px`;
    div1.textContent = 'есть надежда';

  };
  
};



let home1 = new DomElement ('.doors', '50px', '100px', 'red', '20px');

home1.getElement();

console.log(home1);