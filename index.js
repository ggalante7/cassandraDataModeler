const GenericModel = require("./dynamicQuering/GenericModel");
const Optin = require("./models/optin");
const History = require("./models/history");

async function testeOptin() {
    try {
        // Iniciar objeto com modelo da tabela
        let optin = new GenericModel(Optin);

        // Parametros para busca
        let params = {
            tenant: "d3486ae9-136e-5856-bc42-212385ea7970",
            contact: "d3486ae9-136e-5856-bc42-212385ea7970",
            mean_contact: "'5511981979722'"
        }

        // Campos para serem retornados
        options = ["client_id", "context", "origin"];

        let selectAllAsync = await optin.selectAllAsync();
        let firstOrDefaultAsync = await optin.firstOrDefaultAsync(params, options);
        console.log("SELECT ALL ASYNC", JSON.stringify(selectAllAsync));
        console.log("SELECT ONE ASYNC", JSON.stringify(firstOrDefaultAsync));

        // Data para ser inserida
        let data = {
            tenant: "d3486ae9-136e-5856-bc42-212385ea7970",
            contact: "d3486ae9-136e-5856-bc42-212385ea7970",
            mean_contact: "5511981979722333",
            client_id:"45599963233",
            origin: "testeUPDATE",
            context: "testando"
        }

        await optin.saveAsync(data);
        console.log("SAVED ASYNC");

        // Data para ser deletada
        let del = {
            tenant: "d3486ae9-136e-5856-bc42-212385ea7970",
            contact: "d3486ae9-136e-5856-bc42-212385ea7970",
            mean_contact: "gabemariim@gmail.com",
            client_id: "45599269859"
        }

        await optin.deleteAsync(data);
        console.log("DELETED ASYNC");
    } catch (error) {
        console.log(error);
    }
}

async function testeHistory() {
    try {
        // Iniciar objeto com modelo da tabela
        let history = new GenericModel(History);

        // Parametros para busca
        let params = {
            tenant: "d3486ae9-136e-5856-bc42-212385ea7970",
            contact: "d3486ae9-136e-5856-bc42-212385ea7970"
        }

        // Campos para serem retornados
        // options = ["client_id", "context", "origin"];

        let selectAllAsync = await history.selectAllAsync();
        // let firstOrDefaultAsync = await history.firstOrDefaultAsync(params, options);
        let firstOrDefaultAsync = await history.firstOrDefaultAsync(params);
        console.log("SELECT ALL ASYNC", JSON.stringify(selectAllAsync));
        console.log("SELECT ONE ASYNC", JSON.stringify(firstOrDefaultAsync));

        // Data para ser inserida
        let data = {
            tenant: "d3486ae9-136e-5856-bc42-212385ea7970",
            contact: "d3486ae9-136e-5856-bc42-212385ea7970",
            mean_contact: "5511981979722333",
            client_id:"45599963233",
            origin: "testeUPDATE",
            context: "testando",
            status: true
        }

        await history.saveAsync(data);
        console.log("SAVED ASYNC");

        // Data para ser deletada
        // let del = {
        //     tenant: "d3486ae9-136e-5856-bc42-212385ea7970",
        //     contact: "d3486ae9-136e-5856-bc42-212385ea7970",
        //     mean_contact: "gabemariim@gmail.com",
        //     client_id: "45599269859"
        // }

        // await optin.deleteAsync(data);
        // console.log("DELETED ASYNC");
    } catch (error) {
        console.log(error);
    }
}

testeHistory();