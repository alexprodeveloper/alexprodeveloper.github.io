window.onload = function () {
    var btn = document.getElementById('btn--calculate');
    var error_block = document.getElementById('error');
    var answer1 = document.getElementById('answer-1');
    var answer2 = document.getElementById('answer-2');
    var show_solution1 = document.getElementById('find-x1');
    var show_solution2 = document.getElementById('find-x2');
    var D2;
    var a2;
    var expression_block = document.getElementById('exp');
    btn.addEventListener('click', function (a, b, c, D, error, x1, x2) {
        a = parseInt(document.getElementById('input-1').value, 10);
        b = parseInt(Number(document.getElementById('input-2').value), 10);
        c = parseInt(Number(document.getElementById('input-3').value), 10);
        if (!isNaN(a) && !isNaN(b) && !isNaN(c) && a !== '' && b !== '' && c !== '') {
            var b2 = b * b;
            var count = 4 * a * c;
            D = b2 - 4 * a * c;
            a2 = a * 2;
            if (D < 0) {
                if (error_block.style.color !== 'black') {
                    error_block.style.color = 'black';
                }
                error = 'D < 0, корней нет';
                error_block.innerHTML = error;
                expression_block.innerHTML = '';
            }

            if (D === 0) {
                if (error_block.style.color !== 'black') {
                    error_block.style.color = 'black';
                }
                error = 'D = 0, 1 действительный корень';
                error_block.innerHTML = error;
                x1 = -b / 2 * a;
                answer1.innerHTML = 'x = ' + x1;
                answer2.innerHTML = '';
                error_block.style.color = 'black';
                expression_block.innerHTML = 'D = b<sup>2</sup>-4ac= ' + b2 + ' - 4 * ' + a + ' * ' + b + ' = ' + b2 + ' - ' + count + ' = ' + D;
                show_solution2.innerHTML = '';
                show_solution1.innerHTML = 'x = -b / 2a = ' + -b + ' / ' +  2 + ' * ' + a + ' = ' + -b + ' / ' + a2 + ' = ' + x1;
            }

            if (D > 0) {
                if (error_block.style.color !== 'black') {
                    error_block.style.color = 'black';
                }
                error = 'D < 0, 2 действительных корня';
                error_block.innerHTML = error;
                x1 = (-b - Math.sqrt(D)) / (2 * a);
                x2 = (-b + Math.sqrt(D)) / (2 * a);
                answer1.innerHTML = 'x1 = ' + x1;
                answer2.innerHTML = 'x2 = ' + x2;
                expression_block.innerHTML = 'D = b<sup>2</sup>-4ac= ' + b2 + ' - 4 * ' + a + ' * ' + b + ' = ' + b2 + ' - ' + count + ' = ' + D;
                show_solution1.innerHTML = 'x1 = (-b - √D) / 2a = (' + -b + ' - √' + D + ')' + ' / ' +  2 + ' * ' + a + ' = (' + -b + ' - ' + Math.sqrt(D) + ') / ' + a2 + ' = ' + x1;
                show_solution2.innerHTML = 'x2 = (-b + √D) / 2a = (' + -b + ' + √' + D + ')' + ' / ' +  2 + ' * ' + a + ' = (' + -b + ' + ' + Math.sqrt(D) + ') / ' + a2 + ' = ' + x2;


            }

        } else {
            error = 'Некорректные значения';
            error_block.style.color = 'crimson';
            error_block.innerHTML = error;
            answer1.innerHTML = '';
            answer2.innerHTML = '';
            show_solution2.innerHTML = '';
            show_solution1.innerHTML = '';
            return error;
        }
    });
};