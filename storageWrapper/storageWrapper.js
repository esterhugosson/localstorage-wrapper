export class StorageWrapper {

    // Required key and value to set 
    constructor(storageType = 'local') {

        this.storage = storageType === 'local' ? localStorage : sessionStorage

    }

    setDataToLocalStorage(key, value) {

        if(key !== '' && value !== '') {
        this.storage.setItem(key, JSON.stringify(value))
        } else {
            console.error(' Key or value is empty ')
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