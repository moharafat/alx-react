import {
  MARK_AS_READ,
  SET_TYPE_FILTER,
  FETCH_NOTIFICATIONS_SUCCESS,
} from '../actions/notificationActionTypes';

const intialState = {
  Notifications: [],
  filter: 'Default',
};

export function notificationReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_NOTIFICATIONS_SUCCESS:
      return {
        ...state,
        notifications: state.notifications.map((notification) => ({
          ...notification,
          isRead: false,
        })),
      };
    case MARK_AS_READ:
      return {
        ...state,
        notification: state.notification.map((notification) => {
          if (action.index === notification.id) {
						return { ...notification, isRead: true };
					}
					return { ...notification };
        }),
      };
    case SET_TYPE_FILTER:
      return {
        ...state,
        filter: action.filter,
      };
    default:
      return state;
  }
}