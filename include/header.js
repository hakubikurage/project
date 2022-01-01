///// ヘッダー共通/////
'use strict';

function header(){
    $.ajax({
        url: "header.html",
        cache: false,
        success: function(html){
            document.write(html);
        }
    });
}