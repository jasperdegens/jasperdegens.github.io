<?php
  echo "<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n";

  $pins = array(
    "9999" => "Pierre Rock Degens",
    "1111" => "Kengi",
    "2222" => "Inner City Steph",
    "3333" => "Lundquist",
    "4444" => "Helen's Chicken Wrap",
  );

  $s = '';
  if(!$name=$pins[$_GET['Digits']]){
    $s= 'You shall not pass.';
  }else{
    $s = $name.', please enter.';
  }
  //Sent api request to nate box
 // $response = http_get("http://www.example.com/", array("timeout"=>1), $info);
  $port = '192.162.1.1';
  $message_request = "http://".$port."/signmsg?
          password=password123
          &text=".$s."
          &loops=10
          &speed=5
          &maxseconds=5
          &pauseseconds=0
          &pausefirst=0
          &rel_brightness=100
          &max_brightness=100
          &prio=50
          &font=arial_bold
          &scroll=left
          &splitting=0
          &autosplit=0
          &color=red
          &bgcolor=green
          &shadcolor=black
          &shadloc=rd
          &flash=2000
          &flash_dc=50
          &flash_fg=green
          &flash_bg=red
          &flash_shad=black";
  $flashing_request = "http://".$port."/setflashers?
                      val=FFF
                      &password=password123";



  echo $info;
  echo $s;

?>