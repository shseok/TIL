function solution(number, k) {

    const getCombinations = function (arr, selectNumber) {

        const results = [];

        if (selectNumber === 1) return arr.map((value) => [value]); // 1개씩 택할 때, 바로 모든 배열의 원소 return

        arr.forEach((fixed, index, origin) => {
            const rest = origin.slice(index + 1); // 해당하는 fixed를 제외한 나머지 뒤
            const combinations = getCombinations(rest, selectNumber - 1); // 나머지에 대해서 조합을 구한다.
            const attached = combinations.map((combination) => [fixed, ...combination]); //  돌아온 조합에 떼 놓은(fixed) 값 붙이기
            results.push(...attached); // 배열 spread syntax 로 모두다 push 
        });
        return results; // 결과 담긴 results return
    }

    const result = getCombinations([...number], number.length - k);
    // console.log(...result.map(each_arr => +each_arr.join('')));

    return Math.max(...result.map(each_arr => +each_arr.join(''))).toString();
}

console.log(solution("87654321", 3));
console.log(solution("18765432", 3));
console.log(solution("77413258", 2));
console.log(solution("12345678901234567890", 19));
console.log(solution("01010", 3));
console.log(solution("559913", 1));
console.log(solution("9191919", 1));
console.log(solution("00100", 2));