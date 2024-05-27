document.addEventListener('DOMContentLoaded', () => {
    const copyTextElement = document.getElementById('copyText');
    const notificationElement = document.getElementById('notification');

    copyTextElement.addEventListener('click', () => {
        const textToCopy = copyTextElement.innerText;

        // Create a temporary textarea to copy the text
        const tempTextarea = document.createElement('textarea');
        tempTextarea.value = textToCopy;
        document.body.appendChild(tempTextarea);

        // Select and copy the text
        tempTextarea.select();
        document.execCommand('copy');

        // Remove the temporary textarea
        document.body.removeChild(tempTextarea);

        // Show notification
        notificationElement.classList.remove('hidden');
        notificationElement.classList.add('show');

        // Hide notification after 2 seconds
        setTimeout(() => {
            notificationElement.classList.remove('show');
        }, 2000);
    });
});
