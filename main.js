let chatSelector = document.getElementById('chatSelector')
let messages = document.getElementById('messages')

function scrollMessagesToBottom() {
    messages.scrollTop = messages.scrollHeight
}

scrollMessagesToBottom()