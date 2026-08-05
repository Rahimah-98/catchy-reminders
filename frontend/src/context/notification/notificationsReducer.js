export function notificationsReducer(state, action) {
  switch (action.type) {
    case 'add': {
      const exists = state.some(
        (n) =>
          n.reminderId === action.payload.reminderId &&
          n.type === action.payload.type,
      );

      if (exists) return state;

      return [action.payload, ...state];
    }

    case 'read':
      return state.map((notification) =>
        notification.id === action.payload
          ? { ...notification, read: true }
          : notification,
      );

    case 'readAll':
      return state.map((notification) => ({
        ...notification,
        read: true,
      }));

    case 'delete':
      return state.filter((notification) => notification.id !== action.payload);

    case 'clear':
      return [];

    default:
      return state;
  }
}
