const sentenceTag = document.querySelector(`input[type = 'text']`);

const typesizeTag = document.querySelector(`input[name = 'typesize']`);
const typesizeOutput = document.querySelector(`span.typesize-output`);

const fontweightTag = document.querySelector(`input[name ='fontweight']`);
const fontweightOutput = document.querySelector(`span.fontweight-output`);

const lineheightTag = document.querySelector(`input[name = 'leading']`);
const lineheightOutput = document.querySelector(`span.lineheight-output`);

const italicTag = document.querySelector(`input[name = 'italic']`);

const typefaceTag = document.querySelector(`select[name ='typeface']`);

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
typesizeTag.addEventListener('input', function () {
  outputTag.style.fontSize = this.value + 'px';
  typesizeOutput.innerHTML = this.value + 'px';
});

//when I change my fontweight slider, update the fontweight next to it AND,
//change the outputTag's fontweight
fontweightTag.addEventListener('input', function () {
  outputTag.style.fontWeight = this.value;
  fontweightOutput.innerHTML = this.value;
});

//when I change my leading slider, update the text next to it AND,
//change the outputTag's leading
lineheightTag.addEventListener('input', function () {
  outputTag.style.lineHeight = this.value;
  lineheightOutput.innerHTML = this.value;
});

//when I change my italic checkbox, update the font style to either
//normal or italic depending if it's checked or unchecked
italicTag.addEventListener('change', function () {
  if (this.checked) {
    outputTag.style.fontStyle = 'italic';
  } else {
    outputTag.style.fontStyle = 'normal';
  }
});

//when I change the typeface, update the outputTag's typeface
typefaceTag.addEventListener('input', function () {
  outputTag.style.fontFamily = this.value;
});
