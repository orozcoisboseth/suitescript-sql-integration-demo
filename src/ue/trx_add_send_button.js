/**
 * @NApiVersion 2.x
 * @NScriptType UserEventScript
 *
 * Demo User Event
 * Adds a button to send the transaction to an external system
 */

define([], function () {

    function beforeLoad(context) {

        // Only add the button in VIEW mode
        if (context.type !== context.UserEventType.VIEW) {
            return;
        }

        var form = context.form;

        // Attach client script
        form.clientScriptModulePath = '../cl/trx_redirect_to_suitelet.js';

        // Add action button
        form.addButton({
            id: 'custpage_send_external',
            label: 'Send to External System',
            functionName: 'redirectToExternalSync'
        });
    }

    return {
        beforeLoad: beforeLoad
    };
});
