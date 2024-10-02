/**
 * Check availability and capacity for Storage wrapper. 
 * @version 1.0.0
 */

export class StorageAvailibilty {

    constructor(storage) {
        this.storage = storage
    }

    isStorageAvailable() {

        try {
            const testKey = '__test__'
            this.storage.setItem(testKey, 'test')
            this.storage.removeItem(testKey)
            return true
        } catch (e) {
            return false
        }

    }

    isStorageFull() {

    }


}