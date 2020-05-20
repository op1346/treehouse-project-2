/******************************************
Treehouse Techdegree:
FSJS project 2 - List Filter and Pagination
******************************************/

//Global Variables 
//store student list item elements in the student list. Log out the variable storing the list to ensure it equals the list of li items and not the container of the li elements.
const student_list_items = document.querySelector("student-item"); 
//store the number of items to show on each page which is 10
const num_items = 10; 


//showPage Function 
function showPage (list, page) {
  const start_index = (page * num_items) - num_items;  
  const end_index = (page * num_items) - 1; 

  //loop over the list parameter - list any item with an index that is greater than or equal to the start_index variable AND less than the end_index variable
  for (var i = 0; i < list.length; i++) {
    //if statement i is greater than start and less than end 
    if (i >= start_index && i <= end_index) {
      //list at i display 
      list[i].style.display = "";
    //else do not display  
    } else {
      list[i].style.display = "none"; 
    }
  }
}


//appendPageLinks function 
//creates and appends functioning pagination links 
function appendPageLinks (list) {
  //number of pages needed 
  const numPages = Math.ceil(list.length/num_items); 
  //div to add "pagination" class and append it to .page div 
  const div = document.createElement('div'); 
  const page = document.querySelector('.page'); 
  div.className = "pagination"; 
  page.appendChild(div); 
  //add ul to "pagination" div to store the pagination links 
  div.appendChild(ul)

  //for loop - for every page add li and a tag (also add event listener to each a tag - when clicked call the showPage function to display the appropriate page) 
  for (var i = 0; i < numPages; i++) {
    let li = document.createElement('li'); 
    let aTag = document.createElement('a');
  }


  //for loop to remove active class from all links 
  for () {

  }
  
  //add active class to the link that was just clicked - use event.target 


  //create and append DOM elements for the pagination links 
  //use lines 119-137 in the examples/example-meets.html
  //pay close attention to how elements are nested, any necessary class names or other element attributes, and where your additions should be appended

  //end up with a container DIV element with a class name of pagination and appended to the div element with the class name of page 
  //nested UL element containinig one LI element for every ten studnets in the list 
  

  //each LI element should contain an A element with an href attribute of #, and text set to the page number each link will show. First link is 1 Second link is 2 and so on
  //PROTIP loop index can be helpful in setting the text of the pagination links 
}