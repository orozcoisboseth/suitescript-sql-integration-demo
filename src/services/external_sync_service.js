/**
 * External Sync Service (Demo)
 *
 * Handles business logic for sending NetSuite transactions
 * to an external SQL-based system via an API adapter.
 */

(function (root, factory) {

  if (typeof define === 'function') {
    // NetSuite (SuiteScript AMD)
    define(['../adapters/external_api_adapter'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // Node.js (local tests)
    module.exports = factory(
      require('../adapters/external_api_adapter')
    );
  }

}(this, function (apiAdapter) {

  /**
   * Sends a NetSuite transaction to an external system (demo).
   * @param {Object} trx
   * @param {number} trx.id
   * @param {string} trx.type
   */
  function sendTransaction(trx) {

    var referencePrefix = trx.type === 'salesorder'
      ? 'SO'
      : 'PO';

    var payload = {
      reference: referencePrefix + '-' + trx.id,
      sourceSystem: 'NetSuite',
      timestamp: new Date().toISOString()
    };

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
}));
