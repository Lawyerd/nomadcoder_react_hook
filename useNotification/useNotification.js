export const useNotification = (title, options) => {
  if (!("Notification" in window)) {
    return;
  }
  const fireNotif = () => {
    if (Notification.permission !== "granted") {
      // 만약 알람 허용 상태가 아니라면
      Notification.requestPermission().then(permission => {
        // 알람 키라고 요청을 하고
        if (permission === "granted") {
          // 그래서 승인이 된다면
          new Notification(title, options); // 새로운 알람을 보낸다.
        } else {
          // 요청했는데도 답이 없으면 그냥 return
          return;
        }
      });
    } else {
      // 알람 받을 수 있는 상태면 그냥 notification보내기
      new Notification(title, options);
    }
  };
  return fireNotif;
};
