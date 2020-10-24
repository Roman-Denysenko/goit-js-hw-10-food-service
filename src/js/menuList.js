import menuList from '../template/menu.hbs';
import menu from '../menu.json';


const menuCards = menuList(menu);

const menuListEl = document.querySelector(`.js-menu`);
const inputToggleEl = document.querySelector(`#theme-switch-toggle`);

menuListEl.insertAdjacentHTML(`afterbegin`, menuCards);

inputToggleEl.addEventListener(`change`, onChangeTheme);

const localStorageValueTheme = localStorage.getItem(`Theme`);


checkLocalStorage();

function addDarkTeme () {
    document.body.classList.remove(`light-theme`);
        document.body.classList.add(`dark-theme`);
};

function addLightTeme() {
    document.body.classList.remove(`dark-theme`);
    document.body.classList.add(`light-theme`);
};

function onChangeTheme() { 
    if ( inputToggleEl.checked ) {
        
        addDarkTeme ();
        localStorage.setItem(`Theme`,`dark`)
    }
    
    else {
        addLightTeme();
        localStorage.setItem(`Theme`,`light`)
    }
};

function checkLocalStorage() {
    if (localStorageValueTheme === `dark`) {
        inputToggleEl.checked = true;
        addDarkTeme();
    }
    else {
         inputToggleEl.checked = false;
        addLightTeme();
    }
    
};
