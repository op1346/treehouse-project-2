/******************************************
Treehouse Techdegree:
FSJS project 2 - List Filter and Pagination
******************************************/

//Global Variables 
//store student list item elements in the student list. Log out the variable storing the list to ensure it equals the list of li items and not the container of the li elements.
const studentListItems = document.querySelectorAll('.student-item'); 
//store the number of items to show on each page which is 10
const num_items = 10; 


//showPage Function 
function showPage (list, page) {
  const start_index = (page * num_items) - num_items;  
  const end_index = (page * num_items) - 1; 

  //loop over the list parameter - list any item with an index that is greater than or equal to the start_index variable AND less than the end_index variable
  for (let i = 0; i < list.length; i++) {
    //if statement i is greater than start and less than end 
    if (i >= start_index && i <= end_index) {
      //list at i display 
      list[i].style.display = '';
    //else do not display  
    } else {
      list[i].style.display = 'none'; 
    }
  }
}


//appendPageLinks function 
//creates and appends functioning pagination links 
function appendPageLinks (list) {
  //number of pages needed 
  const numPages = Math.ceil(list.length / num_items); 
  const div = document.createElement('div'); 
  const ul = document.createElement('ul'); 
  const page = document.querySelector('.page'); 
  //div to add "pagination" class and append it to .page div 
  div.className = 'pagination'; 
  page.appendChild(div); 
  //add ul to "pagination" div to store the pagination links 
  div.appendChild(ul);

  //for loop - for every page add li and a tag
  for (let i = 1; i < numPages; i++) {
    const li = document.createElement('li'); 
    const links = document.createElement('a');
    links.href = '#';
    links.innerHTML = `${i}`; 
    li.appendChild(links);
    ul.appendChild(li); 
  }

  //add event listener to each a tag - when clicked call the showPage function to display the appropriate page
  ul.firstChild.firstChild.className = 'active';
  const pageLinks = ul.querySelectorAll('a');
  for (let i = 0; i < pageLinks.length; i++) {
    pageLinks[i].addEventListener('click', (e) => {
      for (let i = 0; i < pageLinks.length; i++) {
        pageLinks[i].className = '';
      }
      
      const clicked = e.target;
      if (clicked) {
        clicked.className = 'active';
        showPage(list, clicked.textContent);
      }
    });
  }
}


//function calls 
showPage(studentListItems, 1); 
appendPageLinks(studentListItems); 