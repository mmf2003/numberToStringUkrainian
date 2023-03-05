let units = {
    1: 'одна',
    2: 'дві',
    3: 'три',
    4: 'чотири',
    5: 'пʼять',
    6: 'шість',
    7: 'сім',
    8: 'вісім',
    9: 'девʼять',
}

function amountInCuirsive(num) {
    let res = '';
    let pennies = num.split('.')[1]+' коп.';
    let grn = num.split('.')[0].split('');


    
    console.log(grn);
    console.log(pennies);
    console.log(units);
    console.log(units[1]);
}

amountInCuirsive('111.11')

