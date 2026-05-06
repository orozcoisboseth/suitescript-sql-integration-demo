/**
 * @NApiVersion 2.x
 * @NScriptType Suitelet
 *
 * Demo Suitelet
 * Orchestrates sending a transaction to an external SQL system
 */

define(['../services/external_sync_service'], function (syncService) {

    function onRequest(context) {

        if (context.request.method !== 'POST') {
            context.response.write({
                output: JSON.stringify({
                    success: false,
                    message: 'POST request required'
                })
            });
            return;
        }

        var params = context.request.parameters;

        var result = syncService.sendTransaction({
            id: params.recordId,
            type: params.recordType
        });

        context.response.write({
            output: JSON.stringify({
                success: true,
                externalId: result.externalId
            })
        });
    }

    return {
        onRequest: onRequest
    };
});
