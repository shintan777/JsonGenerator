function getRandomNumber(min = 0, max = 1) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function getRandomBool() {
    return getRandomNumber() >= 0.5;
}
