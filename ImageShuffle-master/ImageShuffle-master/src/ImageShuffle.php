<?php

class ImageShuffle{
    public function shuffleImg($srcPath,$dstPath,$metaPath,$allRow = null,$allCol = null){

        $bin = file_get_contents($srcPath);
        $im = imagecreatefromstring($bin);

        $width = imagesx($im);
        $height = imagesy($im);

        if($allRow == null){
            $allRow = 4;
            while($height % $allRow != 0){
                $allRow++;
            }
        }
        if($allCol == null){
            $allCol = 4;
            while($width % $allCol != 0){
                $allCol++;
            }
        }

        $blockWidth = $width / $allCol;
        $blockHeight = $height / $allRow;

        $dst = imagecreatetruecolor($width,$height);

        $arr = range(0, $allRow*$allCol - 1);
        shuffle($arr);

        foreach($arr as $dstIndex => $index){
            $srcRow = floor($index / $allCol);
            $srcCol = $index % $allCol;
            $srcStartX = $blockWidth * $srcCol;
            $srcStartY = $blockHeight * $srcRow;

            $dstRow = floor($dstIndex / $allCol);
            $dstCol = $dstIndex % $allCol;
            $dstStartX = $blockWidth * $dstCol;
            $dstStartY = $blockHeight * $dstRow;

            imagecopy($dst,$im,$dstStartX,$dstStartY,$srcStartX,$srcStartY,$blockWidth,$blockHeight);
        }

        imagepng($dst,$dstPath);

        file_put_contents($metaPath,json_encode(array(
            'width'=>$width,
            'height'=>$height,
            'all_row'=>$allRow,
            'all_col'=>$allCol,
            'shuffles'=>$arr,
        )));
    }
}