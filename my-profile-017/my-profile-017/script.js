const greetButton = document.getElementById('greetButton');
const greetingMessage = document.getElementById('greetingMessage');
greetButton.addEventListener('click', function() {
  greetingMessage.textContent = "สวัสดีครับ! ยินดีที่ได้รู้จักครับ";
});