/**
 * External API Adapter (Demo)
 * Simulates communication with a .NET API that persists data in SQL Server
 */


(function (root, factory) {
  if (typeof define === 'function') {
    define(['../mock/sql_storage_mock'], factory);
  } else if (typeof module === 'object' && module.exports) {
    module.exports = factory(require('../mock/sql_storage_mock'));
  }
}(this, function (sqlMock) {

  function send(payload) {
    return sqlMock.insert(payload);
  }

  return { send };
}));

