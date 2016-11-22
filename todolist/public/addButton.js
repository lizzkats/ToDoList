// const database = require('../db')
//
// const submitTodo = (reload, input) => {
// 	const { todos } = database.createTodo( input.value )
//
// 	input.value = ''
// 	reload()
// }
//
// const bindAddButton = reload => {
// 	const addButton = document.quetySelector('.addTask-input')
// 	const input = document.getElementById('new-item-title')
//
// 	addButton.addEventListener('click', event => {
// 		event.preventDefault()
// 		sumbitTodo(reload, input)
// 	})
//
// 	input.addEventListener('keypress', event => {
// 		if(event.charCode === 13){
// 			event.preventDefault()
// 			sumbitTodo(reload, input)
// 		}
// 	})
// 
// 	input.focus()
// }
//
// module.exports = bindAddButton
