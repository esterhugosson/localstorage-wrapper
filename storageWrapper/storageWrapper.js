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

        let value = JSON.parse(this.storage.getItem(key))

        if(value === null) {
            console.log('This data does not exist')
        }
            
        return value
        
    }

    removeData(key) {

        if(this.getDataFromLocalStorage(key) === null ) {

            console.log('This data does not exist')

        }
        
        this.storage.removeItem(key)

    }

}