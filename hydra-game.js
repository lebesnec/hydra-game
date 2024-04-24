const cliProgress = require('cli-progress');

const SIZE = +process.argv[2] ?? 3;
const progress = new cliProgress.SingleBar({}, cliProgress.Presets.shades_classic);

console.time('Duration');
progress.start(SIZE, 0);

let currentStep = 1;
const tree = new Array(SIZE).fill(1);

while (tree.length > 1) {
    // find the right leaf
    let rightLeaf = 0;
    let maxExceptZero = 0;
    for (let i = 1; i <= tree.length - 1; i++) {
        const value = tree[i];
        if (tree[rightLeaf] <= value) {
            rightLeaf = i;
        }
        if (value > maxExceptZero) {
            maxExceptZero = value
        }
    }

    if (rightLeaf === 0) {
        currentStep = currentStep + (tree[0] - maxExceptZero);
        tree[0] = maxExceptZero;

    } else {
        // cut
        tree[rightLeaf] -= 1;
        if (tree[rightLeaf] === 0) {
            console.log('pop! ' + currentStep);
            tree.pop();
            progress.increment();
        }

        // grow new head below
        if (rightLeaf > 0) {
            tree[rightLeaf - 1] += currentStep;
        }

        currentStep = currentStep + 1;
    }
    console.log(currentStep, tree);
}

progress.increment();
currentStep += tree[0] - 1;

progress.stop();
console.log('Result : ' + currentStep);
console.timeEnd('Duration');
