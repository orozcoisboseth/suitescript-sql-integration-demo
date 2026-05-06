const sqlMock = require('../src/mock/sql_storage_mock');

const payload = { reference: 'SO-1001' };

const firstInsert = sqlMock.insert(payload);
const secondInsert = sqlMock.insert(payload);

console.assert(firstInsert.success === true, 'First insert should succeed');
console.assert(firstInsert.duplicated === false, 'First insert should not be duplicate');

console.assert(secondInsert.success === true, 'Second insert should succeed');
console.assert(secondInsert.duplicated === true, 'Second insert should be duplicate');

console.assert(
  firstInsert.externalId === secondInsert.externalId,
  'External ID must be the same for duplicates'
);

console.log('SQL mock idempotency test passed');
