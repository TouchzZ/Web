/**
 * Created by hxsd on 2016/12/13.
 */
$(function(){
    $.ajax({
        type:"GET",
        dataType:"json",
        url:"../../delicious.json",
        success: function(data,status,xhr){
           for(var i=0;i<data.length;i++){
               (function(i){
                   var item =
                       "<div class=item>"+
                       '<div class=itemPic><a href=detail.html?id=' + i +'><img src='+data[i].imgsrc+'></a></div>'+
                       "<div class=itemDesc>"+
                       "<p class='name'>"+data[i].name+"</p>"+
                       "<p class='desc' style=font-size: .24rem>"+data[i].desc+"</p>"+
                   "</div>"+
                       "</div>"
                   $(item).appendTo( $("#roomList"))
               })(i)
           }
            $("#roomList").children().find(".itemDesc").eq(0).find(".desc").css("display","block").end().parent().siblings().find(".itemDesc .desc").css("display","none")
        }
    });
});