module.exports = {
    fields: {
        client_id: "text",
        contact: "uuid",
        context: "text",
        created: { 
            type: "timestamp",
            default: "dateNow"
        },
        history_id: {
            type: "uuid",
            default: "timeUuid"
        },
        mean_contact: "text",
        origin: "text",
        status: "boolean",
        tenant: "uuid"
    },
    keys : [["tenant", "contact"], "created", "status"],
    table: "history",
}