$(function() {
   //start
    $.ajax({
        url:'data.xml',
        dataType:'xml',
        type : 'get',
        beforeSend:function(){
            $('.loading').fadeIn();
        },
        success : function(data){
            //succes start
            var photo = '';
            $(data).find('article').each(function() {
               photo = '<article class="thumb">'+$(this).html()+'</article>';
               $('#main').append(photo);
                
            });
            
            $('#main').on('click', 'article', function(e) {
                e.preventDefault();
                
                var url = $(this).find('a').attr('href');
                var txt = $(this).find('h2').text();
                
                var idx = $(this).index();
                var articleNum = $('article').length;
                
                $('.poptrox-popup .pic img').attr('src', url);
                $('.caption').text(txt);
                
                $('.poptrox-overlay').show(); 
                
                function dataInfo() {
                    url = $('article').eq(idx).find('a').attr('href');
                    txt = $('article').eq(idx).find('h2').text();
                    $('.poptrox-popup .pic img').attr('src', url);
                    $('.caption').text(txt);
                }
                
                $('.nav-previous').on('click', function() {
                    if (0 < idx ) {
                        idx--;
                    }
                    dataInfo();
                    console.log(idx)
                });
                
                $('.nav-next').on('click', function() {
                    if (idx < articleNum) {
                        idx++;
                    }
                    dataInfo();
                    console.log(idx)
                });
                
            });
            
            $('.closer').on('click', function() {
                $('.poptrox-overlay').hide();
            })
            
            $('.bg').on('click', function() {
                $('.poptrox-overlay').hide();
            });
            
            $('nav ul li .icon').on('click', function() {
                $('#footer').toggleClass('active');
            })
            
            $('#footer .primary').on('click', function(e) {
                e.preventDefault();
                if ($('#email').val() == '' && $('#name').val() == '') {
                    alert('이름과 이메일을 입력하세요.');
                } else if ($('#name').val() != ''  && $('#email').val() == '') {
                    alert('이메일을 입력하세요.');
                } else if ($('#email').val() != '' && $('#name').val() == '') {
                    alert('이름을 입력하세요.');
                } else {
                    $('#footer').removeClass('active');
                }
            })
        },
        complete : function(){
            $('.loading').fadeOut();
        },
        error : function(){
            alert('fail');
        }
    }); //ajax end
    
    //poptrox-overlay
    //end
});










