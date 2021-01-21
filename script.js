const quizData = [
  {
    question: 'How old is Florin?',
    a: '10',
    b: '17',
    c: '26',
    d: '110',
    correct: 'c'
  },
  {
    question: 'What is the most used programming language in 2019?',
    a: 'Java',
    b: 'C',
    c: 'Python',
    d: 'Javascript',
    correct: 'd'
  },
  {
    question: 'Who is the president of US?',
    a: 'Florin Pop',
    b: 'Donald Trump',
    c: 'Ivan Saldano',
    d: 'Mihai Andrei',
    correct: 'b'
  },
  {
    question: 'What does HTML stand for?',
    a: 'Hypertext Markup Language',
    b: 'Cascading Style Sheet',
    c: 'Jason Object Notation',
    d: 'Helicopters Terminal Motorboats Lamborginis',
    correct: 'a'
  },
  {
    question: 'What year was JavaScript launched?',
    a: '1996',
    b: '1995',
    c: '1994',
    d: 'none of the above',
    correct: 'b'
  }
]

const quiz = document.getElementById('quiz');
const answerEls = document.querySelectorAll('.answer');
const questionEl = document.getElementById('question');
const a_text = document.getElementById('a_text');
const b_text = document.getElementById('b_text');
const c_text = document.getElementById('c_text');
const d_text = document.getElementById('d_text');
const submitBtn = document.getElementById('submit');

let currentQuiz = 0;
let score = 0;

loadQuiz();

function loadQuiz(){
  deselectAnswer();

  const currentQuizData = quizData[currentQuiz];

  questionEl.innerText = currentQuizData.question;
  a_text.innerText = currentQuizData.a;
  b_text.innerText = currentQuizData.b;
  c_text.innerText = currentQuizData.c;
  d_text.innerText = currentQuizData.d;
}

function getSelected(){
  let answer = undefined;

  answerEls.forEach((answerEl) => {
    if (answerEl.checked) { 
      answer = answerEl.id;
    }
  });

  return answer;
}

function deselectAnswer() {
  answerEls.forEach((answerEl) => {
    answerEl.checked = false;
  });
}

submitBtn.addEventListener('click', () => {
  // check to see the answer
  const answer = getSelected();

  console.log(answer);

  if (answer) {
    if (answer === quizData[currentQuiz].correct) {
      score++;
    }

    currentQuiz++;
    if (currentQuiz < quizData.length) {
      loadQuiz();
    } else {
      // HTMLString을 넣으려면 innerHTML을 쓰는 게 좋고,
      // element 안에 text만 넣으려면 innerText를 쓰는 게 좋음.
      quiz.innerHTML = `
        <h2>
          You answered correctly at ${score}/${quizData.length} questions.
        </h2>
        
        <button onClick="location.reload()">Reload</button>
      `;
      // Location.reload() 메서드는 새로고침 버튼처럼 현재 리소스를 다시 불러옵니다.
      // 이거는 맨 처음 html 페이지를 불러온다기 보다는, 새로고침 버튼을 누를 때와 똑같은 기능을 하는거임.
      // 그래서 html페이지 여러 개가 연결된 것이 아니더라도, 뭔가 js로 html에 변화를 줬는데 이 함수를 호출하면
      // 해다 html 페이지의 원래 처음 상태로 되돌리는 기능을 하는 것. 새로고침이랑 똑같음.
    }
  }  
});