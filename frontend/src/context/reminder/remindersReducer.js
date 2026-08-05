export function remindersReducer(state, action) {
  switch (action.type) {
    case 'add':
      return [action.payload, ...state];

    case 'toggle':
      return state.map((reminder) =>
        reminder.id === action.payload
          ? { ...reminder, done: !reminder.done }
          : reminder,
      );

    case 'delete':
      return state.filter((reminder) => reminder.id !== action.payload);

    case 'update':
      return state.map((reminder) =>
        reminder.id === action.payload.id
          ? { ...reminder, ...action.payload.updates }
          : reminder,
      );

    default:
      return state;
  }
}
