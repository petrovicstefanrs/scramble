(function($) {
    
    // The main function    
    $.fn.scramble = function() {
	    // Loop over elements we are scrambling.
        $(this).each(function(){	        
	        that = this;	        
	        // Get div dimensions.
	        var w = $(this).width();
	        var h = $(this).height();
	        var p = parseInt($(this).css('padding'));
	        var f = parseInt($(this).css('font-size'));
	        
	        // Set explicit width and height on our element.
	        $(this).width(w);
	        $(this).height(h);
	        
	        // Put letters into an array.
	        var letters = $(this).text().trim(); // remove any whitespace
	        letters = letters.replace(/\s/g, ''); // remove spaces between any words
	        letters = letters.split(''); // create an array of the letters
	        
	        // Empty our div.
	        $(this).empty();
	        
	        // Loop over our letters and add a random position for each.
	        $.each( letters, function( i, val ) {
	            var span = $('<span>' + val + '</span>');
	            var styles = {
	                position: "relative",
	                padding: 0,
	                //left : $.getRandomInt(p,w-p),
	                top : $.getRandomInt(p,(h-p-f))
	            };
	            span.css(styles);
	            $(that).append(span);
	        });         
        }); 
    }
    
    // Get a random integer.  
    $.getRandomInt = function(min, max) {
        return Math.floor(Math.random() * (max - min + 1) + min);
    }
    
})(jQuery);