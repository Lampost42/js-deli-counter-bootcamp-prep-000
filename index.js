function takeANumber (katzDeliLine, name) {
  katzDeliLine.push(name);
  var number = katzDeliLine.length
  return(`Welcome, ${name}. You are number ${number} in line.`)
}