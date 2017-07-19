//数组去重
{
    const dedupe = array => Array.from(new Set(array));
    let testArr = [0,0,0,0,],
        dedupeArr = dedupe(testArr);
    console.log(new Set(testArr) instanceof Array);
    console.log(dedupeArr);
    console.log(dedupeArr instanceof Array);
}

{

}

