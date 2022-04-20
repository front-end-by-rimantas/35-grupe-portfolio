function renderFeatures(selector, data) {
    const mandatoryObjKeys = ['title', 'desc'];
    const optionalObjKeys = ['icon'];
    const allObjKeys = [...mandatoryObjKeys, ...optionalObjKeys];
    const minKeysCount = mandatoryObjKeys.length;
    const maxKeysCount = minKeysCount + optionalObjKeys.length;

    if (typeof selector !== 'string') {
        return [true, 'Selector turi buti stringas'];
    }
    if (selector === '') {
        return [true, 'Selector turi buti ne tuscias stringas'];
    }

    const DOM = document.querySelector(selector);
    if (!DOM) {
        return [true, 'Pagal pateikta selector nepavyko rasti elemento'];
    }

    if (!Array.isArray(data)) {
        return [true, 'Duomenys turi buti masyve'];
    }
    if (data.length === 0) {
        return [true, 'Duomenyse turi buti bent vienas objektas'];
    }

    let HTML = '';

    for (const item of data) {
        // tikriname, ar tai tikras objektas
        if (typeof item !== 'object'
            || item === null
            || Array.isArray(item)) {
            continue;
        }

        // tikriname, kiek raktazodziu yra objekte
        const keys = Object.keys(item);
        if (keys.length < minKeysCount || keys.length > maxKeysCount) {
            continue;
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
            continue;
        }

        // ar objekte yra visi privalomi raktazodziai
        if (typeof item.title !== 'string'
            || item.title.trim() === '') {
            continue;
        }
        if (typeof item.desc !== 'string'
            || item.desc.trim() === '') {
            continue;
        }

        HTML += `
            <div class="col-12 col-md-6 col-lg-4 feature">
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