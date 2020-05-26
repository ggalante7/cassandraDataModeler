const pr = require("./parameterReceiver");
const cassandra = require("./cassandraConnector");
const parser = require("./queryParser");

class GenericModel {
    constructor(data){
        this.table = data.table;
        this.fields = data.fields;
        this.keys = data.keys;
    }

    async saveAsync(params){
        params = parser.toQuery(params, this.fields);

        let fields = pr.getFields(params);
        let values = pr.getValues(params);

        const query = `INSERT INTO ${this.table} (${fields}) VALUES (${values});`;
        return await cassandra.execute(query);
    }

    async selectAllAsync() {
        const query = `SELECT * FROM ${this.table};`;
        return (await cassandra.execute(query)).rows
    }

    async firstOrDefaultAsync(params, search){
        let selectFields = search ? pr.getOptions(search) : "*";
        let fieldAndValues = pr.getFieldsAndValue(params);

        const query = `SELECT ${selectFields} FROM ${this.table} WHERE ${fieldAndValues};`;
        return (await cassandra.execute(query)).rows[0];
    }

    async deleteAsync(params){
        params = parser.toQuery(params, this.fields);
        
        let values = pr.getKeys(params, this.keys);

        const query = `DELETE FROM ${this.table} WHERE ${values}`;
        return await cassandra.execute(query);
    }
}

module.exports = GenericModel;



