var waterBlocks = function (blocks) {
    let currHeight = blocks[0];
    let overallMax = blocks[0];
    let drops = 0;

    for (var i =0; i < blocks.length - 1; i ++){
        debugger;
        if (blocks[i] > blocks[i + 1]) {
            if (blocks[i] > overallMax) {
                overallMax = blocks[i];
            }
            currHeight = blocks[i];
            while (blocks[i] >= blocks[i + 1]) {
                drops += currHeight - blocks[i + 1];
                i++;
            }
            while (blocks[i] <= blocks[i + 1]){
                if (blocks[i] > overallMax){overallMax = blocks[i];}
                drops += currHeight - blocks[i + 1];
                i++
            }
        }
    } 
    return drops;
};

console.log('actual ', waterBlocks([3, 1, 4, 2, 5]), 'expected', 4)
console.log('actual ', waterBlocks([3, 2, 1, 4]), 'expected', 3)
