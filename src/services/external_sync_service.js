/**
 * External Sync Service (Demo)
 *
 * Handles business logic for sending NetSuite transactions
 * to an external SQL-based system via an API adapter.
 */

define(['../adapters/external_api_adapter'], function (apiAdapter) {

    /**
     * Sends a transaction to the external system.
     * @param {Object} trx
     * @param {number} trx.id - NetSuite record internal ID
     * @param {string} trx.type - NetSuite record type
     */
    function sendTransaction(trx) {

        // Build reference similar to real integration
        var referencePrefix = trx.type === 'salesorder'
            ? 'SO'
            : 'PO';

        var payload = {
            reference: referencePrefix + '-' + trx.id,
            sourceSystem: 'NetSuite',
            timestamp: new Date().toISOString()
        };

        // Call external API via adapter (mock)
        var response = apiAdapter.send(payload);

        if (!response || !response.success) {
            throw new Error('Failed to sync transaction with external system');
        }

        return {
            success: true,
            externalId: response.externalId,
            duplicated: response.duplicated === true
        };
    }

    return {
        sendTransaction: sendTransaction
    };
});
