function perfectSquare(num) {
  let value = Math.sqrt(num);
  if (Number.isInteger(value)) {
    return (value + 1) * (value + 1);
  } else {
    return -1;
  }
}

console.log(perfectSquare(400));
console.log(perfectSquare(9));
console.log(perfectSquare(10));
