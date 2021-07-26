export const dbAddScore = (newScore: string): void => {
  let db: IDBDatabase;
  const openRequest = indexedDB.open("comingsoon000", 1);

  const addScore = (score: string): void => {
    db = openRequest.result;

    const transaction = db.transaction("users", "readwrite");
    const users = transaction.objectStore("users");

    const UserScore = {
      id: "score",
      result: `${score}`,
    };

    users.put(UserScore);
  };

  openRequest.onsuccess = function resultOpen(e) {
    db = (<IDBOpenDBRequest>e.target).result;
    addScore(newScore);
  };

  openRequest.onupgradeneeded = function dbUpgrade(e) {
    db = (<IDBOpenDBRequest>e.target).result;
    if (!db.objectStoreNames.contains("users")) {
      db.createObjectStore("users", { keyPath: "id" });
    }
  };
};
