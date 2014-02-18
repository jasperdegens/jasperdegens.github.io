<?php
  require 'twilio-php/Services/Twilio.php';
	header("content-type: text/xml");
	echo "<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n";
?>
<Response>
  <Gather action="./speakeasy_response.php" method="GET">
        <Say>Please enter your speak easy upland pin number followed by the pound key.</Say>
  </Gather>
  <Say>Validating. Please look to screen above</Say>
  <Redirect>
    ./speakeasy_response.php
  </Redirect>
  <? //Need to send get request here will 0=Digits  ?>
</Response>
