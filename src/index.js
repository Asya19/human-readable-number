module.exports = function toReadable (number) {
    let strNumber = String(number);
    
    let singleDigit = ['', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
    let twoDigit = ['', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
    let dozens = ['', 'ten', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];

    // returns single digit string
    if (strNumber.length == 1) {
        if ( number === 0) {
            return 'zero';
        }
        return singleDigit[number];
    }

    // returns two-digit string
    if (strNumber.length == 2) {
        
        if (number > 10 && number < 20) {
            return twoDigit[+strNumber[1]]; 
        }
        else {
            if (+strNumber[strNumber.length - 1] == 0) {
                return dozens[+strNumber[0]];
            }
            else {
                return dozens[+strNumber[0]] + ' ' + singleDigit[+strNumber[strNumber.length - 1]];
            }
        }
    }

    // return string of three digits
    if (strNumber.length == 3) {

        if (+strNumber[1] == 0 && +strNumber[2] != 0) {
            strNumber = singleDigit[+strNumber[0]] + ' ' + 'hundred ' + singleDigit[+strNumber[2]];
            return strNumber;
        }
        if (+strNumber[1] == 0 && +strNumber[2] == 0) {
            strNumber = singleDigit[+strNumber[0]] + ' ' + 'hundred' + singleDigit[+strNumber[2]];
            return strNumber;
        } 

        if (number % 100 >= 10 && number % 100 < 20) {

            if (+strNumber[2] == 0 && +strNumber[1] != 0) {

                strNumber = singleDigit[+strNumber[0]] + ' ' + 'hundred ' + dozens[+strNumber[1]];
                return strNumber;
                
            } else {
                strNumber = singleDigit[+strNumber[0]] + ' ' + 'hundred ' + twoDigit[+strNumber[2]];
                return strNumber;
            }
        }
        if (number % 100 >= 20) {
            
            if (+strNumber[2] == 0 && +strNumber[1] != 0) {
                strNumber = singleDigit[+strNumber[0]] + ' ' + 'hundred ' + dozens[+strNumber[1]];
                return strNumber;
            } else {
                strNumber = singleDigit[+strNumber[0]] + ' ' + 'hundred ' + dozens[+strNumber[1]] + ' ' + singleDigit[+strNumber[2]];
                return strNumber;
            }
        } 
        if (number % 100 == 0) {
            strNumber = singleDigit[+strNumber[0]] + ' ' + 'hundred';
            return strNumber;
        }        
    }
}
