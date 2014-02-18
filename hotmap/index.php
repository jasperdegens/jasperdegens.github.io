<!DOCTYPE html>
<html>
 <head>
	<meta charset="UTF-8">
	<title>title</title>
    <script type="text/javascript">
	function post_to_url(path, params, method) {
		method = method || "post"; // Set method to post by default if not specified.

		// The rest of this code assumes you are not using a library.
		// It can be made less wordy if you use one.
		var form = document.createElement("form");
		form.setAttribute("method", method);
		form.setAttribute("action", path);

		for(var key in params) {
			if(params.hasOwnProperty(key)) {
				var hiddenField = document.createElement("input");
				hiddenField.setAttribute("type", "hidden");
				hiddenField.setAttribute("name", key);
				hiddenField.setAttribute("value", params[key]);

				form.appendChild(hiddenField);
			 }
		}

		document.body.appendChild(form);
		form.submit();
	}

   function rate() {
		testdict = {
					'latitude' : '42.409306',
					'longitude' : '-71.124593',
					'GUID': '1b5de627b4a25553baf1f72af9afb96d',
					'rating': '9'
					}
		post_to_url('rated.php', testdict)
   }
   
   function retrieve() {
   		testdict = {
					'latitude_tl' : '42.412384',
					'longitude_tl' : '-71.131178',
					'latitude_br' : '42.400442',
					'longitude_br' : '-71.115578'
					}
		post_to_url('get_ratings.php', testdict)
   }
   /*if (window.addEventListener) window.addEventListener("load", autorun, false);
   else if (window.attachEvent) window.attachEvent("onload", autorun);
   else window.onload = autorun;*/
   
	window.onload = function() {
		var a = document.getElementById("RatingLink");
		var b = document.getElementById("DataLink");
		a.onclick = function() {
			rate()
			return true;
		}
		b.onclick = function() {
			retrieve()
			return true;
		}
	}
		
	</script>
 </head>
 <body>
  

   <a href="#" id="RatingLink"> Send rating </a><br>
   <a href="#" id="DataLink"> Get Data </a>
 </body>
</html>