document.addEventListener("DOMContentLoaded", function() {
  const chatBody = document.getElementById('chat-body');
  const fileInput = document.getElementById('file-input');
  const sendButton = document.getElementById('send-btn');

  sendButton.addEventListener('click', sendMessage);

  function sendMessage() {
    const file = fileInput.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = function(event) {
        const fileType = file.type.split('/')[0];
        if (fileType === 'image') {
          appendImage(event.target.result);
        } else if (fileType === 'video') {
          appendVideo(event.target.result);
        } else {
          alert('Invalid file type. Please select an image or video.');
        }
      }
      reader.readAsDataURL(file);
    }
  }

  function appendImage(src) {
    const img = document.createElement('img');
    img.src = src;
    img.classList.add('chat-message');
    chatBody.appendChild(img);
  }

  function appendVideo(src) {
    const video = document.createElement('video');
    video.src = src;
    video.controls = true;
    video.classList.add('chat-message');
    chatBody.appendChild(video);
  }
});
