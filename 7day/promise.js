
$(function(){
    //start
    
    function dataLoad(select,dataUrl){
        $(select).load(dataUrl).hide().fadeIn(1000);
    }
    dataLoad('header','header.html .header');
    dataLoad('footer','header.html .foot');
    
    setTimeout(function(){
        $('header a').on('click',function(e){
            e.preventDefault();
            var idx = $(this).index();
            idx++;
            dataLoad('section','sub0'+idx+'.html');
            //location.href = 'http://naver.com';
        });
    },10);
    
    //ajax
    $.ajax({
        url:'data.xml',
        dataType:'xml',
        type : 'get',
        beforeSend:function(){
            //alert('loging...');
        },
        success : function(data){
            var imgUrl = '',tag='',j=3,k=0;
            var count = $(data).find('item').length;
            
            function dataXml(){
                tag = '';
                $(data).find('item').each(function(i){
                    if(i < j){
                        imgUrl = $(this).text();
                        tag += "<img src='"+imgUrl+"'>";
                        $('.s1 span').html(tag);
                    }
                });
            } dataXml();//fun end
            
            $('button').click(function(){
                j += 3;
                dataXml();   
                if(j==count){
                    $(this).hide();
                }                
            });
        },
        complete : function(){
            //alert('complete');
        },
        error : function(){
            alert('error');
        }
    });
    
    
    
    
    
    
    
    
    
    
    
    //end
});