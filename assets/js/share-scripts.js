const messages = [
    "This post rules!",
    "This post is the bee's knees!",
    "This post rocks!",
    "This post sparks joy!",
    "This post slaps!",
    "This post goes hard!",
    "This post is the bomb dot com!",
    "This post reminds me why I love the internet!",
    "This post makes me go squee!",
    "This post hits the spot!"
]

function randomTweetMessage() {
    let message = messages[Math.floor(Math.random() * messages.length)];
    return encodeURIComponent(message + " ");
}

function shareToTwitter(url) {
    window.open("https://twitter.com/intent/tweet?url=" + randomTweetMessage() + url);
}