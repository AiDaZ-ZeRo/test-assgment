// функция settimout обернута в промис чтобы мы могли дожидаться ее выполнения но вызывается и дожидается не на том месте
// поэтому я переместил функцию addDelay  внутрь функций logArrayInfo и дождался выполнения logWithDelay
const addDelay = () => new Promise(resolve => setTimeout(resolve, 300));

async function logWithDelay(text) {
    console.log(text);
}

async function logArrayInfo(array) {
    addDelay();
    array.forEach(async (item) => {
        await logWithDelay(item);
    });

    console.log('Done!');
}

logArrayInfo([1, 2, 3]);

// Разделил функцию cat так же сделал ее замыканием чтобы сохранять значение при каждой итерацей
const cat = index => () => console.log(`My index is ${index}`);

function createCats() {
    let cats = [];
    var i = 0;

    while (i < 10) {

        cats.push(cat(i));
        i++;
    }
    return cats;
}

let animals = createCats();
animals[0]();
animals[5]();


const tree = {
    value: 3,
    children: [
        {
            value: 1,
            children: []
        },
        {
            value: 4,
            children: []
        },
        {
            value: 3,
            children: [
                {
                    value: 8,
                    children: [
                        {
                            value: 2,
                            children: []
                        },
                        {
                            value: 5,
                            children: []
                        }
                    ]
                },
                {
                    value: 0,
                    children: []
                }
            ]
        }
    ]
};

// 3 - задание сделал без метода reduce с использованием замыканием countSum отельной фунцией 
const countSum = () => {
    sum = 0
    return (value) => sum += value
}

const getSum = countSum()

// Рекурсивно пробегаюсь по веткам используя getSum
const getSumOfTree = (data) => {

    let sum = 0
    if (data.value % 2 === 0 ) {
        sum += getSum(data.value)
    }

    if (data?.children.length) {
        data.children.forEach(element => sum = getSumOfTree(element));
    } return sum
}
const totalSum = getSumOfTree(tree)

console.log(totalSum);
