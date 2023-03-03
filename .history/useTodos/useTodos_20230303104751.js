import { useEffect, useReducer } from 'react';

const initialState = [];
const init = () => JSON.parse(localStorage.getItem('todos')) || [];

export const useTodos = () => {
	
	const [todos, dispatch] = useReducer(todoReducer, initialState, init);//puede recibir un tercer parametro que sierve para inicializar valores
	// const [totalTodos, setTotalTodos] = useState(0);
	// const [pendingTodos, setPendingTodos] = useState(0);


	useEffect(() => {

		localStorage.setItem('todos', JSON.stringify(todos));
		// yo cree 2 estados mas para cada variable. FH lo hizo en el return, revisar
		// setTotalTodos(todos.length);
		// const size = todos.filter(todo => !todo.done);
		// setPendingTodos(size.length);

	}, [todos])
	
	const HandleNewTodo = (todo) => {
		const action = {
			type: '@Add-Todo',
			payload: todo,
		};
		dispatch(action);
	};

	const HandleRemoveTodo = (todo) => {
		const action = {
			type: '@Delete-Todo',
			payload: todo
		};
		dispatch(action);
	};

	const HandleCompleteTodo = (todo) => {
		const action = {
			type: '@Complete-Todo',
			payload: todo
		};
		dispatch(action);
	};
	
	return {
		todos: todos,
		totalTodos: todos.length,
		pendingTodos: todos.filter(todo => !todo.done).length,
		HandleNewTodo: HandleNewTodo,
		HandleRemoveTodo: HandleRemoveTodo,
		HandleCompleteTodo: HandleCompleteTodo,
	}
}
