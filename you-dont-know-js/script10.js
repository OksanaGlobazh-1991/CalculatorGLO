const books = document.querySelector('.books');
      bookAll = document.querySelectorAll('.book');

      books.prepend(bookAll[2]);
      books.prepend(bookAll[5]);
      books.prepend(bookAll[3]);
      books.prepend(bookAll[4]);
      books.prepend(bookAll[0]);
      books.prepend(bookAll[1]);

const imageBody = document.body;
      imageBody.style.backgroundImage = 'url(./image/you-dont-know-js.jpg)';

const advertising = document.querySelector('.adv');
advertising.remove();

const chapter3 = document.getElementsByTagName('a')[2];
      chapter3.textContent = 'Книга 3. this и Прототипы Объектов';

const chapter2 = document.getElementsByTagName('ul')[1];
      chapter2LI = chapter2.querySelectorAll('li')

      chapter2.append(chapter2LI[3]);
      chapter2.append(chapter2LI[6]);
      chapter2.append(chapter2LI[8]);
      chapter2.append(chapter2LI[4]);
      chapter2.append(chapter2LI[5]);
      chapter2.append(chapter2LI[7]);
      chapter2.append(chapter2LI[9]);
      chapter2.append(chapter2LI[2]);
      chapter2.append(chapter2LI[10]);

const chapter5 = document.getElementsByTagName('ul')[4];
      chapter5LI = chapter5.querySelectorAll('li')

      chapter5.append(chapter5LI[9]);
      chapter5.append(chapter5LI[3]);
      chapter5.append(chapter5LI[4]);
      chapter5.append(chapter5LI[2]);
      chapter5.append(chapter5LI[6]);
      chapter5.append(chapter5LI[7]);
      chapter5.append(chapter5LI[5]);
      chapter5.append(chapter5LI[8]);
      chapter5.append(chapter5LI[10]);

const chapter6 = document.getElementsByTagName('ul')[5];
      chapter6LI = chapter6.querySelectorAll('li')
      chapter6.insertAdjacentHTML('beforeend', '<li>Глава 8: За пределами ES6</li>');
      chapter6.append(chapter6LI[9]);


  