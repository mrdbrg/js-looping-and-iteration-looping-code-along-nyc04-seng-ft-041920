// Code your solutions in this file
function writeCards(names, word) {
  thankYou = []
  for (let i = 0; i < names.length; i++) {
    thankYou.push(`Thank you, ${names[i]}, for the wonderful ${word} gift!`)
    thankYou.push("Thank you, " + names[i] + ", for the wonderful " + word + " gift!")
  }
  return thankYou
}

// console.log(writeCards)

function countDown(num) {
  while(0 <= num) {
    console.log(num)
    num--
  }
}