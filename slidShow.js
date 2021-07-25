let count = 0;
const mainElement = document.querySelector("div.main>img");
const url = [
"https://content-jp.drive.amazonaws.com/v2/download/presigned/J7xpawMKChWRcgjSltPAAGIKt4T0yaBytXW8vDF_3VkeJxFPc?download=true",
"https://content-jp.drive.amazonaws.com/v2/download/presigned/o55G8Lbbf1GUvGZQaE5-2ybadScc-22dHg_4cDnujNUeJxFPc?download=true",
"https://content-jp.drive.amazonaws.com/v2/download/presigned/qML5PAPI8eroCnCF4Os61GGwaUER6dKL_LcMeJJnItoeJxFPc?download=true",
"https://content-jp.drive.amazonaws.com/v2/download/presigned/80X2NQdeimPWDnrGRA50hv7TrOA01rj-zjdlpcDOxmQeJxFPc?download=true",
"https://content-jp.drive.amazonaws.com/v2/download/presigned/cngc__YoOiwsJeBJOwO-ChLNIOTvv2-M5GXFNd2LqEEeJxFPc?download=true",
"https://content-jp.drive.amazonaws.com/v2/download/presigned/_hupeLkbrjuqhgLlz9HLbmWzN4m_RJyT1w6OMoW2eboeJxFPc?download=true",
"https://content-jp.drive.amazonaws.com/v2/download/presigned/kG53xAmD2-GdwbdmbkxmQjRheDZY8mzlS5Mk9f7uDGkeJxFPc?download=true",
"https://content-jp.drive.amazonaws.com/v2/download/presigned/g6N2o-ooUVtVaGjttRbA-DP4NGT8Q9CwYWfvjzqJgCkeJxFPc?download=true",
"https://content-jp.drive.amazonaws.com/v2/download/presigned/GD4vWmNNPDRAUwqwQ0WHrMzXeoYPOoqf8K14hSS-cx4eJxFPc?download=true"
];

function left() {
  // console.log(count);
  count--;
  if (count <= 0) {
    count = url.length-1;
  }
mainElement.setAttribute('src', url[count]);
}
function right() {
  count++;
  if (count >= url.length) {
    count = 0;
  }
mainElement.setAttribute('src', url[count]);
}

let timer;
let nowPlaying = false;

function autoPlay() {
right();
  timer = setTimeout(function() {
    autoPlay();
  }, 1000);
}

function play() {
  if (nowPlaying) {
    return;
  }
  nowPlaying = true;
  autoPlay();
}

function stop() {
clearTimeout(timer);
  nowPlaying = false;
}

function reset() {
  stop();
  mainElement.setAttribute('src', url[0]);
  count = 0;
}
