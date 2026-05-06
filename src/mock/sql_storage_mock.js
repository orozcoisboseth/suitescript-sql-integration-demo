/**
 * SQL Storage Mock
 * Simulates SQL Server persistence and idempotency
 */

(function (root, factory) {

  if (typeof define === 'function') {
    // NetSuite (AMD)
    define([], factory);
  } else if (typeof module === 'object' && module.exports) {
    // Node.js (local tests)
    module.exports = factory();
  }

}(this, function () {

  const storage = {};

  function insert(payload) {

    if (storage[payload.reference]) {
      return {
        success: true,
        externalId: storage[payload.reference],
        duplicated: true
      };
    }

    const newId = Math.floor(Math.random() * 100000);
    storage[payload.reference] = newId;

    return {
      success: true,
      externalId: newId,
      duplicated: false
    };
  }

  return {
    insert
  };
}));

