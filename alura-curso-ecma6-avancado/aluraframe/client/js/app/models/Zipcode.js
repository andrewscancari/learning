class Zipcode {
    constructor(zipcode) {
        if(!this._validation(zipcode)) throw new Error(`Invalid zipcode ${zipcode}`);

        this._zipcode = zipcode
    }

    _validation(code) {
        return /^\d{5}-\d{3}$/.test(code);
    }

    get zipcode() {
        return this._zipcode;
    }
}