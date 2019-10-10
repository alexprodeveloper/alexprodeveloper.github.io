window.onload = function () {
    var act1 = document.getElementById('count1');
    act1.addEventListener('click', function () {
        var stmt1 = document.getElementById('task1').value;
        var answer1 = document.getElementById('answer1');
        var result1 = stmt1.slice(1, stmt1.length);
        answer1.style.display = 'block';
        answer1.innerHTML = result1;
        if (result1 === '') {
            answer1.style.display = 'none';
        }
    });

    var act2 = document.getElementById('count2');
    act2.addEventListener('click', function () {
        var stmt2 = document.getElementById('task2').value;
        var answer2 = document.getElementById('answer2');
        if (stmt2 !== '') {
            var str1 = stmt2[0].toUpperCase();
            var str2 = stmt2.slice(1, stmt2.length);
            answer2.style.display = 'block';
            answer2.innerHTML = str1 + str2.toLowerCase();
        }
        if (stmt2 === '') {
            answer2.style.display = 'none';
        }
    });

    var act3 = document.getElementById('count3');
    act3.addEventListener('click', function () {
        var stmt3 = document.getElementById('task3-1').value;
        var cutStr = parseInt(document.getElementById('task3-2').value, 10);
        var result3 = stmt3.slice(0, cutStr);
        var answer3 = document.getElementById('answer3');
        answer3.style.display = 'block';
        answer3.innerHTML = result3 + '...';
        if (result3 === '') {
            answer3.style.display = 'none';
        }
    });

    var act4 = document.getElementById('count4');
    act4.addEventListener('click', function () {
        var stmt4 = document.getElementById('task4').value;
        var answer4 = document.getElementById('answer4');
        var result4;
        if (stmt4[4] === ':') {
            result4 = stmt4.slice(7, stmt4.length);
            answer4.style.display = 'block';
            answer4.innerHTML = result4;
        } else {
            result4 = stmt4.slice(8, stmt4.length);
            answer4.style.display = 'block';
            answer4.innerHTML = result4;
        }

        if (result4 === '') {
            answer4.style.display = 'none';
        }
    });

};
