

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
});  

//script for select

    $('.select').on('click','.placeholder',function(){  
    var parent = $(this).closest('.select');
       if ( ! parent.hasClass('is-open')){
           parent.addClass('is-open');
          $('.select.is-open').not(parent).removeClass('is-open');
       }else{
          parent.removeClass('is-open');
       }
    }).on('click','ul>li',function(){
    var parent = $(this).closest('.select');
    parent.removeClass('is-open').find('.placeholder').text( $(this).text() );
    parent.find('input[type=hidden]').attr('value', $(this).attr('data-value') );
    }); 
//script for checkbox

$(function(){
	$(".niceCheck").mousedown(function() {
		changeCheck($(this));
    });
    $(".niceCheck").each(function() {
    	changeCheckStart($(this));
    });
});
function changeCheck(el) {
	var el = el,
    input = el.find("input").eq(0);
    if(!input.attr("checked")) {
        el.css("background-position","0 -17px");    
        input.attr("checked", true)
    } else {
        el.css("background-position","0 0"); 
        input.attr("checked", false)
    }
    return true;
}
function changeCheckStart(el) {
    var el = el,
    input = el.find("input").eq(0);
    if(input.attr("checked")) {
        el.css("background-position","0 -17px");    
    }
    return true;
}


  



   


    
 

    
        
      

      

      
    

   

     
     

    



     
   
     

    


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







