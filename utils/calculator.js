var x = 7
console.log("Hello from the calculator")

module.exports = {
  add(x, y) {
    return x + y
  },
  double(x) {
    return x * 2
  },
  tripple(x) {
    return x * 3
  },
  cubed(x) {
    return x * x * x
  }

}