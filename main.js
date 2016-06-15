$('[role=presentation] a').click(function(e) {
	e.preventDefault()
	$(this).tab('show')
})

$('img').colorbox({rel:'group', scalePhotos:true, width:'70%'});