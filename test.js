let salaries = {
    "John": 100,
    "Pete": 300,
    "Mary": 250
};

topSalary = (obj) => {

    const arr = Object.entries(obj);
    let max = 0;
    let maxName = null;

    for (let [key, value] of arr) {

        if (max < value) {
            max = value;
            maxName = key;
        }
    }
    return maxName;
}

console.log(topSalary(salaries));