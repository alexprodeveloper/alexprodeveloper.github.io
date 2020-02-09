$(document).ready(function () {
    function move(e, obj) {
        var summ = 0;
        var id = obj.next().attr('id').substr(1);
        var progress = e.pageX - obj.offset().left;
        var rating = progress * 5 / $('.stars').width();
        $('#param' + id).text(rating.toFixed(1));
        obj.next().width(progress);
        $('.rating').each(function () {
            summ += parseFloat($(this).text());
        });
        summ = summ / $('.rating').length;
        $('#sum_progress').width(Math.round($('.stars').width() * summ / 5));
        $('#summ').text(summ.toFixed(2));
    }

    $('#rating .stars').on('mousemove', function (e) {
        if ($(this).hasClass('fixed') == false) move(e, $(this));
    });

    function notice(text) {
        $('#message').fadeOut(500, function () {
            $(this).text(text);
        }).fadeIn(2000);
    }
});

var map = document.querySelector('.map__service_header');
map.addEventListener('click', function (event) {
    if (event.target.classList.contains('service__item')) {
        document.querySelector('.map__service_header .service__item_active').classList.remove('service__item_active');

        event.target.classList.add('service__item_active');
    }
});

var img = document.querySelector('.about__img');
img.style.background = $('.recommended__item_blue .recommended__img').css('background-image');
var service = document.querySelector('.service__footer');
service.addEventListener('click', function (event) {
    if (event.target.classList.contains('service__item')) {
        document.querySelector('.service__footer .active').classList.remove('active');

        event.target.classList.add('active');
    }
});

var map_menu = document.querySelector('.map__menu');
map_menu.addEventListener('click', function (event) {
    if (event.target.classList.contains('map__item')) {
        document.querySelector('.map__menu .map__item_active').classList.remove('map__item_active');

        event.target.classList.add('map__item_active');
    }
});

var answer_list = document.querySelectorAll('.question__answer');
var question = document.querySelector('.question__container');
question.addEventListener('click', function (event) {
    if (event.target.classList.contains('question__body')) {
        document.querySelector('.question__container .question_body_active').classList.remove('question_body_active');

        event.target.classList.add('question_body_active');

        showAnswer();
    }

    if (event.target.classList.contains('question__img') || event.target.classList.contains('question__text')) {
        document.querySelector('.question__container .question_body_active').classList.remove('question_body_active');

        event.target.parentNode.classList.add('question_body_active');

        showAnswer();
    }
});

var feedback_btn = document.querySelector('.feedback_but');
feedback_btn.addEventListener('click', function () {
    document.querySelector('#feedback').style.display = 'block';
});

var recomendation = document.querySelector('.recommended__items');
recomendation.addEventListener('click', function () {
    if (event.target.classList.contains('btn')) {
        document.querySelector('#subscribe').style.display = 'block';
        document.querySelector('#subscribe').parentNode.classList.remove('g-hidden');
        var parent = document.querySelector('#subscribe').parentNode;

        var close = document.querySelector('#close').addEventListener('click', function () {
            parent.classList.add('g-hidden');
        });
    }
});

recomendation.addEventListener('click', function (event) {
    if (event.target.classList.contains('recommended__mask')) {
        document.querySelector('.recommended__items .recommended__item_blue').classList.remove('recommended__item_blue');
        event.target.parentNode.classList.add('recommended__item_blue');
        img.style.background = $('.recommended__item_blue .recommended__img').css('background-image');
    }
});

function showAnswer() {
    var active_block = document.querySelector('.question_body_active');
    var answers_id = [];
    for (var i = 0; i < answer_list.length - 1; i++) {
        answers_id[i] = answer_list[i].dataset.question;
        answer_list[i].classList.remove('question__answer_active');
        if (answers_id[i] === active_block.dataset.question) {
            answer_list[i].classList.add('question__answer_active');
        }
    }
}

