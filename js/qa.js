$(function() {
    var $question = $('.quest');
    var $answer = $('.answer');
    var $correct = $('.correct');
    var $message = $('#smalldis');
    var $graph = $('#graph_qs');
    
    $answer.hide();
     $message.hide();
    
    
    $('.button').on('click', function(e) {
        $parent = $(this).parent();
        $sibling = $parent.next();
        $grandpa = $parent.parent();
        $correct = $grandpa.children('.A').children('.correct');
        $sibling.show();
        $correct.addClass('hilite');
        $(this).hide();
    });
       
    if ($(window).width() < 650) {
        $message.show();
        $graph.hide();
    }
    
    $(window).resize(function() {
        if ($(window).width() > 649) {
            $message.hide();
            $graph.show();
  }
        
        else {
            $message.show();
            $graph.hide();
  }
        
 
});


});

