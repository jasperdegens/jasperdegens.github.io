/* Centre Slider

By Jasper Degens

*/

(function($) {
    
    $.fn.centreslider = function(options){
        
        var defaults = {
            slidespeed : 100,
            navButtons : true
        }
        
        options = $.extend(defaults, options);
        
        return this.each(function(){
            
            var obj = $(this);
            var list = obj.children();
            var currSlide = 0;
            
            function animate(thisSlide, toSlide){
               if(list[toSlide]){
                var nextImg = list[toSlide];
                var imgY = nextImg.clientHeight;
                var imgX = nextImg.clientWidth;
                var imgRatio = imgX / imgY;
                if(imgRatio >= screenRatio){
                    $(currImg).css({'width': width});
                }else{
                    $(currImg).css({'height': height});
                }
                var currImg = list[thisSlide];
                $(currImg).fadeOut(1000, function(){
                    $(nextImg).fadeIn(1500);
                })
               }
               currSlide = toSlide;
            }
            
            
            var width = obj.width();
            var height = screen.height - 200;
            var screenRatio = width / height;
            //alert(width + " " + height);
            var currImg = list[currSlide];
            var imgY = currImg.clientHeight;
            var imgX = currImg.clientWidth;
            var imgRatio = imgX / imgY;
            
            if(imgRatio >= screenRatio){
                $(currImg).css({'width': width, 'display': 'block'});
                
            }else{
                $(currImg).css({'height': height, 'display':'block'});
            }
            
            list.each(function(){
                $(this).click(function(){
                    var nextSlide = list[currSlide + 1] ? currSlide + 1 : 0;
                    animate(currSlide,nextSlide);
                });
            });
          
                
            
            
            
        })
    }
})(jQuery);
