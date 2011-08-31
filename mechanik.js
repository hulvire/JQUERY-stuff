$(function mechanik () {
		
		$(mecho);
		function mecho(){
			$('#mechanik').removeClass("stojaci").addClass("hejbaci").animate({opacity:'1',left:'2000'},{queue:false, duration:38000, step: function() {
					var offsetkocka = $('#kocka').offset();
					var offsetobjekt = $('#objekt').offset();
					var offsetmechanik = $('#mechanik').offset();		
					$('#mechanik>p').replaceWith( "<p>left: " + parseInt(offsetmechanik.left )+"</p>" );
				  	if (offsetkocka.left >= offsetmechanik.left)
						$('#kocka').css("background","red");
				  	if (parseInt(offsetkocka.left) === parseInt(offsetmechanik.left))
						$('#mechanik').removeClass("hejbaci").addClass("stojaci").stop();
				  	if (offsetkocka.left <= offsetmechanik.left)
						$('#kocka').css("background","green");
					if ((parseInt(offsetobjekt.left))-30 === parseInt(offsetmechanik.left))
						$('#mechanik').removeClass("hejbaci").addClass("posuvaci").stop().animate({left:'2000'},{queue:false, duration:38000, step: function() {
							var offsetmechanik = $('#mechanik').offset();		
							$('#objekt').css('left',offsetmechanik.left+30);
							}
						});
					
					}
			});

		}
	
	




		$('#mechanik').mouseover(function (){
			$('#mechanik').removeClass("hejbaci").removeClass("posuvaci").addClass("stojaci").css("cursor","crosshair").stop();

			var offsetmechanik = $('#mechanik').offset();		
		  	$('#mechanik>p').replaceWith( "<p>left: " + parseInt(offsetmechanik.left )+/* ", top:" + offsetmechanik.top+*/"</p>" );

		});

		$('#mechanik').mouseout(function (){
			$('#mechanik').removeClass("stojaci").addClass("hejbaci");
		  	$('#mechanik>p').replaceWith( "<p></p>" );
		});

		$('#mechanik').click(function (){
			$(mecho);
		});



		$( init );

		function init() {
		  $('.makeMeDraggable').draggable({
		    cursor: 'move',
		    containment: 'document',
		    snap: '.mechanikArrea',
		    /*stop: handleDragStop*/
		  });
/*		  $('#makeMeDroppable').droppable( {
		    drop: handleDropEvent
		  });*/
		}

/*		function handleDropEvent( event, ui ) {
		  var draggable = ui.draggable;
		  alert( 'The square with ID "' + draggable.attr('id') + '" was dropped onto me!' );
		}
*/
/*		function handleDragStop( event, ui ) {
		  var offsetXPos = parseInt( ui.offset.left );
		  var offsetYPos = parseInt( ui.offset.top );*/
		  /*alert( "Drag stopped!\n\nOffset: (" + offsetXPos + ", " + offsetYPos + ")\n");*/
/*		}*/

		
		

});