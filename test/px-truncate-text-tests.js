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

describe('px-truncate-text', () => {
  let fx;
  let truncate;

  beforeEach(done => {
    fx = fixture('TruncateTextFixture');
    flush(() => {
      truncate = Polymer.dom(fx.root).querySelector('px-truncate-text');
      done();
    });
  });

  it('divides string up based on default `characters` count', () => {
    expect(truncate._leftText).to.equal('Steam Generator Alpha A.a978');
    expect(truncate._rightText).to.equal('47120ds9');
  });

  it('divides string when a custom `characters` count is set', () => {
    truncate.characters = 4;
    expect(truncate._leftText).to.equal('Steam Generator Alpha A.a9784712');
    expect(truncate._rightText).to.equal('0ds9');
  });

  it('does not divide the string if the `characters` count is equal to or longer than `text` length', () => {
    truncate.text = 'Steam1';
    truncate.characters = 6;
    expect(truncate._leftText).to.equal('Steam1');
    expect(truncate._rightText).to.equal('');
    truncate.characters = 7;
    expect(truncate._leftText).to.equal('Steam1');
    expect(truncate._rightText).to.equal('');
  });
});
