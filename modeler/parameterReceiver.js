function getFields(param) {
    let fields = Object.getOwnPropertyNames(param);
    let fieldString = "";

    fields.forEach((field, index, array) => {
        fieldString = fieldString + field;
        if(index != array.length -1){
            fieldString = fieldString + ","
        }
    });
    return fieldString;
}

function getOptions(options){
    let optionString = "";

    options.forEach((option, index, array) => {
        optionString = optionString + option;
        if(index != array.length -1){
            optionString = optionString + ","
        }
    });
    return optionString;
}

function getValues(params) {
    let fields = Object.getOwnPropertyNames(params);
    let values = "";

    fields.forEach((field, index, array) => {
        values = values + params[field];
        if(index != array.length -1){
            values = values + ", "
        }
    });
    return values;
}

function getFieldsAndValue(param) {
    let fields = Object.getOwnPropertyNames(param);
    let fieldString = "";

    fields.forEach((field, index, array) => {
        fieldString = fieldString + field + "=" + param[field];
        if(index != array.length -1){
            fieldString = fieldString + " AND "
        }
    });
    return fieldString;
}

function getKeys(params, keys){
    let keysString = ""
    keys = keys.flat();
    console.log(keys)

    keys.forEach((key, index, array) => {
        keysString = keysString + key + "=" + params[key]
        if(index != array.length -1){
            keysString = keysString + " AND "
        }
    });
    return keysString;
}

module.exports = {
    getFields,
    getValues,
    getFieldsAndValue,
    getKeys,
    getOptions
};