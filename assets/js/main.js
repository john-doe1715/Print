/**
 * My functions:
 * #1 - Dropdown Arrow
 * #2 - Responsive search box
 * #3 - Responsive menu trigger
 * #4 - Responsive menu close
 * #5 - Home-Hero Area Slider
 * #6 - Home-Carousel Most View Product
 * #7 - Home-Payment Area Slider
 * #8 - Cart-Quantity plus minus
 * 
 */

;(function($) {
    'use strict';

    jQuery(document).ready(function($) {

        $(".see-more-btn").click(function(){
          $(".more-content").addClass("block");
          $(".see-less-btn").addClass("block");
          $(".see-more-btn").addClass("d-none");
        });
        $(".see-less-btn").click(function(){
          // $(".see-more-btn").removeClass("block");
          // $(".more-content").removeClass("block");


          $(".more-content").removeClass("block");
          $(".see-less-btn").removeClass("block");
          $(".see-more-btn").removeClass("d-none");
        });

        $("#lightGallery").lightGallery({
            mode:"fade",
            speed:800,
            caption:true,
            desc:true,
            mobileSrc:true
        });
        

    });

}(jQuery));

