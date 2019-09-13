class Validation {
    static zipcode(code) {
        return /^\d{5}-\d{3}$/.test(code);
    }
    
    static cellphone(phone) {
        return /^\(\d{2}\)\ \d{5}-\d{4}$/.test(phone);
    }
}