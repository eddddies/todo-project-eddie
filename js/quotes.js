const quote = document.querySelector("#quote span:first-child")
const author = document.querySelector("#quote span:last-child")

const quotesList = [
    {
        quote : "성공하기까지는 항상 실패를 거친다",
        author : '미키 루니'
    },
    {
        quote : "나머지 인생을 설탕물이나 팔면서 보내고 싶습니까, 아니면 세상을 바꿔놓을 기회를 갖고 싶습니까?",
        author : '스티브 잡스'
    },
    {
        quote : "과거에서 교훈을 얻을 수는 있어도 과거 속에 살 수는 없다.",
        author : '린든 B. 존슨'
    },
    {
        quote : "과거를 애절하게 들여다보지 마라. 다시 오지 않는다. 현재를 현명하게 개선하라. 너의 것이니. 어렴풋한 미래를 나아가 맞으라. 두려움 없이.",
        author : '헨리 워즈워스 롱펠로우'
    }
]

const todaysQuote = quotesList[Math.floor(Math.random() * quotesList.length)]


quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;
