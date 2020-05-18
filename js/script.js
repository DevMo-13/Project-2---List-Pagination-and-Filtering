/******************************************
Treehouse Techdegree:
FSJS project 2 - List Filter and Pagination
--aiming for meets expectations--
******************************************/

const studentListItems = document.querySelectorAll('.student-item');
const itemsPerPage = 10;

/** 
   `showPage` function loops through studentListItems
   and hides all of the items in the list except for the 
   10 to be shown on each given page.
   @param {array} list - The list of students being passed into the function
   @param {number} page - The page number being passed in
**/

function showPage(list, page) {
   const startIndex = (page * itemsPerPage) - itemsPerPage;
   const endIndex = page * itemsPerPage;
   for (let i = 0; i < list.length; i++) {
      if (i >= startIndex && i < endIndex) {
         list[i].style.display = 'block';
      } else {
         list[i].style.display = 'none';
      };
   };
};

/**
   `appendPageLinks` function generates, appends, 
   and adds functionality to the pagination buttons.
   @param {array} list - The list of students being passed into the function
**/

function appendPageLinks(list) {
   //a new div is created and appended to the existing
   //pageDiv and given a class name 'pagination'
   const pageDiv = document.getElementsByClassName('page')[0];
   const paginationDiv = document.createElement('div');
   paginationDiv.className = 'pagination';
   pageDiv.appendChild(paginationDiv);
  
   //an unordered list is created and appended to the new paginationDiv
   const paginationUl = document.createElement('ul')
   paginationDiv.appendChild(paginationUl);
   
   const numberofPages = Math.ceil(list.length / itemsPerPage);
   for (let i = 0; i < numberofPages; i++) {
      //for each page needed, a new list item is created and appended to the paginationUl
      let paginationLi = document.createElement('li');
      paginationUl.appendChild(paginationLi);
      
      //for each paginationLi created, a new anchor tag is created and nested under the li, 
      //given an href attribute, and assigned text that displays the corresponding page number
      let paginationA = document.createElement('a');
      paginationA.setAttribute('href', '#');
      paginationA.textContent = `${i+1}`;
      paginationLi.appendChild(paginationA);
      
      //the first paginationA is assigned the class name 'active'
      if (i === 0) {
         paginationA.className = "active";
      };   
      
      //each paginationA is assigned an event listener that
      // -removes the class 'active' from the buttons that were not clicked
      // -adds the 'active' class to the button that was clicked
      // -calls the showPage function to only display certain students
      paginationA.addEventListener('click', (e) => {
         let paginationButtons = document.getElementsByTagName('a');
         for (let i = 0; i < paginationButtons.length; i++) {
            paginationButtons[i].classList.remove('active');
         };
         e.target.className = 'active';
         showPage(studentListItems, parseInt(e.target.textContent));         
      });
   };
};
showPage(studentListItems, 1);
appendPageLinks(studentListItems);