import { StorageWrapper  } from "../storageWrapper/storageWrapper.js"

const wrapper = new StorageWrapper('User', 'esterhugosson')

wrapper.setDataToLocalStorage()

const test = new StorageWrapper( '', '')

test.setDataToLocalStorage()