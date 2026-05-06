/**
 * External API Adapter (Demo)
 * Simulates communication with a .NET API that persists data in SQL Server
 */

define(['../mock/sql_storage_mock'], function (sqlMock) {

    function send(payload) {
        return sqlMock.insert(payload);
    }

    return {
        send: send
    };
});
