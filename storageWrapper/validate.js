/**
 * Validation class for storage wrapper. 
 * @author Ester Hugosson 
 */

export class Validator {

    //Key must be type string and not empty 
    isValidKey(key) {

        return typeof key === 'string' && key.trim() !== ''
        //returns true when both is true 
    }

    //value must be defiened and not null 
    isValidValue(value) {

        //returns true when all is true
        return value !== undefined && value !== null && value.trim() !== ''

    }

    // is TIME TO LIVE, ttl, a number bigger than 0
    isTTLvalid(ttl) {

        return typeof ttl === 'number' && ttl > 0

    }


}