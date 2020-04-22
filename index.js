'use strict';

//use DOM to add/remove HTMl els and styles
//linking to external JQuery and local JS 
//link app JS from
//use this &event delegation

//U enters items to purchase by entering txt and hitting return/clicking button
//check/uncheck items on list by clicking 'check' button
//permanently remove items from list (.on('click') boi, maybe)

//enter items in form '#js-shopping-list-form'
//use key or by mouse click

function addItem() {
  $('#js-shopping-list-form').submit(event => {
    event.preventDefault();
    const itemToAdd = $(event.currentTarget).find('#shopping-list-entry').val();
//    console.log(itemToAdd);
    $('.shopping-list').append(
      `<li>
      <span class="shopping-item">` + itemToAdd + `</span>
      <div class="shopping-item-controls">
        <button class="shopping-item-toggle">
          <span class="button-label">check</span>
        </button>
        <button class="shopping-item-delete">
          <span class="button-label">delete</span>
        </button>
      </div>
      </li>`
    );
  });
}

//check/uncheck items on the list by clicking the 'check' button
//this uses toggle
// '.shopping-item-toggle'

function checkUncheck() {
  $('.shopping-item-toggle').on('click', event => {
    const checked = $(event.currentTarget);
    checked.toggleClass('shopping-item__checked');
//    console.log('check check');
  });
}

//permanently remove items from list
//there's a delete button, so use that?
//delete items need event delagation (event-delegation-2)
// '.shopping-item-delete'

function deleteItem() {
  $('div').on('click', '.shopping-item-delete', function(event) {
    this.closest('li').remove();
  });
}


$(addItem);
$(checkUncheck);
$(deleteItem);