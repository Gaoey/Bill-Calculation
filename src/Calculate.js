
var main_rate = 459;
var promotion_rate = {name:"", rate:0};
var size = 0;

function mn(x){
  var final_promotion_def = "";
  var min = Number.MAX_VALUE;
  for(var index in x){
    if(min > x[index].rate){
        min = x[index].rate;
        final_promotion_def = x[index].name;
    }
  }
  return final_promotion_def;
}

function promotion_condition(code, people){
  var total_rate = people*main_rate;
  code = code.toUpperCase()

    if(people == 4 && code === "4PAY3"){
       promotion_rate[size++] = { name:"4PAY3", rate:main_rate * 3};
    }

    if(total_rate > 1000 && code === "LUCKY ONE"){
      promotion_rate[size++] = { name:"LUCKY ONE", rate:total_rate * 1.15};
    }

   if(people == 2 && code === "LUCKY TWO"){
     promotion_rate[size++] = { name:"LUCKY TWO", rate:total_rate * 1.20};
   }

   if(total_rate > 6000){
      promotion_rate[size++] = { name:"DISsize25%", rate:total_rate * 1.25};
   }

}

export function bill_calculation(people, codeList){

   if(people == 0){
     return "";
   }

   size = 0;
   promotion_rate = {name:"", rate:0};
   for(var i = 0; i<codeList.length;i++){
      promotion_condition(codeList[i], people);
    }

  console.log(mn(promotion_rate));
  return mn(promotion_rate);
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
