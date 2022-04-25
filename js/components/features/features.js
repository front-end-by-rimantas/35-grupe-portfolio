function isValidSelector(selector) {
    if (typeof selector !== 'string') {
        return [true, 'Selector turi buti stringas'];
    }
    if (selector === '') {
        return [true, 'Selector turi buti ne tuscias stringas'];
    }
    return [false, 'OK'];
}

function isValidData(data) {
    if (!Array.isArray(data)) {
        return [true, 'Duomenys turi buti masyve'];
    }
    if (data.length === 0) {
        return [true, 'Duomenyse turi buti bent vienas objektas'];
    }
    return [false, 'OK'];
}

function isValidDataItem(item) {
    const mandatoryObjKeys = ['title', 'desc'];
    const optionalObjKeys = ['icon'];
    const allObjKeys = [...mandatoryObjKeys, ...optionalObjKeys];
    const minKeysCount = mandatoryObjKeys.length;
    const maxKeysCount = minKeysCount + optionalObjKeys.length;

    // tikriname, ar tai tikras objektas
    if (typeof item !== 'object'
        || item === null
        || Array.isArray(item)) {
        return false;
    }

    // tikriname, kiek raktazodziu yra objekte
    const keys = Object.keys(item);
    if (keys.length < minKeysCount || keys.length > maxKeysCount) {
        return false;
    }

    // ieskom ar bent vienas objekte esantis key neturetu jam priklausyti
    let correctObj = true;
    for (const key of keys) {
        if (!allObjKeys.includes(key)) {
            correctObj = false;
            break;
        }
    }

    // radom netinkama key
    if (!correctObj) {
        return false;
    }

    // ar objekte yra visi privalomi raktazodziai
    if (typeof item.title !== 'string'
        || item.title.trim() === '') {
        return false;
    }
    if (typeof item.desc !== 'string'
        || item.desc.trim() === '') {
        return false;
    }
    return true;
}

function renderFeatures(selector, data) {
    const selectorRes = isValidSelector(selector);
    if (selectorRes[0]) {
        return selectorRes;
    }

    const DOM = document.querySelector(selector);
    if (!DOM) {
        return [true, 'Pagal pateikta selector nepavyko rasti elemento'];
    }

    const dataRes = isValidData(data);
    if (dataRes[0]) {
        return dataRes;
    }

    let HTML = '';

    for (const item of data) {
        if (!isValidDataItem(item)) {
            continue;
        }

        HTML += `
            <div class="feature">
                <i class="fa fa-${item.icon ? item.icon : 'globe'}" aria-hidden="true"></i>
                <h3 class="title">${item.title}</h3>
                <p class="description">${item.desc}</p>
            </div>`;
    }

    if (HTML === '') {
        return [true, 'Gautuose duomenyse nerasta nei vieno teisingo objekto'];
    }

    DOM.innerHTML = HTML;

    return [false, 'OK'];
}

export { renderFeatures };