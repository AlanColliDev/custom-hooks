export const todoReducer = (initialState, action) => {
	const { payload, type } = action;

	switch ( type ) {
		case '@Add-Todo':
			return [ ...initialState, payload]

		case '@Delete-Todo':
			return initialState.filter(({id}) => id !== payload.id)

		case '@Complete-Todo':
			return initialState.map(todo => {
				if(todo.id === payload.id)
				{
					return {
						...todo,
						done: !todo.done
					}					
				}
				return todo;
			});
	
		default:
			return initialState;
	}
};