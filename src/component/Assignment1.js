// const ages=[23,20,43,32,53,20];

// const age2=[25,12,25,40,46,50];

// const all = [...ages,...age2]

// const unique = [ ...new Set(all)]
// const sorted = [unique.sort()]

// console.log(sorted)

// const str = "MADAM"
// const revStr = str.split('').reverse().join('')

// console.log(str===revStr)

// const str = "India is Bharat"
// const revStr = str.split(' ')
// const wd = `${revStr[2]} is ${revStr[0]}`

// console.log(wd)
// const str = "Deen"
// const revStr = str.split('').reverse().join('')

// console.log(revStr.Captalize())

const str = "INDIA IS BHARAT";

const newStr = str.split("");

const newStr1 = [...new Set(newStr)];

const uniqstr = newStr1.join("");

console.log(uniqstr);
