function decrypter(div,img_src,meta){
    var $ = jQuery;

    var $div = $(div);
    $div.detach();
    $div.css('width',meta.width+'px');
    $div.css('height',meta.height+'px');

    var blockWidth = (meta.width / meta.all_col);
    var blockHeight = (meta.height / meta.all_row);

    var map = new Array(meta.shuffles.length);
    for(var i = 0,l = meta.shuffles.length;i<l;i++) {
        map[meta.shuffles[i]] = i;
    }

    for(var i = 0,l = meta.shuffles.length;i<l;i++){
        var index = map[i];
        var row = Math.floor(index / meta.all_col);
        var col = index % meta.all_col;

        var startX = col * blockWidth;
        var startY = row * blockHeight;

        var $innerDiv = $('<div></div>');
        $innerDiv.css('display','inline-block');
        $innerDiv.css('margin','0');
        $innerDiv.css('border','0');
        $innerDiv.css('width',blockWidth+'px');
        $innerDiv.css('height',blockHeight+'px');
        $innerDiv.css('background-image','url('+img_src+')');
        $innerDiv.css('background-position','-'+startX+'px -'+startY+'px');
        $div.append($innerDiv);
    }
    $('body').append($div);
}
