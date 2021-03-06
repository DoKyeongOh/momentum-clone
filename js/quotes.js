const quotes = [
  {
    quote: "You cannot change what you are, only what you do.",
    korean: "본연의 모습은 바꿀 수없다. 바꿀 수 있는 것은 자신의 행동 뿐.",
    author: "Philip Pullman",
  },
  {
    quote: "Lay a firm foundation with the bricks that other throw at you.",
    korean:
      "다른 사람들이 당신을 향해 던지는 돌을 가지고 튼튼한 기반을 쌓아라.",
    author: "David Brinkley",
  },
  {
    quote:
      "Change the way you look at things and the things you look at change.",
    korean:
      "당신이 세상을 바라보는 방법을 바꾸면 당신이 보는 세상은 달라질 것이다.",
    author: "Wayne Dyer",
  },
  {
    quote:
      "If you run you stand a chance of losing, but if you don't run you've already lost.",
    korean:
      "당신이 경주한다면 패배할 가능성도 있겠지만, 경주하지 않는다면 당신은 이미 패배한 것이다.",
    author: "Barack Obama",
  },
  {
    quote: "If you have always done it that way, it is probably wrong.",
    korean:
      "지금까지 항상 그 방식대로 해 온 것이라면, 그 방식은 아마도 잘못된 것이다.",
    author: "Charles Kettering",
  },
  {
    quote:
      "The greatest mistake you can make in like is to be continually fearing you will make one",
    korean:
      "당신이 인생에서 저지를 수 있는 가장 큰 실수는 실수를 할 까봐 계속 두려워 한 것이다.",
    author: "Elbert Hubbard",
  },
  {
    quote: "If work were so pleasant, the rich would keep it for themseleves.",
    korean:
      "만약 일 하는 것이 그렇게 좋은 것이라면, 부자들이 일하는 것을 자신들만의 것으로 만들었을 것이다.",
    author: "Mark Twain",
  },
  {
    quote:
      "I cannot say whether things will get better if we change; what Ican say is they must change if they are to get better",
    korean:
      "우리가 변할 때 더 나아 질 것이라고 장담할 수는 없지만, 확실한 것은 더 나아지고 싶다면 변해야 한다는 것이다.",
    author: "Georg C. Lichtenberg",
  },
  {
    quote:
      "To create more positive results in your life, replace 'if only' with 'next time'.",
    korean:
      "당신의 인생에서 긍정적인 결과를 얻고 싶다면, '~햤더라면 좋았을 텐데'대신, '다음에는~'이라는 단어를 써라",
    author: "Unknown",
  },
  {
    quote:
      "Not everything that is faced can be changed, but nothing can be changed until it is faced.",
    korean:
      "당신이 대면하는 모든 것을 바꿀 수는 없다. 그러나 대면하지 않는다면 아무것도 바뀌지 않는다.",
    author: "James Baldwin",
  },
];

const quote = document.querySelector("#quotes");
const quoteEnglish = document.createElement("span");
const quoteKorean = document.createElement("span");
const author = document.createElement("span");
function getBrElement() {
  return document.createElement("br");
}

function addQuoteProperty(property) {
  //   quote.appendChild(getBrElement());
  quote.appendChild(property);
}

addQuoteProperty(quoteEnglish);
// addQuoteProperty(quoteKorean);
addQuoteProperty(author);

const quoteData = quotes[Math.floor(Math.random() * quotes.length)];

quoteEnglish.innerText = quoteData.quote + " - ";
quoteKorean.innerText = quoteData.korean;
author.innerText = quoteData.author;
