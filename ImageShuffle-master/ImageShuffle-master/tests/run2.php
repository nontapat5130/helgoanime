<?php
require "../src/ImageShuffle.php";

$ims = new ImageShuffle();
$arr = scandir('pic2');
foreach($arr as $f){
	if($f{0} == '.') continue;
	$b = basename($f,'.jpg');
	$ims->shuffleImg('pic2/'.$f,'tmp2/'.$b.'.png','tmp2/'.$b.'.json');
	echo '<div class="decrypt-me" data-src="tmp2/'.$b.'"></div>'."\n";
}

