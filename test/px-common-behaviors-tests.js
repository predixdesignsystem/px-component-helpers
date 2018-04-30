/**
 * @license
 * Copyright (c) 2018, General Electric
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

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

suite('Clone object', function() {
  let obj = {
    foo: 'bar',
    baz: {
      a:1,
      b:2
    },
    keyword: Infinity,
    arr: [1,2,3],
    fn: function() { return true; }
  };
  suiteSetup(() => {
    fx = fixture('CommonBehaviorFixture');
  });

  test('copy into new obj works', function() {
    let copy = fx.clone(obj);
    assert.deepEqual(obj,copy);
  });

  test('copy keeps', function() {
    let copy = {
      existing: true
    }
    copy = fx.clone(obj, copy);

    assert.isTrue(copy.existing);
    delete copy.existing;
    assert.deepEqual(obj,copy);

  });
});
