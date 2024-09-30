import { StorageWrapper  } from "../storageWrapper/storageWrapper.js"

let key = 'User'
let value = [22, 25, 28]

const wrapper = new StorageWrapper()

//wrapper.setDataToLocalStorage(key, value)


console.log(wrapper.getDataFromLocalStorage(key))

wrapper.removeData(key)

wrapper.setDataToLocalStorage('This', value)