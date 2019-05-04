var kittens = ["Milo", "Otis", "Garfield"]

// Add your functions and code here
function destructivelyAppendKitten (name) {
  kittens.push(name)
  return kittens
}

function destructivelyPrependKitten (name) {
  kittens.unshift(name)
  return kittens
}

function destructivelyRemoveLastKitten () {
  kittens.pop()
  return kittens
}

function destructivelyRemoveFirstKitten () {
  kittens.shift()
  return kittens
}

function appendKitten(name) {
  var firstKitty = [... kittens, name]
  return firstKitty
}

function prependKitten (name) {
  var secondKitty = [name, ... kittens]
  return secondKity
}