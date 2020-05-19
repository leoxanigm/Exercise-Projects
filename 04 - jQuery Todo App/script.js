$('#list-container').on(
  'click',
  '.fa-check, .fa-exclamation-triangle',
  function(e) {
    $(this).toggleClass('fa-check fa-exclamation-triangle');
    $(this)
      .parent()
      .children('span')
      .toggleClass('completed');
    e.stopPropagation();
  }
);

$('#list-container').on('click', '.fa-trash', function(e) {
  $(this)
    .parent()
    .fadeOut(200, function() {
      $(this).remove();
    });
  e.stopPropagation();
});

$('#todo-input').keypress(function(e) {
  if (event.which === 13) {
    let newTodo = $(this).val();
    let myID = 'todo' + Math.floor(Math.random() * 100000);
    let idSelector = 'li#' + myID;
    $(this).val('');
    let todoEl1 = '<li id="' + myID + '"><i class="fas fa-trash"></i><span>';
    let todoEl2 = '</span><i class="fas fa-check"></i></li>';
    $('#list-container').append(todoEl1 + newTodo + todoEl2);
    $(idSelector).css('display', 'none').slideDown(200);
  }
});

$('h1 .fa-plus').on('click', function() {
  $('#todo-input').fadeToggle();
})