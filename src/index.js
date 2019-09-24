module.exports = function check(string) {

 let countTwo = 0;
 let countFive = 0;
 let lastArr = [];
 let temp = string.split("*").join("");
 let firstArr = temp.split("!!");
 let arrMiddle =firstArr.map((item,index) =>{

  if(index != firstArr.length - 1) {
  	return item + "double";
  } else {
  	return item;
  }

 }) 

 if(arrMiddle[arrMiddle.length - 1] == 0) {
  arrMiddle.pop();
 }

 arrMiddle.forEach(item =>{
  let arr = item.split("!");
  let secondArr = arr.map((secondItem, secondIndex)=>{
   if(secondIndex != arr.length - 1) {
    return secondItem + "all";
   } else {
    return secondItem;
   }

  })
  if(secondArr[secondArr.length - 1] == 0) {
   secondArr.pop();
  }
  lastArr = [...lastArr, ...secondArr];


 })
 let lastArr2 = lastArr.map(item =>{
  if(item.indexOf("double") + 1) {
   let current = +item.split("double")[0];
   if(!(current % 2)) {
    return current + "even";
   } else {
    return current + "odd";
   }
  }
  return item;
 })

 lastArr2.forEach((item, index) => {
  let elem;
  if(item.indexOf("odd") + 1) {
   elem = +item.split("odd")[0];
   let start = 5;
   while(start <= elem) {
    let current = start;
    while(current >= 5) {
     if(!(current % 5)) {
      countFive++;
      current = current / 5;
      continue;
     }
     break; 
    }
     start += 2;
   }
  } 

  if (item.indexOf("even") + 1) {
   elem = item.split("even")[0];
   let start = 2;
   while(start <= elem) {
    let current = start;
    while(current >= 2) {
     if(!(current % 2)) {
      countTwo++;
      current = current / 2;
      continue;
     }
     if(!(current % 5)) {
      countFive++;
      current = current / 5;
      continue;
     }
     break;    
    }
     start += 2;
   }
  }


  if (item.indexOf("all") + 1) {
   elem = item.split("all")[0];
   let start = 1;
   while(start <= elem) {
    let current = start;
    while(current >= 2) {
     if(!(current % 2)) {
      countTwo++;
      current = current / 2;
      continue;
     }
     if(!(current % 5)) {
      countFive++;
      current = current / 5;
      continue;
     }
     break;
     
    }
       start += 1;
   }
  }
 })

 let answer  = countFive < countTwo ? countFive : countTwo; 
 return  answer;
}