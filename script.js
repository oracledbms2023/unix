const answer1 = document.getElementById("copyResult1");
const answer2 = document.getElementById("copyResult2");
const answer3 = document.getElementById("copyResult3");
const answer4 = document.getElementById("copyResult4");
const answer5 = document.getElementById("copyResult5");




const copy1   = document.getElementById("copyButton1");
const copy2   = document.getElementById("copyButton2");
const copy3   = document.getElementById("copyButton3");
const copy4   = document.getElementById("copyButton4");
const copy5   = document.getElementById("copyButton5");




const selection = window.getSelection();
const range = document.createRange();


const textToCopy1 = document.getElementById("textToCopy1");
const textToCopy2 = document.getElementById("textToCopy2");
const textToCopy3 = document.getElementById("textToCopy3");
const textToCopy4 = document.getElementById("textToCopy4");
const textToCopy5 = document.getElementById("textToCopy5");




copy1.addEventListener('click', function(e) {
    range.selectNodeContents(textToCopy1);
    selection.removeAllRanges();
    selection.addRange(range);
    const successful = document.execCommand('copy');
    if(successful){
      answer1.innerHTML = 'C';
    } else {
      answer1.innerHTML = 'U';  
    }
    window.getSelection().removeAllRanges()
});

copy2.addEventListener('click', function(e) {
    range.selectNodeContents(textToCopy2);
    selection.removeAllRanges();
    selection.addRange(range);
    const successful = document.execCommand('copy');
    if(successful){
      answer2.innerHTML = 'C';
    } else {
      answer2.innerHTML = 'U';  
    }
    window.getSelection().removeAllRanges()
});

copy3.addEventListener('click', function(e) {
    range.selectNodeContents(textToCopy3);
    selection.removeAllRanges();
    selection.addRange(range);
    const successful = document.execCommand('copy');
    if(successful){
      answer3.innerHTML = 'C';
    } else {
      answer3.innerHTML = 'U';  
    }
    window.getSelection().removeAllRanges()
});

copy4.addEventListener('click', function(e) {
  range.selectNodeContents(textToCopy4);
  selection.removeAllRanges();
  selection.addRange(range);
  const successful = document.execCommand('copy');
  if(successful){
    answer4.innerHTML = 'C';
  } else {
    answer4.innerHTML = 'U';  
  }
  window.getSelection().removeAllRanges()
});

copy5.addEventListener('click', function(e) {
  range.selectNodeContents(textToCopy5);
  selection.removeAllRanges();
  selection.addRange(range);
  const successful = document.execCommand('copy');
  if(successful){
    answer5.innerHTML = 'C';
  } else {
    answer5.innerHTML = 'U';  
  }
  window.getSelection().removeAllRanges()
});

