import { addAvatar } from "../register/addAvatar";

export const getAvatarFromDb = (): void => {
  const openRequest = indexedDB.open("comingsoon000", 1);
  openRequest.onsuccess = function bdOpen(e) {
    const openRequestResult = (<IDBOpenDBRequest>e.target).result;
    const request = openRequestResult.transaction("users").objectStore("users").get("newUser");
    request.onsuccess = function getResult() {
      const { avatar } = request.result;
      addAvatar(avatar);
    };
  };
};
