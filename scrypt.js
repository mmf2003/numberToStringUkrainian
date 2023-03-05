import {units, dozens, hundreds, thousands,tenThousands, hundredsThousands, millions} from "./objects.js";

function amountInCuirsive(num) {
    let res = '';
    let pennies = 'грн. ' + num.split('.')[1]+' коп.';
    let grn = num.split('.')[0].split('').reverse();
    for (let i = 0; i < grn.length; i++) {
        switch (i) {
            case 0:
                if (grn[1] == '1') {
                    res = dozensOrThousandsIsOne(grn[0]);
                }
                if (grn[0] == 0) break;
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
                if (grn[4] == '1') {
                    res = dozensOrThousandsIsOne(grn[3])+ 'тисяч ' + res;
                }
                if (grn[3] == 0) break;
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
            
            case 6:
                if (grn[7] == '1') {
                    res = dozensOrThousandsIsOne(grn[6]) + 'мільйонів ' + res;
                }
                if (grn[6] == 0) break;
                else res = millions[grn[i]] + ' ' + res;
                break;
            
            default:
                break;
        }
        
    }
    res = res + pennies;


    console.log(res);
}


amountInCuirsive('1.00')
amountInCuirsive('10.00')
amountInCuirsive('100.00')
amountInCuirsive('1000.00')
amountInCuirsive('10000.00')
amountInCuirsive('100000.00')
amountInCuirsive('1000000.00')
amountInCuirsive('10000000.00')

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


