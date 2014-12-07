<?php
	
    $name = $_GET['item_name'];
    $name = str_replace(' ','_', $name);
    
    
    $calories = $_GET['calories'];

    $ch = curl_init();
    $url ='http://api.yummly.com/v1/api/recipes?_app_id=bf89d2c3&_app_key=95c8fafbb76b99f6406f0990597c1f9e&q='.$name.'&nutrition.ENERC_KCAL.min=0&nutrition.ENERC_KCAL.max='.$calories.'&requirePictures=true';
    curl_setopt($ch, CURLOPT_HEADER, 0);
    curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
    curl_setopt($ch, CURLOPT_URL, $url);
    $responseTwo = curl_exec($ch);
    curl_close($ch);

    print $responseTwo;
?>