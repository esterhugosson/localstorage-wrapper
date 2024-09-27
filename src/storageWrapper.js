export class StorageWrapper {

    // Required key and value to set 
    constructor(key, value, storageType = 'local') {

        this.storage = storageType === 'local' ? localStorage : ''
        this.key = key
        this.value = value 

    }

    setDataToLocalStorage() {

        if(this.key !== '' && this.value !== '') {
        this.storage.setItem(this.key, JSON.stringify(this.value))
        } else {
            throw console.error(' Cannot set an empty object ')
            
        }
    }

}