function guineaPig(arr) {
    arr = arr.map(Number);
    arr = arr.map(x => x * 1000);
    let areEnough = true;
    let [food, hay, cover, weight] = arr;

    for (let i = 1; i <= 30; i++) {
        food -= 300;
        if (i % 2 === 0) {
            let neededHay = food * 0.05;
            hay -= neededHay;
        }
        if (i % 3 === 0) {
            cover -= weight / 3;
        }
        if (food <= 0 || hay <= 0 || cover <= 0) {
            console.log(`Merry must go to the pet store!`);
            areEnough = false;
            break;
        }
    }

    if (areEnough) {
        console.log(`Everything is fine! Puppy is happy! Food: ${(food / 1000).toFixed(2)}, Hay: ${(hay / 1000).toFixed(2)}, Cover: ${(cover / 1000).toFixed(2)}.`);
    }
}
guineaPig((["10",
    "5",
    "5.2",
    "1"])
);
guineaPig((["1",
    "1.5",
    "3",
    "1.5"
])
);
guineaPig((["9",
    "5",
    "5.2",
    "1"])
);
