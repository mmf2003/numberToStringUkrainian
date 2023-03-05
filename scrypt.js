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

let thousands = {
    1: units[1] + ' тисяча',
    2: units[2] + ' тисячі',
    3: units[3] + ' тисячі',
    4: units[4] + ' тисячі',
    5: units[5] + ' тисяч',
    6: units[6] + ' тисяч',
    7: units[7] + ' тисяч',
    8: units[8] + ' тисяч',
    9: units[9] + ' тисяч',
}

let tenThousands = {
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

let hundredsThousands = {
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
    let pennies = 'грн. ' + num.split('.')[1]+' коп.';
    let grn = num.split('.')[0].split('').reverse();
    for (let i = 0; i < grn.length; i++) {
        switch (i) {
            case 0:
                if (grn[0] == 0) break;
                if (grn[1] == '1') {
                    res = dozensOrThousandsIsOne(grn[0]);
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

            case 3:
                if (grn[3] == 0) break;
                if (grn[4] == '1') {
                    res = dozensOrThousandsIsOne(grn[3])+ 'тисяч ' + res;
                }
                else res = thousands[grn[i]] + ' ' + res;
                break;

            case 4:
                if (grn[4] == 0) break;
                if (grn[4] == 1) break;
                if (grn[3] == 0) res = tenThousands[grn[i]]+ ' тисяч ' + res 
                else res = tenThousands[grn[i]]+ ' ' + res;
                break;
            
            case 5:
                if (grn[5] == 0) break;
                if (grn[4] == 0) res = hundredsThousands[grn[i]] + ' тисяч ' + res; 
                else res = hundredsThousands[grn[i]] + ' ' + res;
                break;
        
            default:
                break;
        }
        
    }
    res = res + pennies;


    console.log(res);
}

amountInCuirsive('1.45')
amountInCuirsive('01.45')
amountInCuirsive('001.00')
amountInCuirsive('4.45')
amountInCuirsive('40000.45')
amountInCuirsive('400000.45')

function dozensOrThousandsIsOne(grn) {
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


