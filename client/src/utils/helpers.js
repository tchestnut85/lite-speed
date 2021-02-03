export function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

export function idbPromise(storeName, method, object) {
    return new Promise((resolve, reject) => {

        const request = window.indexedDB.open('lite-speed', 1);

        let db, tx, store;

        request.onupgradeneeded = function (e) {
            const db = request.result;
            db.createObjectStore('courses', { keyPath: '_id' });
            db.createObjectStore('lessons', { keyPath: '_id' });
            db.createObjectStore('user', { keyPath: '_id' });
        };

        request.onerror = function (e) {
            console.log('There was an error.');
        };

        request.onsuccess = function (e) {
            db = request.result;
            tx = db.transaction(storeName, 'readwrite');
            store = tx.objectStore(storeName);

            db.onerror = function (e) {
                console.log('error', e);
            };

            switch (method) {
                case 'put':
                    store.put(object);
                    resolve(object);
                    break;
                case 'get':
                    const all = store.getAll();
                    all.onsuccess = function () {
                        resolve(all.result);
                    };
                    break;
                case 'delete':
                    store.delete(object._id);
                    break;
                default:
                    console.log('No valid method');
                    break;
            }

            tx.oncomplete = function () {
                db.close();
            };
        };

    });
}