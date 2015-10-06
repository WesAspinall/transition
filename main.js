function change(event){
  var parent = $(event.currentTarget).parent();
      parent.addClass('expand');
      parent.siblings().removeClass('expand');

  console.log("click");
};


$('div').on('click','a', change);
