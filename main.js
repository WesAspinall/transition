function change(event){

  var parent = $(event.currentTarget).parent();///this targets the sectionOne,Two,Three

      parent.addClass('expand');///this gives the section the class of .expand

      parent.siblings().removeClass('expand');//for each  of the siblings, the expand class is removed 
                                              //and we are left with the base state (32px height)

  // console.log("click");
};


$('div').on('click','a', change);//how we get it to show up on the page
