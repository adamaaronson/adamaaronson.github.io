const messages = [
    "This post by @aaaronson rules!",
    "This post by @aaaronson is the bee's knees!",
    "This post by @aaaronson rocks!",
    "This post by @aaaronson sparks joy!",
    "This post by @aaaronson slaps!",
    "This post by @aaaronson goes hard!",
    "This post by @aaaronson is the bomb dot com!",
    "This post by @aaaronson reminds me why I love the internet!",
    "This post by @aaaronson makes me go squee!",
    "This post by @aaaronson hits the spot!",
    "This post by @aaaronson hits different!"
]

function randomTweetMessage() {
    let message = messages[Math.floor(Math.random() * messages.length)];
    return encodeURIComponent(message + " ");
}

function shareToTwitter(url) {
    window.open("https://twitter.com/intent/tweet?url=" + randomTweetMessage() + url);
}

function copyLink(url) {
    window.navigator.clipboard.writeText(url);
    
    const copyLinkButton = document.getElementById('copy-link-text');
    const { innerText: originalText } = copyLinkButton;
    copyLinkButton.innerText = 'Copied!';

    setTimeout(() => {
        copyLinkButton.innerText = originalText;
    }, 2000);
}