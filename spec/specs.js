describe('sentence', function() {
  it("will take a sentence and return it", function() {
    expect(sentence("This root beer is good.")).to.eql("This root beer is good.");
  });
});

describe('arrayOfSentence', function() {
  it("will turn a sentence in an array of words", function() {
    expect(arrayOfSentence("This root beer is good.")).to.eql(["This", "root", "beer", "is", "good." ])
  })
})
