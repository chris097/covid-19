/*let clickBtn = document.querySelector('.button-1');
let removeBurgerBar = document.querySelector('.remove-burger-bar');
clickBtn.addEventListener('click', function(){
    let readMore = document.querySelector('.covid-read-more');
    let clearFix = document.querySelector('.clear-fix')
    readMore.style.display = 'block'
    clearFix.style.display = 'block'
})

removeBurgerBar.addEventListener('click', function(){
    let readMore = document.querySelector('.covid-read-more');
    let clearFix = document.querySelector('.clear-fix')
    readMore.style.display = 'none'
    clearFix.style.display = 'none'
})

*/

/*
  Rules: 
  1. Keep your code dry
*/
    // 1. UIController gonna be our helper
   function UIController(className, value){
       let UI = document.querySelector(className);
       if(value){
         UI.style.display = value;
       }
       return UI;
     };

// 2. store classes && values in our object
function createUIClass(){
    return {
      getClass : function(){
        return{
            none: 'none',
            block: 'block',
            btnClick: 'click',
            button1: '.button-1',
            button2: '.button-2',
            button3: '.button-3',
            button4: '.button-4',
            covidReadMore: '.covid-read-more',
            removeBurgerBar: '.remove-burger-bar',
            clearFix: '.clear-fix',
            hamburgerMenu: '.hamburger-menu',
            burgerMenuOpen: '.burger-menu-open',
            burgerMenuClose: '.burger-menu-close'
        }
      }
    }
  };


  function eventController (UIClass){
    // 3-1. global variables
    let inputClass, inputBtn;
     inputClass = UIClass();
     inputBtn = inputClass.getClass();
    // 3-2. display event click function
    // display click on login button eventListener
    let clickLoginBtn = () =>{
        // display covid full message function
        setTimeout(() => {
          UIController(inputBtn.covidReadMore, inputBtn.block); 
        }, 200);
          UIController(inputBtn.clearFix, inputBtn.block); 
    };
    // remove covid read more content function
    let readMoreContent = () =>{
        // display covid full message
        setTimeout(() => {
          UIController(inputBtn.covidReadMore, inputBtn.none); 
        }, 200);
          UIController(inputBtn.clearFix, inputBtn.none); 
    };
    //burger menu function
    //1. menu close
    let displayMenuClose =() =>{
        UIController(inputBtn.burgerMenuOpen, inputBtn.block);
        UIController(inputBtn.burgerMenuClose, inputBtn.none);
        UIController(inputBtn.hamburgerMenu, inputBtn.none);
    }
    //2. menu open
    let displayMenuOpen =() =>{
        UIController(inputBtn.burgerMenuClose, inputBtn.block);
        UIController(inputBtn.burgerMenuOpen, inputBtn.none);
        UIController(inputBtn.hamburgerMenu, inputBtn.block);
    }
    // event click
    //button click
    UIController(inputBtn.button1).addEventListener(inputBtn.btnClick, clickLoginBtn, false);
    UIController(inputBtn.button2).addEventListener(inputBtn.btnClick, clickLoginBtn, false);
    UIController(inputBtn.button3).addEventListener(inputBtn.btnClick, clickLoginBtn, false);
    UIController(inputBtn.button4).addEventListener(inputBtn.btnClick, clickLoginBtn, false);
    // remove bar 'X'
    UIController(inputBtn.removeBurgerBar).addEventListener(inputBtn.btnClick, readMoreContent, false );
    // burger menu
    UIController(inputBtn.burgerMenuClose).addEventListener(inputBtn.btnClick, displayMenuClose, false);
    UIController(inputBtn.burgerMenuOpen).addEventListener(inputBtn.btnClick, displayMenuOpen, false);
}
eventController(createUIClass)
