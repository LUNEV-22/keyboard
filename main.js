var listText = Array(`В далекой Африке, на реке Замбези, есть настоящее чудо природы - грандиозный водопад Виктория. Его открыл в 1855 г. английский путешественник Давид Ливингстон и назвал в честь английской королевы. Ширина этого водопада составляет 1800 метров, а высота - 120 метров. Шум воды слышен за 25 километров, а еще дальше, километров за 40, видно высокое облако водяной пыли. Радуга играет в брызгах воды, множество ручейков стекает с противоположной водопаду стены каньона, и все новые каскады воды обрушиваются на них, увлекая за собой.`,
`Каждый из нас понимает очевидную вещь: курс на социально-ориентированный национальный проект не оставляет шанса для стандартных подходов. Как принято считать, предприниматели в сети интернет освещают чрезвычайно интересные особенности картины в целом, однако конкретные выводы, разумеется, функционально разнесены на независимые элементы. Сложно сказать, почему действия представителей оппозиции представляют собой не что иное, как квинтэссенцию победы маркетинга над разумом и должны быть призваны к ответу. Банальные, но неопровержимые выводы, а также сторонники тоталитаризма в науке подвергнуты целой серии независимых исследований. А ещё тщательные исследования конкурентов неоднозначны и будут смешаны с не уникальными данными до степени совершенной неузнаваемости, из-за чего возрастает их статус бесполезности.
С учётом сложившейся международной обстановки, консультация с широким активом предполагает независимые способы реализации распределения внутренних резервов и ресурсов. В целом, конечно, граница обучения кадров прекрасно подходит для реализации системы обучения кадров, соответствующей насущным потребностям. Для современного мира высокое качество позиционных исследований создаёт предпосылки для позиций, занимаемых участниками в отношении поставленных задач.
Являясь всего лишь частью общей картины, сторонники тоталитаризма в науке призывают нас к новым свершениям, которые, в свою очередь, должны быть рассмотрены исключительно в разрезе маркетинговых и финансовых предпосылок. А также акционеры крупнейших компаний лишь добавляют фракционных разногласий и объединены в целые кластеры себе подобных. А ещё акционеры крупнейших компаний, вне зависимости от их уровня, должны быть рассмотрены исключительно в разрезе маркетинговых и финансовых предпосылок. Следует отметить, что понимание сути ресурсосберегающих технологий выявляет срочную потребность первоочередных требований.`,
`Многочисленные территориальные споры между различными государствами из-за прохождения границ выглядят достаточно нелепо на фоне новейшего открытия западных ученых, которые установили, что все шесть материков Земли постепенно «стягиваются» в единое целое. Хотя уже достаточно давно было известно, что гигантские плиты, на которых лежат материки, находятся в движении, однако, согласно опубликованным в Лондоне сенсационным отчетам Университета штата Техас, громадные тектонические силы толкают материки навстречу друг другу. Математические модели показывают, что уже в ближайшие 40 млн лет исчезнет Средиземное море. На месте Турции, Италии, Греции и южной Франции образуется горная система, высота которой превзойдет Тибет.`,
`Санкт-Петербург основан в 1703 году. Санкт-Петербургу 27 мая 2003 года исполнилось 300 лет. На изучение данного материала отводится IV четверть. Статья напечатана в журнале «Наука и жизнь» No 12 за 2002 год. Журнал «Наука и жизнь» издается с октября 1934 года. Книга сдана в набор 29 мая 2003 года, а подписана к печати 24 июня 2003 года. Последняя перепись населения в России проведена в октябре 2002 года. 12 июня 1967 года запущена автоматическая станция «Венера-4» для исследования планеты Венера. `,
`Более сложная судьба ожидает Америку – первоначально она будет отдаляться от Европы и Африки из-за расширения Атлантического океана. Однако затем дно Атлантического океана расколется, его южная часть начнет погружаться в «земные глубины». В итоге северная часть Америки будет «присоединена» к юго-западной оконечности Африки, а южная - к Азии в районе Индокитая. `,
`Как уже неоднократно упомянуто, сторонники тоталитаризма в науке и по сей день остаются уделом либералов, которые жаждут быть в равной степени предоставлены сами себе. Идейные соображения высшего порядка, а также граница обучения кадров требует анализа дальнейших направлений развития. Таким образом, разбавленное изрядной долей эмпатии, рациональное мышление в значительной степени обусловливает важность поэтапного и последовательного развития общества.`,
`В своём стремлении улучшить пользовательский опыт мы упускаем, что многие известные личности будут в равной степени предоставлены сами себе. Не следует, однако, забывать, что сплочённость команды профессионалов создаёт предпосылки для переосмысления внешнеэкономических политик. В своём стремлении улучшить пользовательский опыт мы упускаем, что сторонники тоталитаризма в науке объединены в целые кластеры себе подобных.`)

text = listText[Math.floor(Math.random()*listText.length)];

const inputElement = document.querySelector('#input');
const textExampleElement = document.getElementById('textExample');

console.log(textExampleElement);

let letterId = 1;

let startMoment = null;
let started = false;

let letterCounter = 0;
let letterCounter_error = 0;

var lines = getLines(text);

init();

function init() {
    update();

    inputElement.focus();

    inputElement.addEventListener('keydown', function(event){
        const currentLineNumber = getCurrentLineNumber();
        const element = document.querySelector('[data-key="' + event.key.toLowerCase() + '"]');
        const currentLetter = getCurrentLetter();
        
        let isKey = event.key === currentLetter.original;
        let isEnter = event.key === 'Enter' && currentLetter.original === '\n';

        if (event.key !== 'Shift' && event.key !== 'CapsLock' && event.key !== 'Alt') 
            {
                letterCounter ++
            };

        if (!started) {
            started = true;
            startMoment = Date.now();
        }

        if (event.key.startsWith('F') && event.key.length > 1){
            return;
        };

        if (element) {
            element.classList.add('hint');
        };
        console.log(event.key, currentLetter.original)
    
        if (isKey || isEnter ) {
            letterId++;
            update();
        } else {
            event.preventDefault();

            if (event.key !== 'Shift' && event.key !== 'CapsLock' && event.key !== 'Alt') 
                {
                    letterCounter_error ++;

                    for (const line of lines) {
                        for (const letter of line) {
                            if (letter.original === currentLetter.original){
                                letter.success = false;
                            }
                        }
                    };
        
                    update();
                };
        };

        if (currentLineNumber != getCurrentLineNumber()){
            inputElement.value = '';
            event.preventDefault();

            started = false;
            const time = Date.now() - startMoment;
            document.querySelector('#wordsSpeed').textContent = Math.round(letterCounter / (time / 1000 / 60));
            document.querySelector('#errors').textContent = Math.floor(10000 * letterCounter_error / letterCounter) / 100 + '%';

            letterCounter = 0;
            letterCounter_error = 0;
        }
    });
    
    inputElement.addEventListener('keyup', function(event) {
        const element = document.querySelector('[data-key="' + event.key.toLowerCase() + '"]');
        if (element) {
            element.classList.remove('hint');
        };
    });

};

// Принимает длинную строку, возвращает массив строк со служебной информацией
function getLines(text) {
    const lines = [];

    let line = [];
    let idCounter = 0;

    for (const originalLetter of text){
        idCounter++;

        let letter = originalLetter;

        if (letter === ' ') {
            letter = '°';
        };

        if (letter === '\n') {
            letter = '¶\n';
        };

        line.push({
            id: idCounter,
            label: letter,
            original: originalLetter,
            success: true 
        });

        if (line.length >= 70 || letter === '¶\n'){
            lines.push(line);
            line = [];
        }
    };

    if (line.length > 0) {
        lines.push(line)
    };

    return lines;
};

// Принимает строку с объектами со служебной информацией и возвращает html-структуру
function lineToHTML(line) {
    const divElement = document.createElement('div');
    divElement.classList.add('line');

    for (const letter of line){
        const spanElement = document.createElement('span');
        spanElement.textContent = letter.label;

        divElement.append(spanElement);

        if(letterId > letter.id){
            spanElement.classList.add('done')
        } else if (!letter.success) {
            spanElement.classList.add('hint');
        };
    };

    return divElement;
};

// Возвращает актуальный номер строки
function getCurrentLineNumber() {
    for (let i = 0; i < lines.length; i++) {
        for (const letter of lines[i]){
            if (letter.id === letterId) {
                return i;
            }
        }
    };
};

// Функция обновления 3-х отображаемых актуальных строк textExample
function update() {
    const CurrentLineNumber = getCurrentLineNumber();

    textExampleElement.innerHTML = '';

    for (let i = 0; i < lines.length; i++) {
        const html = lineToHTML(lines[i]);
        textExampleElement.append(html);

        if (i < CurrentLineNumber || i> CurrentLineNumber + 2) {
            html.classList.add('hidden');
        }
    }
}

// Возвращает объект символа ожидаемый программой
function getCurrentLetter () {
    for (const line of lines) {
        for (const letter of line) {
            if (letterId === letter.id) {
                return letter;
            }
        }
    }
};


// Меняет текст печати
function changeText() {

    text = listText[Math.floor(Math.random()*listText.length)];
    lines = getLines(text);

    letterId = 1;

    startMoment = null;
    started = false;

    letterCounter = 0;
    letterCounter_error = 0;

    inputElement.value = '';

    update(); // Добавить эту строку

    init();

    location.reload();
}


// Меняет цвет клавиатуры
function changeColor() {
    var elms1 = document.querySelectorAll("[id='green']");
    for(var i = 0; i < elms1.length; i++)
        elms1[i].setAttribute("id", "purple");

    var elms2 = document.querySelectorAll("[id='yellow']");
    for(var i = 0; i < elms2.length; i++)
        elms2[i].setAttribute("id", "red");

    var elms3 = document.querySelectorAll("[id='red']");
    for(var i = 0; i < elms3.length; i++)
        elms3[i].setAttribute("id", "green");

    var elms4 = document.querySelectorAll("[id='blue']");
    for(var i = 0; i < elms4.length; i++)
        elms4[i].setAttribute("id", "yellow");

    var elms5 = document.querySelectorAll("[id='purple']");
    for(var i = 0; i < elms5.length; i++)
        elms5[i].setAttribute("id", "blue");
}


// Убирает клавиатуру
function changeKeyb() {
    const keyboard = document.querySelector('.keyboard');

    if (document.getElementById("changeKeyb").innerHTML == 'Показать клавиатуру') {
        keyboard.style.display = '';
        document.getElementById("changeKeyb").innerHTML = 'Убрать клавиатуру';
    } else {
        keyboard.style.display = 'none';
        document.getElementById("changeKeyb").innerHTML = 'Показать клавиатуру';
    }
    
    


    
}