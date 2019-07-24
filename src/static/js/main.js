// переключение языка
let toggleLanguage = () => {
  let title = document.getElementsByClassName('language__title');
  let block = document.getElementsByClassName('language__block');
  let dropdown = document.getElementsByClassName('language__list');

  for(let i = 0;i<title.length;i++) {
    let item = dropdown[i].getElementsByClassName('language__item');

    let displayFunction = () => {
      if(dropdown[i].style.display == 'block') {
        block[i].classList.remove('language__block--opened');
        title[i].style.display = 'block';
        dropdown[i].style.display = 'none';
      } else {
        dropdown[i].style.display = 'block';
        title[i].style.display = 'none';
        block[i].classList.add('language__block--opened');
      }
    }
    let changeTitle = (k) => {
      block[i].classList.remove('language__block--opened');
      title[i].style.display = 'block';
      title[i].innerHTML = item[k].innerHTML;
      dropdown[i].style.display = 'none';
    }
    for(let j = 0;j<item.length;j++) {
      item[j].onclick = () => {
        changeTitle(j);
      }
    }
    title[i].onclick = () => {
      displayFunction();
    }
  }
}
toggleLanguage();

// Показать блок меню в мобильной версии
let showDropdown = () => {
  let show = document.getElementsByClassName('header__dropdown');
  let close = document.getElementsByClassName('header__close');
  let block = document.getElementsByClassName('header__mobile');
  let body = document.getElementsByTagName('body')[0];
 
    show[0].onclick = () => {
      block[0].style.display = 'block';
      body.classList.add('body--fixed');
    }
    close[0].onclick = () => {
      block[0].style.display = 'none';
      body.classList.remove('body--fixed');
    }
}
showDropdown();

// Показать блок задать вопрос
let showSending = () => {
  let show = document.getElementsByClassName('learn-more-button');
  let close = document.getElementsByClassName('question-more__close');
  let block = document.getElementsByClassName('question-more')[0];
  let send = document.getElementsByClassName('question-more__button');
  let body = document.getElementsByTagName('body')[0];
  let container= document.getElementsByClassName('question-more__container')[0];
 
  for(let i = 0;i<show.length;i++) {
    show[i].onclick = () => {
      block.style.display = 'flex';
      body.classList.add('body--fixed');
    }
    let closeFunction = () => {
      block.style.display = 'none';
      body.classList.remove('body--fixed');
    }
    close[0].onclick = () => {
      closeFunction();
    }
    document.onkeydown = (e) => {
      if (e.keyCode === 27) {
        closeFunction();
      }
    }
    block.onclick = () => {
      container.onclick = (e) => {
        e.stopPropagation();
      }
      closeFunction();
    }
  }
}
showSending();

// Показать блок отправить резюме
let showResume = () => {
  let show = document.getElementsByClassName('send-resume-button');
  let close = document.getElementsByClassName('send-resume__close');
  let block = document.getElementsByClassName('send-resume')[0];
  let send = document.getElementsByClassName('send-resume__button');
  let body = document.getElementsByTagName('body')[0];
  let container= document.getElementsByClassName('send-resume__container')[0];
  

  for(let i = 0;i<show.length;i++) {
    show[i].onclick = () => {
      block.style.display = 'flex';
      body.classList.add('body--fixed');
    }
    let closeFunction = () => {
      block.style.display = 'none';
      body.classList.remove('body--fixed');
    }
    close[0].onclick = () => {
      closeFunction();
    }
    document.onkeydown = (e) => {
      if (e.keyCode === 27) {
        closeFunction();
      }
    }
    block.onclick = () => {
      container.onclick = (e) => {
        e.stopPropagation();
      }
      closeFunction();
    }
  }
}
showResume();

// В блоке резюме взаимодействие блоков с selectами
let toggleSection = () => {
  let title = document.getElementsByClassName('send-resume__select');
  let dropdown = document.getElementsByClassName('send-resume__select-title');
  let select = document.getElementsByClassName('send-resume__form')[0].getElementsByTagName('select');

  for(let i = 0;i<title.length;i++) {
    let block = title[i].getElementsByClassName('send-resume__option-block');
    let option = select[i].getElementsByTagName('option');
    let newOption = block[0].getElementsByClassName('send-resume__option');

    dropdown[i].textContent = option[0].textContent;
    for(let j = 0;j<option.length;j++) {
      let create = document.createElement('div');
      create.className = 'send-resume__option';
      create.textContent = option[j].textContent;
      block[0].appendChild(create);
    }
    for(let j = 0;j<option.length;j++) {
      newOption[j].onclick = () => { 
        block[0].style.display = 'none';
        title[i].classList.remove('send-resume__select--opened');
        title[i].classList.add('send-resume__select--closed');
        dropdown[i].textContent = newOption[j].textContent;
        select[i].value = [j+1];
      }
    }
    dropdown[i].onclick = () => {
      if(block[0].style.display == 'block') {
        block[0].style.display = 'none';
        title[i].classList.remove('send-resume__select--opened');
        title[i].classList.add('send-resume__select--closed');
      } else {
        block[0].style.display = 'block';
        title[i].classList.add('send-resume__select--opened');
        title[i].classList.remove('send-resume__select--closed');
      }
    }
  }
}
toggleSection();


//Фильтр в вакансиях и контактах
let toggleFilter = () => {
  let title = document.getElementsByClassName('filter__first');
  let droptitle = document.getElementsByClassName('filter__droptitle');
  let block = document.getElementsByClassName('filter__block');
  let dropdown = document.getElementsByClassName('filter__list');

  for(let i = 0;i<title.length;i++) {
    let item = dropdown[i].getElementsByClassName('filter__item');
    let arrow = block[i].getElementsByTagName('i');

    let displayFunction = () => {
      if(dropdown[i].style.display == 'block') {
        block[i].classList.remove('filter__block--opened');
        title[i].style.display = 'block';
        droptitle[i].style.display = 'none';
        dropdown[i].style.display = 'none';
      } else {
        dropdown[i].style.display = 'block';
        title[i].style.display = 'none';
        droptitle[i].style.display = 'block';
        block[i].classList.add('filter__block--opened');
      }
    }
    let changeTitle = (k) => {
      block[i].classList.remove('filter__block--opened');
      title[i].style.display = 'block';
      title[i].innerHTML = item[k].innerHTML;
      title[i].classList.remove(title[i].classList[1]);
      title[i].classList.add(item[k].classList[1]);
      droptitle[i].style.display = 'none';
      dropdown[i].style.display = 'none';
    }

    let changeMarkerPosition = () => {
      let map = document.getElementsByClassName('map');
      let marker = document.getElementsByClassName('map__marker');
      let markerSmall = document.getElementsByClassName('map__marker--small');
      let title = document.getElementsByClassName('filter__first');
      let droptitle = document.getElementsByClassName('filter__droptitle');
      let block = document.getElementsByClassName('filter__block');
      let dropdown = document.getElementsByClassName('filter__list');
      let contact = document.getElementsByClassName('contact');

      function Place(city,vacancy,address,department,top,left) {
        this.city = city;
        this.vacancy = vacancy;
        this.address = address;
        this.department = department;
        this.top = top;
        this.left = left;
      }
      function Restaurant(city,address,top,left) {
        this.city = city;
        this.address = address;
        this.top = top;
        this.left = left;
      }
      let place1 = new Place('almaty','coordinator','medeu','legal');
      let place2 = new Place('almaty','coordinator','medeu','abstract');
      let place3 = new Place('almaty','coordinator','medeu','dematerialize');
      let place4 = new Place('almaty','coordinator','almaly','legal');
      let place5 = new Place('almaty','coordinator','almaly','abstract');
      let place6 = new Place('almaty','coordinator','almaly','dematerialize');
      let places = [place1,place2,place3,place4,place5,place6];

      let restaurant1 = new Restaurant('almaty','some');
      let restaurant2 = new Restaurant('almaty','some');
      let restaurant3 = new Restaurant('almaty','some');
      let restaurant4 = new Restaurant('almaty','some');
      let restaurant5 = new Restaurant('almaty','some');
      let restaurant6 = new Restaurant('almaty','some');
      let restaurant7 = new Restaurant('almaty','not-all');
      let restaurant8 = new Restaurant('almaty','not-all');
      let restaurant9 = new Restaurant('almaty','not-all');
      let restaurant10 = new Restaurant('almaty','not-all');
      let restaurant11 = new Restaurant('almaty','not-all');
      let restaurant12 = new Restaurant('almaty','not-all');
      let restaurants = [restaurant1,restaurant2,restaurant3,restaurant4,restaurant5,restaurant6,restaurant7,restaurant8,restaurant9,restaurant10,restaurant11,restaurant12];
      let changeSomething = (some) => {
        let x = 0;
        for(let i = 0;i < some.length;i++) {
        let z = 0;
        for(let j = 0;j < title.length;j++) {
          let k = 0;
          for (name in some[i]) {
            if ((title[j].classList[1] == 'filter--'+some[i][name])||(title[j].classList[1] == item[0].classList[1])) {
              k++;
            }
          }
          if (k > 0) {
            z++;
          }
        }
        if (z > title.length-1) {
          x++;
          marker[i].style.display='block';
          if (contact.length>0) {
            contact[i].style.display='block';
          }
          markerSmall[i].style.display='block';
        } else {
          marker[i].style.display='none';
          if (contact.length>0) {
            contact[i].style.display='none';
            markerSmall[i].style.display='none';
          }
        }
      }
      if (title.length > 2){
        let span = document.getElementsByClassName('vacancy-about__title')[0].getElementsByTagName('span')[0];
        if ((x%10 == 1) ) {
          span.innerText = `${x} Вакансия ${title[1].innerText}а`;
        } else if (x%10 >1 && x%10 <5) {
          span.innerText = `${x} Вакансии ${title[1].innerText}а`;
        } else {
          span.innerText = `${x} Вакансий ${title[1].innerText}а`;
        }} else {
          x += restaurants.length/2;
          let spanSecond = document.getElementsByClassName('contacts-places__title')[0].getElementsByTagName('span')[0];
          if ((x%10 == 1) && (x<10 || x>20)) {
            spanSecond.innerText = `${x} Филиал`;
          } else if (x%10 >1 && x%10 <5 && (x<10 || x>20)) {
            spanSecond.innerText = `${x} Филиала`;
          } else {
            spanSecond.innerText = `${x} Филиалов`;
          }
        }
    }
    changeSomething (restaurants);
    changeSomething (places);
    }
    changeMarkerPosition();
    for(let j = 0;j<item.length;j++) {
      item[j].onclick = () => {
        changeTitle(j);
        changeMarkerPosition();
      }
    }
    title[i].onclick = () => {
      displayFunction();
    }
    droptitle[i].onclick = () => {
      displayFunction();
    }
  }
}
toggleFilter();

// На главной странице список в секции "Твой Карьерный Рост"
let showCareer = () => {
  let title = document.getElementsByClassName('career__title');
  let section = document.getElementsByClassName('career__section');
  let round = document.getElementsByClassName("career__round");
  let line = document.getElementsByClassName("career__line");
  let smallRound = document.getElementsByClassName("career__small-round");
  let mainTitle = document.getElementsByClassName("career__main-title");
  let leftArrow = document.getElementsByClassName("career__left-arrow");
  let rightArrow = document.getElementsByClassName("career__right-arrow");
  let counter = 0;

  for(let i = 0;i < title.length;i++) {
    let displayFunction = (c) => {
      for(let j = 0;j < title.length;j++) {
        if (j === c) {
          section[j].style.display = 'flex'; 
          title[j].style.fontWeight = "900";
          mainTitle[0].innerHTML = title[j].innerHTML;
          counter = j;
          for (let k = 0; k <= j;k++) {
            line[k].style.backgroundColor='#f7a800';
            round[k].style.backgroundColor='#f7a800';
            smallRound[k].style.display = "none";
          }
          for (let k = title.length-1; k> j; k--) {
            line[k].style.backgroundColor='white';
            round[k].style.backgroundColor='white';
            smallRound[k].style.display = "block";
          }
        } else {
          section[j].style.display = 'none';
          title[j].style.fontWeight = "700";
        }
      }
    }
    title[i].onclick =() => {
      displayFunction(i);
    }
    round[i].onclick =() => {
      displayFunction(i);
    }
    leftArrow[0].onclick =() => {
      if (counter>0) {
      displayFunction(counter-1);
      }
    }
    rightArrow[0].onclick =() => {
      if (counter<title.length-1) {
      displayFunction(counter+1);
      }
    }
  }
}
showCareer();

// На главной странице список в секции "Актуальные Вакансии"
let showVacancy = () => {
  let title = document.getElementsByClassName('vacancy__label');
  let section = document.getElementsByClassName('vacancy__section');
  let text = document.getElementsByClassName('vacancy__text');
  let paragraph = document.getElementsByClassName('vacancy__paragraph');
  

  for(let i = 0;i < title.length;i++) {
    title[i].onclick = () => {
      for(let j = 0;j < title.length;j++) {
        if (j === i) {
          section[j].style.display = 'flex'; 
        } else {
          section[j].style.display = 'none';
        }
      }
    }
    text[i].onclick = () => {
      if(paragraph[i].style.display == 'block') {
        paragraph[i].style.display = 'none';
        text[i].classList.remove('vacancy__text--opened');
        text[i].classList.add('vacancy__text--closed');
      } else {
        paragraph[i].style.display = 'block';
        text[i].classList.add('vacancy__text--opened');
        text[i].classList.remove('vacancy__text--closed');
      }
    }
  }
}
showVacancy();

// На странице FAQ выпадающие списки
let toggleFaq = () => {
  let question = document.getElementsByClassName('question');
  let title = document.getElementsByClassName('question__question');
  let answer = document.getElementsByClassName('question__answer');

  for(let i = 0;i<question.length;i++) {
    question[i].onclick = () => {
      if(answer[i].style.display == 'block') {
        answer[i].style.display = 'none';
        title[i].classList.remove('question__question--opened');
        title[i].classList.add('question__question--closed');
      } else {
        answer[i].style.display = 'block';
        title[i].classList.add('question__question--opened');
        title[i].classList.remove('question__question--closed');
      }
    }
  }
}
toggleFaq();
let toggleCare = () => {
  let history = document.getElementsByClassName('main__button');
  let block = document.getElementsByClassName('care-block');
  let dropdown = document.getElementsByClassName('care-block__main');

  for(let i = 0;i<history.length;i++) {
    history[i].onclick = () => {
      if(block[i].classList.contains('care-block--opened')) {
        block[i].classList.remove('care-block--opened');
      } else {
        block[i].classList.add('care-block--opened');
      }
    }
  }
  if(window.screen.width < 765) {
    for(let i = 0;i<history.length;i++) {
      let drop = document.getElementsByClassName('care-block')[i].getElementsByTagName('i')[0];
      dropdown[i].onclick = () => {
        if(block[i].classList.contains('care-block--opened')) {
          block[i].classList.remove('care-block--opened');
          drop.style.transform = 'rotate(0deg)';
        } else {
          block[i].classList.add('care-block--opened');
          drop.style.transform = 'rotate(180deg)';
        }
      }
    }
  }
}
toggleCare();

// Выпадание карты в мобильной версии
let toggleMap = () => {
  let show = document.getElementsByClassName('map-show');
  let map = document.getElementsByClassName('map--small');

  for(let i = 0;i<show.length;i++) {
    show[i].onclick = () => {
      if(map[i].style.display == 'block') {
        map[i].style.display = 'none';
      } else {
        map[i].style.display = 'block';
      }
    }
  }
  document.getElementsByClassName('show-all')[0].style.display='none';
}
toggleMap();

// На странице контакты кнопка 'Показать все'
let toggleAddress = () => {
  let show = document.getElementsByClassName('show-all');
  let address = document.getElementsByClassName('contact');
    if (screen.width < 765){
    for(let i = 4;i<address.length;i++){
      address[i].style.display = 'none';
    }
    for(let i = 1;i<2;i++){  
      show[0].onclick = () => {
        if(address[4].style.display == 'block') {
          for(let i = 4;i<address.length;i++){
          address[i].style.display = 'none';
          show.innerHTML = 'Показать все';
          }
        } else {
          for(let i = 4;i<address.length;i++){
            address[i].style.display = 'block';
            show.innerHTML = 'Свернуть';
            }
        }
      }
    }
  }
}
toggleAddress();

