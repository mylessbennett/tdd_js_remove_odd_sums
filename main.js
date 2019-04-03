function removeOddSum(sumObjList, a, b) {
    const evenList = sumObjList.filter(num => (num[a] + num[b]) % 2 === 0);
    return evenList
}

module.exports = removeOddSum;
