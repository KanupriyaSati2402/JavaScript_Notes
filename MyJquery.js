// it is a js framework that shorten the  code of js and make it more efficient
// it reduces the functions 

//$ is nothing but jquery
// we should not run our js until our html code is properly made that why we use ready function
$(document).ready(function () {
    console.log('I am in a new file now');
    // we can only write $ in place of (document).ready but also prefer the entire line

    //Your jquery code here
    console.log("We are using jQuery");

    // jQuery Syntax looks like this
    // $('selector').action()

    //clicks on all the p elements.

    // $('p').click(); //click on p
    // $('p').click(function () { // when we will click on p it will print on console.
    //     console.log('you clicked on p', this);

    // $('p').hide();
    //  $('#id').hide();
    //  $('.class').hide();
    // }); //do this when we click on p

    // $('p').dblclick(function () {
    //     console.log('you double clicked on p', this);
    //     //  $('#id').hide();
    //     //  $('.class').hide();
    // });
    // $('p').hover(function () {
    //     console.log('you hoverd on: ', this);
    //     //  $('#id').hide();
    //     //  $('.class').hide();
    // },
    // function (){

    //     console.log('Thanks for coming')
    // });


    // there are three main types of selectors in jQuery 
    // 1. element selector
    // 2. id selector
    // 3. class selector

    // 1. Element selector -  This is an example of element selector which clicks on all p
    // $('p').click();

    // 2. Id selector - this is an example of id selector
    // $('#second').click();

    // 3. Class selector - this is an example of id selector
    // $('.odd').click();

    // other selectors
    // $('*').click() // clicks on all the elements
    // $('p.odd').click() // clicks on all the elements ( para. with the odd class will be selected)
    // $('p:first').click() // clicks on all the elements (first para will be selected)

    // Events in jQuery
    // Mouse events = click, dblclick, mouseenter, mouseleave
    // KeyboardEvent = keypress, keydown,l MediaKeyStatusMap
    // form events = submit, change, focus, blur
    // document/window events = load, resize, scroll, unload

    // demoing the on method -- adding multiple events on a single thing
    $('p').on(
        {
            click: function () {
                console.log('Thanks for clicking', this);
            },
            mouseleave: function () {
                console.log("mouseleave");

            }
        })

    // hide and show 

    // $('#wiki').hide(1000, function () {
    //     console.log("hidden");
    // })   
    // $('#wiki').show(1000, function () {
    //     console.log("show");
    // })  
    $('#but').click(function () {
        $('#wiki').fadeOut(5000);
    })

    // fadeIn()
    // fadeOut()
    // fadeToggle()
    // fadeTo()

    // Slide methods - helps in creating sliding effects ,speed and callback parameters are optional
    // $('#wiki').slideUp(1000, function(){
    //     console.log('done');
    // })
    // $('#wiki').slideDown(1000)
    // $('#wiki').slideToggle(1000)

    // Animate function in jQuery
    // $('#wiki').animate({
    //     opacity:0.3,
    //     height: '150px',
    //     width:'350px'

    // }, "fast")

// queue ek ek krke sb execute honge

    // $('#wiki').animate({ opacity: 0.3 }, 4000);
    // $('#wiki').animate({ opacity: 0.9 }, 1000);
    // $('#wiki').animate({ width: '350px' }, 12000);

// $('#wiki').stop() it will stop the animation at the point the stop is called 

// using jquery and html together . 

    // $('#ta').val('setting it to harry'); // to change the value inside a  form 
    // $('#ta').html('setting it to harry'); // normally changing the value of the html inside some tag
    // $('#ta').html('setting it to harry3');
    // $('#inp').html('setting it to harry3');
    // $('#inp').val('setting it to harry3');
    // $('#inp').empty() // input tag will be erased
    // $('#wiki').empty()
    // $('#wiki').text('you are good') // only for changing the text
    // $('#wiki').remove() // to delete the element from dom

    // adding class in html 

    // $('#wiki').addClass('myclass')
    // $('#wiki').addClass('myclass2')
    // $('#wiki').removeClass('myclass2')
    // $('#wiki').css('background-color', 'red') // setting css in a html 
    // $('#wiki').css('background-color')
    // toggle class function 


    // for backend 
    // AJAX Using jQuery - Act of exchanging data with the server without reloading the page and dom manipulation

    // get will give the content inside the link

    // $.get('https://code.jquery.com/jquery-3.3.1.js', function (data, status) { alert(data); }) // this will give the data on the alert

    // $.get('https://code.jquery.com/jquery-3.3.1.js', function (data, status) { alert(status); }) // this will show success 

    // $.post('https://code.jquery.com/jquery-3.3.1.js',
    //     { name: 'harry', channel: 'code with harry' },
    //     function (data, status) { alert(status) });

});



