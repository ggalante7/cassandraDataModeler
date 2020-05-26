const TimeUuid = require('cassandra-driver').types.TimeUuid;
const Uuid = require('cassandra-driver').types.Uuid;

class Defaults{
    dateNow(){
        return Date.now();
    }

    uuid(){
        return Uuid.random();
    }

    timeUuid(){
        return TimeUuid.now();
    }
}

function toQuery(params, fields){
    let objField = Object.getOwnPropertyNames(fields);
    let response = {};
    let defaults = new Defaults;

    objField.forEach(field => {
        if(typeof fields[field] != "object"){
            response[field] = fields[field] == "text" ? "'" + params[field] + "'" : params[field];
        } else {
            if(fields[field].default && fields[field].type == "text"){
                response[field] = "'" + defaults[fields[field].default]() + "'";
            } else if(fields[field].default){
                response[field] = defaults[fields[field].default]();
            }
        }
    });

    return response;
}

module.exports = {
    toQuery
}



