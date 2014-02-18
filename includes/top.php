
<script type="text/javascript">

$(document).ready(function(){
    $("#top_nav li").hover(function() {
	alert('dfd');
         $(this).animate({background-color: '#ccc'}, 10);
		 alert('wokring');
    }).mouseout(function() {
        $(this).animate({background-color:'none'},1000);
    });       
});
</script>

	<div class="page_wrapper">
		<div id="left_col">
			<h1>Grace Bakst Wapner</h1>
			<?php require_once('nav.php'); ?>