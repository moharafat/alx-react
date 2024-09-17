import * as notificationData from "../../notifications.json";

export function getAllNotificationsByUser(userId) {
  return notificationData.default
    .filter((item) => item.author.id === userId)
    .map(({ context }) => context);
}