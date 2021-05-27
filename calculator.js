// function addition() {
//     let c = parseInt(document.getElementById('first').value) + parseInt(document.getElementById('second').value);

//     document.getElementById('operator').innerText = '+';

//     document.getElementById('result').value = c;


// }

// function subtraction() {
//     let c = parseInt(document.getElementById('first').value) - parseInt(document.getElementById('second').value);

//     document.getElementById('operator').innerText = '-';

//     document.getElementById('result').value = c;
// }

// function multiply() {
//     let c = parseInt(document.getElementById('first').value) * parseInt(document.getElementById('second').value);

//     document.getElementById('operator').innerText = '*';

//     document.getElementById('result').value = c;
// }

// function division() {
//     let c = parseInt(document.getElementById('first').value) / parseInt(document.getElementById('second').value);


//     document.getElementById('operator').innerText = '/';

//     document.getElementById('result').value = c;
// }

function erase() {
    document.getElementById('first').value = 0;
    document.getElementById('second').value = 0;
    document.getElementById('result').value = 0;

}

function calculator(arithmatic_operator) {
    let a = parseInt(document.getElementById('first').value);
    let b = parseInt(document.getElementById('second').value);

    switch (arithmatic_operator) {
        case '+':
            document.getElementById('result').value = a + b;
            document.getElementById('operator').innerText = '+'
            break;

        case '-':
            document.getElementById('result').value = a - b;
            document.getElementById('operator').innerText = '-'

            break;

        case '*':
            document.getElementById('result').value = a * b;
            document.getElementById('operator').innerText = '*'

            break;

        case '/':
            document.getElementById('result').value = a / b;
            document.getElementById('operator').innerText = '/'

            break;
    }
}