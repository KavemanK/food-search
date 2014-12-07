<?php

	$name = $_GET['item_name'];
    $name = str_replace(' ','_', $name);
	$calmin = $_GET['cal_min'];
	$calmax = $_GET['cal_max'];


	$ch = curl_init();
    $url ='http://api.nutritionix.com/v1/search/'.$name.'?results=0%3A50&cal_min='.$calmin.'&cal_max='.$calmax.'&fields=*&appId=8732c631&appKey=57c6e63063b79d84c1b63b3e30e48aec';
    curl_setopt($ch, CURLOPT_HEADER, 0);
    curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
    curl_setopt($ch, CURLOPT_URL, $url);
    $curlResponse = curl_exec($ch);
    curl_close($ch);
    
    print $curlResponse;
    
?>