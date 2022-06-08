
//top滑動
$(document).ready(function() {
   $('.top').click(function() {
    $('html').scrollTop(0);
   })
})

//方案價格
$(document).ready(function() {
  $('.price-btn').click(function() {
     var people = $(this).text();
      $('.number').text(people);
      function cost(){
        let cost = 600; 
        if (people == 10000){
          $('.basic-cost').text(cost);
        }
        else if(people == 15000){
          $('.basic-cost').text(cost*2);
        }
        else if(people == 20000){
          $('.basic-cost').text(cost*3);
        }
        else if(people == 25000){
          $('.basic-cost').text(cost*4);
        }
        else if(people == 30000){
          $('.basic-cost').text(cost*5);
        }
      }
      function normalCost () {
        let normalCost = 1600;
        if (people == 10000){
            $('.normal-cost').text(normalCost);
        }
        else if(people == 15000){
          $('.normal-cost').text(normalCost*1.5);
        }
        else if(people == 20000){
          $('.normal-cost').text(normalCost*2);
        }
        else if(people == 25000){
          $('.normal-cost').text(normalCost*2.5);
        }
        else if(people == 30000){
          $('.normal-cost').text(normalCost*3);
        }
      }
      cost();
      normalCost ();                                                                        
  })
})