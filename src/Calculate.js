
var main_rate = 459;
var promotion_rate = {name:"", rate:0, detail:""};
var size = 0;

function mn(x){
  var final_promotion_def = [];
  var min = Number.MAX_VALUE;
  for(var index in x){
    if(min > x[index].rate){
        min = x[index].rate;
        final_promotion_def = x[index];
    }
  }

  return final_promotion_def;
}

function promotion_condition(code, people){
  var total_rate = people*main_rate;
  code = code.toUpperCase()

    if(people == 4 && code === "4PAY3"){
      var price = parseInt(main_rate * 3);
       promotion_rate[size++] = { name:"4PAY3", rate: price, detail:" Come 4 pay 3"};
    }

    if(total_rate > 6000){
      var price = parseInt(total_rate - (total_rate * 0.25));
       promotion_rate[size++] = { name:"DISCOUNT25%", rate: price,  detail:" Discount 25% "};
    }

    if(total_rate > 1000 && code === "LUCKY ONE"){
      var price = parseInt(total_rate - (total_rate * 0.15));
      promotion_rate[size++] = { name:"LUCKY ONE", rate:price, detail:" Discount 15% "};
    }

   if(people == 2 && code === "LUCKY TWO"){
     var price =parseInt(total_rate -(total_rate * 0.20));
     promotion_rate[size++] = { name:"LUCKY TWO", rate: price, detail:" Discount 20% "};
   }

}

function pay_least_condition(people){
  var total_rate = people*main_rate;

    if(people == 4){
      var price = parseInt(main_rate * 3);
       promotion_rate[size++] = { name:"4PAY3", rate: price, detail:" มา 4 จ่าย 3"};
    }

    if(total_rate > 6000){
       var price = parseInt(total_rate - (total_rate * 0.25));
       promotion_rate[size++] = { name:"DISCOUNT25%", rate: price,  detail:" ลดราคา 25% "};
    }

    if(total_rate > 1000){
      var price = parseInt(total_rate - (total_rate * 0.15));
      promotion_rate[size++] = { name:"LUCKY ONE", rate: price, detail:" ลดราคา 15% "};
    }

   if(people == 2){
     var price = parseInt(total_rate -(total_rate * 0.20));
     promotion_rate[size++] = { name:"LUCKY TWO", rate: price, detail:" ลดราคา 20% "};
   }

}

export function pay_least(people){
  if(people == 0){
    return "";
  }
  promotion_rate = {name:"", rate:0, detail:""};
  pay_least_condition(people)
  var props = mn(promotion_rate);
  alert("โปรโมชั่นที่จ่ายน้อยสุดของคุณคือ '"+props.name+"', จ่ายในราคา: "+props.rate+" บาท");
}

export function bill_calculation(people, codeList){

   if(people == 0){
     return "";
   }

   size = 0;
  //คูปองปกติ
   promotion_rate = {name:"", rate:0, detail:""};
   for(var i = 0; i<codeList.length;i++){
      promotion_condition(codeList[i], people);
    }
  var props = mn(promotion_rate);

  // ในราคาที่น้อยที่สุด
  promotion_rate = {name:"", rate:0, detail:""};
  pay_least_condition(people)
  var payleast = mn(promotion_rate);

  if(props.length == 0){
    alert("รหัสคูปองโปรโมชั่นคุณไม่ถูกต้อง");
  }else{
    if(payleast.name === props.name){
      alert('โปรโมชั่นที่ดีที่สุดคือ : '+props.name+', ได้รับส่วนลด '+props.detail+', จ่ายในราคา '+props.rate+' บาท');
    }else{
      alert('โปรโมชั่นที่คุณใช้คือ : '+props.name+', ได้รับส่วนลด '+props.detail+', จ่ายในราคา '+props.rate+' บาท'+
      ', แต่เราแนะนำโปรโมชั่นที่ดีกว่าคือ​ : '+payleast.name+', ซึ่งได้รับส่วนลด'+payleast.detail+', จ่ายในราคา '+payleast.rate+' บาท'
      );
    }
  }

  return props;
}

export function isDuplicate(codeList, current_code){
  for(var i = 0; i<codeList.length; i++){
    if(codeList[i] === current_code){
      return true;
      break;
    }
  }
  return false;
}
