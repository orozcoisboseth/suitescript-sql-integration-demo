/**
 * @NApiVersion 2.x
 * @NScriptType ClientScript
 *
 * Demo Client Script
 * Redirects a transaction to the SQL integration Suitelet
 */

define(['N/currentRecord', 'N/url'], function (currentRecord, url) {

    function redirectToExternalSync() {
        var record = currentRecord.get();

        var suiteletUrl = url.resolveScript({
            scriptId: 'customscript_send_sql_demo',
            deploymentId: 'customdeploy_send_sql_demo',
            params: {
                recordId: record.id,
                recordType: record.type
            }
        });

        window.location.href = suiteletUrl;
    }

    return {
        redirectToExternalSync: redirectToExternalSync
    };
});
