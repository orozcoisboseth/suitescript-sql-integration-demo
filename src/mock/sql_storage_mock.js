/**
 * SQL Storage Mock
 * Simulates SQL Server persistence and idempotency
 */

var storage = {};

function insert(payload) {

    if (storage[payload.reference]) {
        return {
            success: true,
            externalId: storage[payload.reference],
            duplicated: true
        };
    }

    var newId = Math.floor(Math.random() * 100000);
    storage[payload.reference] = newId;

    return {
        success: true,
        externalId: newId,
        duplicated: false
    };
}

return {
    insert: insert
};
