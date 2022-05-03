class IsValid {
    static trueObject() {
        return true;
    }

    static emptyString(text, context = 'Tekstas') {
        if (typeof text !== 'string') {
            return [true, `${context} turi buti stringas`];
        }
        if (text === '') {
            return [true, `${context} turi buti ne tuscias stringas`];
        }
        return [false, 'OK'];
    }

    static emptyArray(list) {
        if (!Array.isArray(list)) {
            return [true, 'Duomenys turi buti masyve'];
        }
        if (list.length === 0) {
            return [true, 'Duomenyse turi buti bent vienas objektas'];
        }
        return [false, 'OK'];
    }

    static positiveInteger() {
        return true;
    }

    static firstName(name) {
        const emptyString = IsValid.emptyString(name, 'Vardas');
        if (emptyString[0]) {
            return emptyString;
        }
        if (name[0].toUpperCase() !== name[0]) {
            return [true, 'Pirma vardo raide turi buti didzioji'];
        }
        const kitosRaides = name.slice(1);
        if (kitosRaides.toLowerCase() !== kitosRaides) {
            return [true, 'Apart pirmos raides kitos turi varde buti mazosios'];
        }
        const abc = 'abcdefghijklmnopqrstuvwxyz';
        let badSymbols = '';
        for (const letter of name.toLowerCase()) {
            if (!abc.includes(letter)) {
                badSymbols += letter;
            }
        }
        if (badSymbols !== '') {
            return [true, `Varde yra neleistinu simboliu: ${badSymbols.split('').join(', ')}`];
        }
        return [false, 'OK'];
    }

    static lastName() {
        return true;
    }

    static email() {
        return true;
    }

    static phoneNumber() {
        return true;
    }

    static fileName() {
        return true;
    }

    static password() {
        return true;
    }
}

export { IsValid }