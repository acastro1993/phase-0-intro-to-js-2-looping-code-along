function writeCards(names, event) {
  console.log(event);
  const messages = [];
    for (let i = 0; i < names.length; i++) {
          messages.push(`Thank you, ${names[i]}, for the wonderful ${event} gift!`);
    }
    return messages;
  }

function countDown (nums) {
    let i = nums;
    while (i >= 0) {
    console.log(i);
    i--;
  }
}
