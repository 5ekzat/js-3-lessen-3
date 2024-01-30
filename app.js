//Замыкания и Рекурсия

// let address='Miss'

// function getName(){
//     let girl='Aida'
// }
// getName()

//1


// function createAddress(type){
//    const address=type.toUpperCase()
//    return function(name){
//     return console.log(`${address} ${name}`);
//    }
// }
// const mister= createAddress('Mister')
// const miss= createAddress('Miss')
// mister('Bekzat')
// mister('Urmat')
// miss('Aknur')


//2

// function player(name){
//     let ball=0
//     return function(){
//         ball++
//         return console.log(`${name}- ${ball}`);
//     }
// }
// const playerOne= player('Bekzat')
// const playerTwo= player('Urmat')
// playerOne()
// playerOne()
// playerTwo()




// HOME WORK 
 



//showQuiz()
//setAnswer()
//checQuiz()
//nextQuiz()
//showResult()
//startQuiz()

const root = document.getElementById('root');

let quiz = [  
    {
        id: 1,
        suroo: 'В каком году Чынгызхан  был провозглашен ханом монголов?',
        jooptor: [
            '1206',
            '1200',
            '1210',
        ],
        tuuraJoop: '1206',
    },
    {
        id: 2,
        suroo: 'В каком году енисейские кыргызы были подчинены монголам?',
        jooptor: [
            '1210',
            '1207',
            '1200',
        ],
        tuuraJoop: '1207',
    },
        
    {
        id: 3,
        suroo: 'Кем была основано Золотая Орда?',
        jooptor: [
            'Чагатай',
            ' Жучу',
            'Батый',
        ],
        tuuraJoop: 'Батый',
     },
     {
        id: 4,
        suroo: 'Положение кыргызов после распада Джунгарского ханства?',
        jooptor: [
            'Они попали в зависимость от Китая',
            'Они сумели освободить свои земли от остатков джунгар',
            'Они попали в зависимость от казахских ханов',
        ],
        tuuraJoop: 'Они сумели освободить свои земли от остатков джунгар',
     },
     {
        id: 5,
        suroo: 'Укажите год образования государства Хайду?',
        jooptor: [
            '1269',
            '1255',
            '1250',
        ],
        tuuraJoop: '1269',
     },
     {
        id: 6,
        suroo: 'В каком году возникло госудаоство Моголистан и кто был его первым ханом?',
        jooptor: [
            '1361 ж/г Чынгызхан',
            '1348ж/г Токлук- Тимур',
            '1428 ж/г Улукбек',
        ],
        tuuraJoop: '1348ж/г Токлук- Тимур',
     },
     {
        id: 7,
        suroo: 'Укажите город, который является столицей государства Тимуридов',
        jooptor: [
            'Тараз',
            'Самарканд',
            'Бухара',
        ],
        tuuraJoop: 'Самарканд',
     },
     {
        id: 8,
        suroo: 'Укажите общего предка кыргызских родоплеменных объединений «правого крыла»',
        jooptor: [
            'Ак уул',
            'Куу уул',
            'Тагай бий.',
        ],
        tuuraJoop: 'Ак уул',
     },
     {
        id: 9,
        suroo: 'Кому принадлежала высшая власть в родоплеменном объединении кыргызов в XVI-XVIII веках?',
        jooptor: [
            'бию',
            'верховному бию',
            'баю',
        ],
        tuuraJoop: 'верховному бию',
     },
     {
        id: 10,
        suroo: 'Укажите год образования Джунгарского ханства?',
        jooptor: [
            '1635',
            '1620',
            '1615',
        ],
        tuuraJoop: '1635',
     },
];

let quizIndex = 0;
let countTuuraJoop = 0;

function showQuiz() {
    const { suroo, jooptor } = quiz[quizIndex];

    root.innerHTML = `
   <h5>${suroo}</h5>
   <ul>
       ${jooptor.map(joop => {
        return `<li onclick="setAnswer(event)">${joop}</li>`;
       }).join('')}
   </ul>
   `;
}

function setAnswer(event) {
    checkQuiz(event.target.innerText, quizIndex + 1);
    nextQuiz();
  
}

function checkQuiz(text, id) {
     const copyQuiz = quiz.find(el => el.id === id);
    const { tuuraJoop } = copyQuiz;
    if (tuuraJoop === text) {
        console.log('Tuura');
        ++countTuuraJoop;
    } else {
        console.log('tuura emes');
    }
}

function nextQuiz() {
    ++quizIndex;
    if (quizIndex === quiz.length) {
        showResult();
        return console.log('buttu');
    }
    console.log(quizIndex, '===', quiz.length);
    showQuiz();
    console.log(countTuuraJoop, 'tuura joop');
}

function showResult() {
    root.innerHTML=`
    <p onclick='startQuiz()'>Ты ответил правильно на ${countTuuraJoop} из ${quiz.length} вопросов.</p>
    `
    // console.log(`Ты ответил правильно на ${countTuuraJoop} из ${quiz.length} вопросов.`);
}

function startQuiz() {
    quizIndex = 0;
    countTuuraJoop = 0;
    showQuiz();
}

startQuiz();