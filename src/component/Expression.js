export const generator = (minLimit, maxLimit, sign) => {
  let num1 = minLimit + Math.floor(Math.random()*(maxLimit-minLimit))
  let num2 = minLimit + Math.floor(Math.random()*(maxLimit-minLimit))
  if(num1<num2){
    [num1,num2] = [num2,num1]
  }
  const randomSign = sign.charAt(Math.floor(Math.random() * sign.length))
  return "" + num1+ ' ' + randomSign + ' ' + num2
}

export const solver = (exp) => {
  const elem = exp.split(' ')
  const num1 = parseInt(elem[0])
  const sign = elem[1]
  const num2 = parseInt(elem[2])

  switch(sign) {
    case '+':
      return num1+num2
    case '-':
      return num1-num2
    case '*':
      return num1*num2
    case '/':
      return num1/num2
    default:
      return 0
  } 
}