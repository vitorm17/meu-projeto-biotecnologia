'use strict'

document.getElementById('openChatButton').addEventListener('click', function() {
    document.getElementById('chatContainer').style.display = 'block';
});

function closeChat() {
    document.getElementById('chatContainer').style.display = 'none';
}
