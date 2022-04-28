const input = document.getElementById("message-input");
const sendButton = document.getElementById("give-fact-button");
const messageZone = document.getElementById("message-zone");

let answersArr = [
  "Максим Рильський дуже любив музику. Його вчив сам Микола Лисенко, батьків друг, у родині якого майбутній письменник навіть деякий час жив.",
  "Максим Рильський працював учителем української мови та літератури, а в Українському інституті лінгвістичної освіти читав курс української стилістики і практики перекладу.",
  "Дуже любив природу, що знайшло відображення в багатьох його поезіях.",
  "Максим Рильський був пізньою дитиною, він народився, коли його батькові було 54 роки.",
  "У 1931 році, на свій день народження, був заарештований за приналежність до української контрреволюційної організації.",
  "Був одружений з жінкою, що була старша за нього на 9 років, всиновив її 6-річного сина.",
  "Усього раз порушив подружню вірність, але дружина його пробачила, адже тоді вони жили на відстані.",
  "Разом зі своїм другом Остапом Вишнею ходили на полювання під гаслом “Хай живуть зайці!”",
  "Перший його вірш був надрукований, коли йому було 12 років.",
  "Перша збірка («На білих островах») вийшла, коли Максиму Рильському було 15.",
  "Друзі називали поета «Максимом Золоте Серце», адже він опікувався долею арештованих колег, допомагав звільненим з ув’язнення, став опікуном над дітьми свого старшого брата Івана, що залишилися сиротами. Його життєвим кредо стали слова мами, Меланії Федорівни: «Коли хочеш зробити комусь зло – десять раз подумай і не роби, а коли хочеш зробити добро – роби його не роздумуючи».",
  "Його  творчий доробок складає сотні перекладів та понад 40 збірок віршів.",
  "Поета назвали на честь ватажка гайдамацького повстання Максима Залізняка.",
];
let n;

//-------------------------------RANDOM FACTS--------------------------------
let warn = true;
generateFact();
console.log("it works");
sendButton.addEventListener("click", function (e) {
  //console.log('userMsgCounter',userMsgCounter,'numberOfMsgToStart', numberOfMsgToStart);
  //setTimeout(()=>{newUserMessage(input.value)}, 300)
  //newUserMessage(input.value);
  if (answersArr.length === 0) {
    sendButton.style.background = "gray";
    if (warn) {
      warn = 0;
      newUserMessage(input.value);

    }
  } else {
    newUserMessage(input.value);
  }

});
input.addEventListener("keydown", function (e) {
  if (e.keyCode === 13) {
    console.log(
      "userMsgCounter",
      userMsgCounter,
      "numberOfMsgToStart",
      numberOfMsgToStart
    );
    newUserMessage(input.value);
    input.value = "Розкажіть ще один цікавий факт про Рильського!";
  }
});
function newUserMessage(msg) {
  let userMessage = document.createElement("div");
  userMessage.innerText = msg;
  userMessage.classList.add("user-message");
  messageZone.appendChild(userMessage);
  userMessage.style.right =
    -(messageZone.clientWidth - userMessage.clientWidth) + 30 + "px";
  messageZone.innerHTML = messageZone.innerHTML + "<br>";
  input.value = "Розкажіть ще один цікавий факт про Рильського!";
  setTimeout(generateFact, 400);
}

function newBotMessage(msg) {
  let botMessage = document.createElement("div");
  botMessage.innerHTML = msg;
  botMessage.classList.add("bot-message");
  messageZone.appendChild(botMessage);
  messageZone.innerHTML = messageZone.innerHTML + "<br>";
}
function generateFact() {
  let random_index = Math.floor(Math.random() * (answersArr.length - 1));
  randomMsg = (answersArr.length === 0) ? "На жаль, це всі цікаві факти про Максима Рильського." : answersArr[random_index];
  //  randomMsg = answersArr[random_index];
  answersArr.splice(random_index, 1);
  console.log("A: \n" + answersArr);
  newBotMessage(randomMsg);
  //$("#message-zone").scrollTop();
  h = messageZone.scrollHeight;
  $("#message-zone").animate({ scrollTop: h }, 1000);
}

//-------------------------TELEPHONE TIMEEEEEEEEEEE-----------------------------
setInterval(() => {
  let date = new Date();
  let min = date.getMinutes();
  let hours = date.getHours();
  document.querySelector("#min").innerHTML = normalize(min);
  document.querySelector("#hours").innerHTML = hours;
  //console.log(normalize(hours), ':', normalize(min))
}, 1000);
function normalize(n) {
  if (n < 10) return "0" + n;
  else return n;
}
