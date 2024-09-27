import { StorageWrapper  } from "../storageWrapper/storageWrapper.js"

let key = 'User'
let value = 'esterhugosson'

const wrapper = new StorageWrapper(key, value)

wrapper.setDataToLocalStorage()


console.log(wrapper.getDataFromLocalStorage('User'))