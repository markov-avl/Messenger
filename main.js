let chatSelector = document.getElementById('chatSelector')
let messages = document.getElementById('messages')
let textInput = document.getElementById('text')
let send = document.getElementById('send')

function scrollMessagesToBottom() {
    messages.scrollTop = messages.scrollHeight
}

function onSend() {
    let message = textInput.value
    if (message) {
        document.getElementById('messages').innerHTML += `<div class="message" style="justify-content: right">
                                                                       <div class="message__to">${message}</div>
                                                                   </div>`
        textInput.value = ''
        scrollMessagesToBottom()
        let reversedMessage = [...message].reverse().join("")
        setTimeout(() => {
            document.getElementById('messages').innerHTML += `<div class="message" style="justify-content: left">
                                                                       <div class="message__from">${reversedMessage}</div>
                                                                   </div>`
            scrollMessagesToBottom()
        }, 2000)

    }
}

scrollMessagesToBottom()

send.addEventListener('click', onSend)