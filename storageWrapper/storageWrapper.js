export class StorageWrapper {

    // Required key and value to set 
    constructor(storageType = 'local') {

        this.storage = storageType === 'local' ? localStorage : ''

    }

    setDataToLocalStorage(key, value) {

        if(key !== '' && value !== '') {
        this.storage.setItem(key, JSON.stringify(value))
        } else {
            throw console.error(' Cannot set an empty object ')
        }
    }

    getDataFromLocalStorage(key) {

        return JSON.parse(this.storage.getItem(key))

    }

}