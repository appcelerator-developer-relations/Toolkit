// TODO: Figure out how to get rid of all the extra space at the end of the step navigator due to webkit scaling.
// TODO: Vertically center the step content in the navigator previews

(function() {
	var createClass = function(name, css) {
		var cssClass = name + ' {';
		$.each(css, function(key, value) {
			cssClass += key + ':' + value + '; ';
		});
		cssClass += '}';

		var style = $('<style>' + cssClass + '</style>')
		$('html > head').append(style);
	}
	
	var setupSwingingGateStagger = function(step) {
		$('.step ul.swinginggate-stagger').each(function(index, elem) {
			$(this).children('li').each(function(i, e) {
				var newClassName = 'swinginggate-stagger-' + i;
				var className = '#' + step.id + '.active .' + newClassName;
				createClass(className, {
					'-webkit-animation': 'swinginggate 1s',
					'-webkit-animation-delay': (1 + ((i+1) * 0.25)) + 's',
					'-webkit-animation-fill-mode': 'forwards'
				});
				$(this).addClass(newClassName);	
			});
		});
	};
	
	var setupFlyInStagger = function(step) {
		$('ul.flyin-stagger', step).each(function(index, elem) {
			$(this).children('li').each(function(i, e) {
				var newClassName = 'flyin-stagger-' + i;
				var className = '#' + step.id + '.active .' + newClassName; 
				createClass(className, {
					'-webkit-animation': 'flyin 1s',
					'-webkit-animation-delay': (1 + ((i+1) * 0.25)) + 's',
					'-webkit-animation-fill-mode': 'forwards'
				});
				$(this).addClass(newClassName);	
			});
		});
	}
	
	// addition to jQuery to get outerHTML
	jQuery.fn.outerHTML = function(s) {
    return s
        ? this.before(s).remove()
        : jQuery("<p>").append(this.eq(0).clone()).html();
	};
	
	$(document).ready(function() {
		var offset = 605;
		var navpanel = $('<div id="showoff_navpanel"></div>');
		var body = $(document.body);
		
		// Iterate through all steps in the presentation
		$('.step').each(function(index, elem) {
			var newPreview = $('<div class="preview" style="top:-' + (index * offset) + 'px"></div>');
			var $step = $(this); 
			
			// remove all 'step' attributes and classes, make sure it's 'active'
			$($step.outerHTML())
				.removeAttr('data-x')
				.removeAttr('data-y')
				.removeAttr('data-z')
				.removeAttr('data-scale')
				.removeAttr('data-rotate')
				.removeAttr('data-rotate-x')
				.removeAttr('data-rotate-y')
				.removeAttr('data-rotate-z')
				.removeAttr('style')
				.addClass('active')
				.appendTo(newPreview);
				
			newPreview
				// navigate to this step
				.click(function() {
					ImpressJS.API.select(document.getElementById(elem.id));
				})
				// Get the css values from body and this step, but not all of them.
				// We don't need the default transitions and such that the full 
				// .step css class brings with it 
				.css({
					'background-image': body.css('background-image')
				})
				// add this step preview to the navpanel
				.appendTo(navpanel);
		});
		
		// append the new navpanel to the body
		navpanel.appendTo(document.body);
		
		// toggle navpanel visibility with the 'n' key
		document.addEventListener("keydown", function ( event ) {
			if ( event.keyCode == 78) { // n
				if (navpanel.hasClass('visible')) {
					navpanel.removeClass('visible').addClass('hidden');
				} else {
					navpanel.removeClass('hidden').addClass('visible');
				}
				event.preventDefault();		
			}	
	    }, false);
	});
	
	// Preprocess animation classes, creating and assigning them to appropriate elements
	$('.step').each(function(index, elem) {
		setupSwingingGateStagger(elem);
		setupFlyInStagger(elem);
	});
})();