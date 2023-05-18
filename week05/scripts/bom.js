const input = document.querySelector("#favchap");
const button = document.querySelector("button");
const list = document.querySelector(".list");


button.addEventListener("click", function() 
{
  //check if input is blank
  if (input.value != '' ) {
      //create li element with the value 
      let li = document.createElement('li');
      li.textContent = input.value;

      // create delete button
      let deletebutton = document.createElement  ('button');
      deletebutton.textContent = '❌';

      // append the delete button to the element
      li.append(deletebutton);
      list.append(li);
      
      // when the delete button is clicked
      deletebutton.addEventListener('click', function ()
      {
          // remove the value from the page
          list.removeChild(li);
          input.focus;
      });
      //set the input box to blank
      input.value = '';
      //put the focus in the input box
      input.focus;
  }
});