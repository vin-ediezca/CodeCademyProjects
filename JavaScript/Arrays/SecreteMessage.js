let secretMessage = ['Learning', 'is', 'not', 'about', 'what', 'you', 'get', 'easily', 'the', 'first', 'time,', 'it', 'is', 'about', 'what', 'you', 'can', 'figure', 'out.', '-2015,', 'Chris', 'Pine,', 'Learn', 'JavaScript'];

function decodeSecretMessage(arr) {
  const indexOfStringsToBeReplaced = [];
  const stringsTobeReplaced = ['get', 'right', 'the', 'first', 'time,'];
  const indexToSplice = [];

  arr.pop();
  arr.push('to', 'program');

  const easilyIndex = arr.indexOf('easily');

  arr[easilyIndex] = 'right';
  arr.shift();
  arr.unshift('programming');

  indexOfStringsToBeReplaced.push(arr.indexOf(stringsTobeReplaced[0]));
  indexOfStringsToBeReplaced.push(arr.indexOf(stringsTobeReplaced[1]));
  indexOfStringsToBeReplaced.push(arr.indexOf(stringsTobeReplaced[2]));
  indexOfStringsToBeReplaced.push(arr.indexOf(stringsTobeReplaced[3]));
  indexOfStringsToBeReplaced.push(arr.indexOf(stringsTobeReplaced[4]));

  arr.splice(indexOfStringsToBeReplaced[0], indexOfStringsToBeReplaced.length, 'know,');

  console.log(arr.join(' '));
}

decodeSecretMessage(secretMessage);