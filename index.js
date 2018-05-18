function takeANumber (katzDeliLine, name) {
  katzDeliLine.push(name);
  var number = katzDeliLine.length
  return(`Welcome, ${name}. You are number ${number} in line.`)
}
function nowServing(katzDeliLine) {
  if (katzDeliLine.length > 0) {
    var current = katzDeliLine[0];
    katzDeliLine.shift();
    return(`Currently serving ${current}.`)
  }
}