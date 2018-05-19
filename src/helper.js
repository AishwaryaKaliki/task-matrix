export function rando(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
}

export function getQuoteOfTheDay() {
    const quotes = [
        ["Chin up princess, or the crown slips.", "Isaac Netwon"],
        ["Never let anyone treat you like a yellow Starburst. You are a pink Starburst.", "Oprah Winfrey"],
        ["Everything is figureoutable.", "Albert Einstein"],
        ["A bad idea with a lot of confidence appeals to people more than a good idea with skepticism.", "Steve Jobs"],
        ["The problem with quotes found on the internet is that they're not always accurate.", "Abraham Lincoln"],
        ["'Google before you tweet' is the new 'think before you speak.'", "Plato"],
        ["The more you pay for an article of clothing the less you wear it.", "Versace"],
        ["Whoever decided women's pants shouldn't have pockets was also the inventor of the purse.", "Martin Luther King Jr."],
        ["Volleyball is just an intense version of 'Don't let the balloon touch the floor.'", "Michael Schumacher"],
        ["The depressing thing about tennis is no matter how good you get, you'll never be as good as the wall.", "Tiger Woods"],
        ["'It's the thought that counts' doesn't apply to exercise and dieting.", "Unknown"],
        ["A person's most graceful moments occur when no one is watching, while their most embarrassing and clumsy moments occur when everyone is watching.", "Unknown"]
    ];

    return (rando(quotes));
}