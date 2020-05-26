module.exports = {
    fields: {
        tenant: "uuid",
        contact: "uuid",
        mean_contact: "text",
        client_id:"text",
        origin: "text",
        context: "text"
    },
    keys : [["tenant", "contact"], "mean_contact", "client_id"],
    table: "optin",
}