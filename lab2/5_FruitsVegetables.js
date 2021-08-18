function FruitVegetableType(arr) {
    let input = String(arr).toLowerCase();
    let fruits = ['banana', 'apple', 'kiwi', 'cherry', 'lemon', 'grapes', 'peach'];
    let vegetables = ['tomato', 'cucumber', 'pepper', 'onion', 'garlic', 'parsley'];

    if (fruits.includes(input)) {
        console.log("fruit");
        return;
    }
    if (vegetables.includes(input)) {
        console.log("vegetable")
        return;
    }
    console.log("unknown")
}

test = 'pizza';
FruitVegetableType(test);