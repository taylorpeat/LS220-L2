var paragraph = "In the midway of this our mortal life,\
                I found me in a gloomy wood, astray\
                Gone from the path direct: and e'en to tell\
                It were no easy task, how savage wild\
                That forest, how robust and rough its growth,\
                Which to remember only, my dismay\
                Renews, in bitterness not far from death.\
                Yet to discourse of what there good befell,\
                All else will I relate discover'd there.\
                How first I enter'd it I scarce can say,\
                Such sleepy dullness in that instant weigh'd\
                My senses down, when the true path I left,\
                But when a mountain's foot I reach'd, where clos'd\
                The valley, that had pierc'd my heart with dread,\
                I look'd aloft, and saw his shoulders broad\
                Already vested with that planet's beam,\
                Who leads all wanderers safe through every way."

var new_paragraph = paragraph.replace(/\.|,|:|\s(?=\s)/g, "");
console.log(new_paragraph);

var words_array = new_paragraph.split(" ");
console.log(words_array);

var word_counter = {};

for (word of words_array) {
  if (word_counter[word] == undefined) {
    word_counter[word] = 1;  
  } else {
    word_counter[word] += 1;
  }
}

console.table(word_counter);

function findMax() {
  var most_frequent_word = "";
  var highest_frequency = 0;
  for (word in word_counter) {
    if (word_counter[word] < highest_frequency) {
    } else {
      highest_frequency = word_counter[word];
      most_frequent_word = word;
    }
  }
  return { word: most_frequent_word, freq: highest_frequency }
}

console.log("Total word count is " + words_array.length);
console.log("Most frequent word is:\n" + findMax().word + " - " + findMax().freq);