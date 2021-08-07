const quiz = [
  {
    question: '中国語で「勉強」の意味は？',
    answers: [
      '喧嘩っ早い',
      '無理やり',
      '細かい',
      '意地悪な'
    ],
    correct: '無理やり'
  },{
    question: '実在する生き物は？',
    answers: [
      'キリンコウモリ',
      'ライオンコウモリ',
      'ウサギコウモリ',
      'オオカミコウモリ'
    ],
    correct: 'ウサギコウモリ'
  },{
    question: 'カスタネットの名前の由来となったものは？',
    answers: [
      'はさみの刃',
      '貝の殻',
      '栗くりの実',
      '両手'
    ],
    correct: '栗くりの実'
  }
];
const quizLength = quiz.length;
let QuizIndex = 0;
let score = 0;

//「$」でHTMLのオブジェクトが入っていることが理解しやすい
const $button = document.getElementsByTagName('button');
const buttonLength = $button.length;
//クイズ」の問題文、選択肢を定義
const setupQuiz = () => {
  document.getElementById('js-question').textContent = quiz[QuizIndex].question;
  let buttonIndex = 0;
  while(buttonIndex < buttonLength){
    $button[buttonIndex].textContent = quiz[QuizIndex].answers[buttonIndex]
    buttonIndex++;
  };
};
setupQuiz();

//ボタンをクリックしたら正解判定
//e = イベントのオブジェクト
//target = クリックされたボタン


const clickHandler = (e) => {
  if(quiz[QuizIndex].correct === e.target.textContent){
    window.alert('正解！');
    $button.style.color = '#EF93B6';
    score++;
  } else {
    window.alert('不正解！');
  };
  QuizIndex++;
  if(QuizIndex < quizLength) {
    //問題数がまだあればこちらを実行
    setupQuiz();
  } else {
      //問題巣がもうなければこちらを実行
      window.alert('終了！あなたの正解数は' + score + '/' + quizLength + 'です！');
    };
};

let HandlerIndex = 0;
while(HandlerIndex < buttonLength){
  $button[HandlerIndex].addEventListener('click', (e) => {
    clickHandler(e);
  });
  HandlerIndex++;
};
