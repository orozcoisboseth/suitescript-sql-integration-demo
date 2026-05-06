const service = require('../src/services/external_sync_service');

const result = service.sendTransaction({
  id: 123,
  type: 'salesorder'
});

console.assert(result.success === true, 'Service should return success');
console.assert(result.externalId, 'Service should return an externalId');

console.log('✅ External sync service test passed:', result);
