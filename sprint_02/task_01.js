const filterNums = (...arg) => {
    let res = [];
    if ([...arg][1] === undefined && [...arg][2] === undefined) {
        for (item of [...arg][0]) {
            item > 0 ? res.push(item) : false;
        }
        return res;
    }
    if ([...arg][2] === undefined) {
        for (item of [...arg][0]) {
            item >= [...arg][1] ? res.push(item) : false;
        }
        return res;
    }
    if ([...arg][1] && [...arg][2] === 'greater') {
        for (item of [...arg][0]) {
            item >= [...arg][1] ? res.push(item) : false;
        }
        return res;
    }
    if ([...arg][1] && [...arg][2] === 'less') {
        for (item of [...arg][0]) {
            item < [...arg][1] ? res.push(item) : false;
        }

    }
    return res;
};