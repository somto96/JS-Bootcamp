let todos = ["Read", "Cook", "Shop", "Play", "Rest"]

console.log(todos.splice(2,1))
console.log(todos.push("Beach stuff"))
console.log(todos.shift())

console.log(`You have ${todos.length} todos`)
// console.log(`Todos: ${todos[0]}\nTodos: ${todos[todos.length - 2]}`)
// console.log(todos)
todos.forEach((item, index) => {
    // console.log(`${index}. ${item[0]}\n${index}. ${item[1]}`) => Displays the first two characters of all values in the array
    const num = index + 1
    console.log(`${num}. ${item}`)
})
