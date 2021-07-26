export const dbAddUser = (fName: string, lName: string, mail: string, av = ""): void => {
  let db: IDBDatabase;
  const openRequest = indexedDB.open("comingsoon000", 1);

  const addUser = (firstName: string, lastName: string, email: string, avatar = ""): void => {
    db = openRequest.result;
    if (!db.objectStoreNames.contains("users")) {
      db.createObjectStore("users", { keyPath: "id" });
    }

    const transaction = db.transaction("users", "readwrite");
    const users = transaction.objectStore("users");

    let newAvatar: string;
    const loadedAvatar = document.querySelector(".register__avatar");
    if (loadedAvatar) {
      newAvatar = loadedAvatar.getAttribute("src");
    } else {
      newAvatar = avatar;
    }

    const user = {
      id: "newUser",
      firstName: `${firstName}`,
      lastName: `${lastName}`,
      email: `${email}`,
      avatar: `${newAvatar}`,
    };

    const UserScore = {
      id: "score",
      result: `0`,
    };

    users.put(user);
    users.put(UserScore);
  };

  openRequest.onsuccess = function resultOpen(e) {
    db = (<IDBOpenDBRequest>e.target).result;
    addUser(fName, lName, mail, av);
  };

  openRequest.onupgradeneeded = function dbUpgrade(e) {
    db = (<IDBOpenDBRequest>e.target).result;
    if (!db.objectStoreNames.contains("users")) {
      db.createObjectStore("users", { keyPath: "id" });
    }
  };
};
