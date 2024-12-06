const sentenceTag = document.querySelector(`input[type = 'text']`);
const typesizeTag = document.querySelector(`input[name] ="typesize"]`);
const outputTag = document.querySelector('textarea.output');
const originalText = outputTag.value;

//when I type my sentence tag, update the output tag accordingly
//If there's no value, put in the original text
sentenceTag.addEventListener('keyup', function () {
  if (this.value) {
    outputTag.value = this.value;
  } else {
    outputTag.value = originalText;
  }
});

//when I type my output tag, update the sentence tag accordingly
outputTag.addEventListener('keyup', function () {
  sentenceTag.value = this.value;
});

//when I change my typesize slider, update the text next to it AND,
//change the outputTag's font size
