//Берем за основу и не проверяем, что два числа больше нуля и целые, тогда:

function bothDiv(a, b) {
  let div = a, max = 0;
  if (div <= b) { div = b }
  for (let i = 1; i < div; i++) {
    if (a % i == 0 && b % i == 0) { max = i}
  }
  return `Максимальный делитель обоих целых положительных чисел равен ${max}`
}

console.log(bothDiv(10, 5)) // 5