const count = function() {
	let counter = 1
	return () => counter++
}()

console.log(count())
console.log(count())
console.log(count())