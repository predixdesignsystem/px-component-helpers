let fx;

suite('Unique IDs', function() {
  let id;
  suiteSetup(() => {
    fx = fixture('CommonBehaviorFixture');
  });

  test('generateID method works', function() {
    id = fx.generateRandomID('test-');
    assert.equal(id.split('-')[0], 'test');
    assert.equal(id.split('-')[1].length, 10);
    assert.equal(Px.uniqueIds.size, 1);
    assert.isTrue(Px.uniqueIds.has(id));
  });

  test('removeID method works', function() {
    fx.removeID(id);
    assert.equal(Px.uniqueIds.size, 0);
    assert.isFalse(Px.uniqueIds.has(id));
  });
});
