// Define Vars
const subContent = document.querySelector('#sub_content');
const displayContent = document.querySelector('.display_content');
const footer = document.querySelector('.footer');


// modals
const modals = document.querySelector('.modals');
const modalBtn1 = document.querySelector('#modal_btn1');
const modalBtn2 = document.querySelector('#modal_btn2');
const modalCloseBtn1 = document.querySelector('#close_btn1');
const modalCloseBtn2 = document.querySelector('#close_btn2');

// theme 
const checkBox = document.querySelector('#checkbox');

// search box input
const searchBox = document.querySelector('#search_box');
const searchIcon = document.querySelector('#search_icon');
const searchBoxBtn = document.querySelector(".search_box_btn");

// books 
const bookFiction = document.querySelector('#fiction_book');
const bookNonfiction = document.querySelector('#nonfiction_book');

// fiction list
const fictionList = document.querySelector('#fiction_list');

// lists
let lists = document.querySelectorAll('.list_item');





// Load all event listeners
loadEventListeners();

// Load Event Listeners
function loadEventListeners() {

    // Load DOM Contents



    // Modal button 1  event
    modalBtn1.addEventListener('click', openModal1);

    // Modal button 1  event
    modalBtn2.addEventListener('click', openModal2);

    // Modal close button 1 event
    modalCloseBtn1.addEventListener('click', closeModal1);

    // Modal close button 1 event
    modalCloseBtn2.addEventListener('click', closeModal2);

    // Search input  event
    searchBox.addEventListener('keydown', searchInput);


}


// modal button 1
function openModal1() {
    bookFiction.style.display = 'block';
    subContent.classList.add('active');
    displayContent.classList.add('active');
    footer.classList.add('active');
    modals.style.display = 'none';
}

// modal button 2
function openModal2() {
    bookNonfiction.style.display = 'block';
    subContent.classList.add('active');
    displayContent.classList.add('active');
    footer.classList.add('active');
    modals.style.display = 'none';

}


// close madal button 1
function closeModal1() {
    bookFiction.style.display = 'none';
    modals.style.display = '';
    subContent.classList.remove('active');
    displayContent.classList.remove('active');
    footer.classList.remove('active');

}


// close madal button 1
function closeModal2() {
    bookNonfiction.style.display = 'none';
    modals.style.display = '';
    subContent.classList.remove('active');
    displayContent.classList.remove('active');
    footer.classList.remove('active');
}


// search box btn
searchBoxBtn.addEventListener('mousedown', function(e) {
    if (e.target.className === 'fa fa-times') {
        window.location.reload();
    }
});




// Search input
function searchInput() {

    // Change button of search icon
    searchIcon.innerHTML = '<i class = "fa fa-times"></i>';

}
