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

function destructivelyRemoveLastKitten (name) {
  kittens.pop(name)
  return kittens
}