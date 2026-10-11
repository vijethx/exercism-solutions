//
// This is only a SKELETON file for the 'Line Up' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const format = (name,num) => {
  const lastTwo = num % 100
  const lastDigit = num % 10

  let suffix="th"

  if(lastTwo < 11 || lastTwo > 13){
    if(lastDigit === 1) suffix='st'
    else if(lastDigit === 2) suffix='nd'
    else if(lastDigit === 3) suffix='rd'   
  }
  
 return (`${name}, you are the ${num}${suffix} customer we serve today. Thank you!`)
};
