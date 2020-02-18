<?php
require "../src/ImageShuffle.php";

$ims = new ImageShuffle();
$ims->shuffleImg('pic/1.png','tmp/1.png','tmp/1.json');
$ims->shuffleImg('pic/2.jpg','tmp/2.png','tmp/2.json');
$ims->shuffleImg('pic/3.jpg','tmp/3.png','tmp/3.json');
$ims->shuffleImg('pic/4.jpg','tmp/4.png','tmp/4.json');
$ims->shuffleImg('pic/5.jpg','tmp/5.png','tmp/5.json');
