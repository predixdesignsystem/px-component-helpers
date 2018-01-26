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
