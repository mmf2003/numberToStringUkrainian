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

let dozens = {
    1: 'x',
    2: 'двадцять',
    3: 'тридцять',
    4: 'сорок',
    5: 'пʼятдусят',
    6: 'шістдесят',
    7: 'сімдесят',
    8: 'вісімдусят',
    9: 'девʼяносто',
}

let hundreds = {
    1: 'сто',
    2: 'двісті',
    3: 'триста',
    4: 'чотириста',
    5: 'пʼятсот',
    6: 'шістсот',
    7: 'сімсот',
    8: 'вісісот',
    9: 'девʼятсот',
}

function amountInCuirsive(num) {
    let res = '';
    let pennies = 'грн ' + num.split('.')[1]+' коп.';
    let grn = num.split('.')[0].split('').reverse();
    for (let i = 0; i < grn.length; i++) {
        switch (i) {
            case 0:
                if (grn[0] == 0) break;
                if (grn[1] == '1') {
                    res = dozensIsOne(grn[0]);
                }
                else res = units[grn[i]] + ' ';
                break;

            case 1:
                if (grn[1] == 0) break;
                if (grn[1] == 1) break;
                else res = dozens[grn[i]]+ ' ' + res;
                break;

            case 2:
                if (grn[2] == 0) break;
                res = hundreds[grn[i]] + ' ' + res;
                break;
        
            default:
                break;
        }
        
    }
    res = res + pennies;


    console.log(res);
}

amountInCuirsive('123.45')
amountInCuirsive('003.45')
amountInCuirsive('999.00')
amountInCuirsive('905.45')

function dozensIsOne(grn) {
    switch (grn) {
        case '0':
            return 'десять ';
        case '1':
            return 'одинадцять ';
        case '2':
            return 'дванадцять ';
        case '3':
            return 'тринадцять ';
        case '4':
            return 'чотирнадцять ';
        case '5':
            return 'пʼятнадцять ';
        case '6':
            return 'шістнадцять ';
        case '7':
            return 'сімнадцять ';
        case '8':
            return 'вісімнадцять ';
        case '9':
            return 'девʼятнадцять ';
        default:
            break;
    }
}


