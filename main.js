$('[role=presentation] a').click(function(e) {
	e.preventDefault()
	$(this).tab('show')
})

$('.photo').colorbox({rel:'group', scalePhotos:true, width:'70%'});