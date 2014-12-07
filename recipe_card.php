<?php
	
    $recipeId = $_GET['recipeId'];
    

    $ch = curl_init();
    $url ='http://api.yummly.com/v1/api/recipe/'.$recipeId.'?_app_id=bf89d2c3&_app_key=95c8fafbb76b99f6406f0990597c1f9e';
    curl_setopt($ch, CURLOPT_HEADER, 0);
    curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
    curl_setopt($ch, CURLOPT_URL, $url);
    $responseThree = curl_exec($ch);
    curl_close($ch);

    print $responseThree;
?>