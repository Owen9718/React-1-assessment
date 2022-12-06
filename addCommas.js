function addCommas(num) {
    let str = num.toString()
    if (num.length > 3) {
        let temp = ""
        let j = 0
        for (let i = num.length - 1; i >= 0; i--) {
            temp = str[i] + temp
            j++;
            if (j % 3 == 0 && i != 0) {
                temp = "," + temp
            }
        }
        return temp
    }
}
module.exports = addCommas;