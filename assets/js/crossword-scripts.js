function openSubscribeModal() {
    let subscribeModal = document.getElementById('subscribe-modal');
    subscribeModal.style.display = 'flex';
}

function closeSubscribeModal() {
    let subscribeModal = document.getElementById('subscribe-modal');
    subscribeModal.style.display = 'none';
}

window.onclick = function(event) {
    let subscribeModal = document.getElementById('subscribe-modal');
    if (event.target == subscribeModal) {
        closeSubscribeModal();
    }
}