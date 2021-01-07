<?php
    // GET data
    $service = $_GET['serviceName'];
    // POST data
    $text = $_POST['myText'];

    // Print Data
    print "$text has inquired about $service";

        
?>
<!DOCTYPE HTML>
<html lang = "en">
<head>
    <title>Noah Frew's Website</title>
    <meta charset = "UTF-8" /> 
    <link rel="stylesheet" href="FinalProjectCSS.css">
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
    <script src="FinalProjectJS.js"></script>
</head>
<body onload="login()">
    <ul id="navBar">
        <li>
            <button class="navButton" onclick="location.href='index.html'" type="button">Home</button>
        </li>
        <li>
            <button class="navButton" onclick="location.href='PhotoGallery.html'" type="button">Photo Gallery</button>
        </li>
        <li>
            <button class="navButton" id="selectedColor" onclick="location.href='Services.html'" type="button">Services</button>
        </li>
        <li>
            <button class="navButton" onclick="location.href='PrivateInfo.html'" type="button">Private Info</button>
        </li>
    </ul>
    <div id="mainWrapper">
        <h1 id="title">Inquired</h1>
        <p>
            <?php

                $service = $_GET['serviceName'];
                $text = $_POST['myText'];

                print "$text has inquired about $service";

        
            ?>
        </p>
    </div>
    
    
</body>
</html>