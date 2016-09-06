

$(function() {
    var jcarousel = $('.jcarousel');

    jcarousel
        .on('jcarousel:create jcarousel:reload', function() {
                carousel = $(this),
                width = carousel.innerWidth();

            if (width > 900) {
                width = width / 4;
            } else if (width > 700) {
                width = width / 3;
            } else {
            	width = width /2;
            };
            carousel.jcarousel('items').css('width', Math.ceil(width) + 'px');
        })          
        .jcarousel({
            wrap: 'circular'
        });  
        $('.jcarousel-prev').jcarouselControl({
            target: '-=1'                       
        });             	
        
        $('.jcarousel-next').jcarouselControl({
            target: '+=1'
        });  
        $('.jcarousel-pagination')
            $('.jcarousel-pagination')
            .on('jcarouselpagination:active', 'a', function() {
                $(this).addClass('active');
            })
            .on('jcarouselpagination:inactive', 'a', function() {
                $(this).removeClass('active');
            })
            .on('click', function(e) {
                e.preventDefault();
            }) 
            .jcarouselPagination({
        	perPage: 1,
            item: function(page) {        	
            return '<a href="#' + page + '">' + page + '</a>';
            }           
        });
 });
$(function() {
    $( '.drop' ).hover(
        function(){
            $(this).children('.sub-menu').slideDown(600);
        },
        function(){
            $(this).children('.sub-menu').slideUp(600);
        });  
    $('.drop').hover(
        function(){
    $('.sub-menu li a').addClass('hover');
    });
    //     },
    //     function(){
    // $('.sub-menu li a').removeClass('hover');
        // });

});




// $(function() {
// 	$('.drop').mouseenter(function () {    
//     $('.sub-menu').animate({
//         background: '#fff'
//     }, 500 );
//     });
//     $('drop').mouseleave(function() {
//     $('.sub-menu').animate({
//         background:'#ccc'
//     }, 500 );    
// });
  

    


    
 

    
        
      

      

      
    

   

     
     

    



     
   
     

    


    // $(function() {
    //     var jcarousel = $('.jcarousel');

    //     jcarousel
    //         .on('jcarousel:reload jcarousel:create', function() {
    //             var carousel = $(this),
    //                 width = carousel.innerWidth();

    //             if (width >= 600) {
    //                 width = width / 3;
    //             } else if (width >= 350) {
    //                 width = width / 2;
    //             }

    //             carousel.jcarousel('items').css('width', Math.ceil(width) + 'px');
    //         })
    //         .jcarousel({
    //             wrap: 'circular'
    //         });

    //     $('.jcarousel-control-prev')
    //         .jcarouselControl({
    //             target: '-=1'
    //         });

    //     $('.jcarousel-control-next')
    //         .jcarouselControl({
    //             target: '+=1'
    //         });

    //     $('.jcarousel-pagination')
    //         .on('jcarouselpagination:active', 'a', function() {
    //             $(this).addClass('active');
    //         })
    //         .on('jcarouselpagination:inactive', 'a', function() {
    //             $(this).removeClass('active');
    //         })
    //         .on('click', function(e) {
    //             e.preventDefault();
    //         })
    //         .jcarouselPagination({
    //             perPage: 1,
    //             item: function(page) {
    //                 return '<a href="#' + page + '">' + page + '</a>';
    //             }
    //         });
    //     });







