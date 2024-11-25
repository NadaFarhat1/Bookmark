
function add() {
    const siteName = document.getElementById('sitename').value.trim();
    const siteURL = document.getElementById('siteurl').value.trim();

    if (siteName.length < 3 || !siteURL.startsWith('www.')) {
        showMessage('Site Name or Url is not valid, Please follow the rules below: <br> <ul><li>Site name must contain at least 3 characters</li><li>Site URL must be a valid one</li></ul>');
        return;
    }

    const sectionEnd = document.querySelector('.end');
    const row = document.createElement('div');
    row.className = 'd-flex justify-content-around p-2';

    row.innerHTML = `
        <span>${sectionEnd.children.length}</span>
        <span>${siteName}</span>
        <a href="https://${siteURL}" target="_blank" class="btn btn-primary btn-sm">Visit</a>
        <button class="btn btn-danger btn-sm" onclick="removeBookmark(this)">Delete</button>
    `;

    sectionEnd.appendChild(row);

    document.getElementById('sitename').value = '';
    document.getElementById('siteurl').value = '';
}

function removeBookmark(button) {
    button.parentElement.remove();
}

function showMessage(message) {
    const existingMessage = document.getElementById('customMessage');
    if (existingMessage) {
        existingMessage.remove();
    }

    const messageDiv = document.createElement('div');
    messageDiv.id = 'customMessage';
    messageDiv.style.position = 'fixed';
    messageDiv.style.top = '50%';
    messageDiv.style.left = '50%';
    messageDiv.style.transform = 'translate(-50%, -50%)';
    messageDiv.style.padding = '20px';
    messageDiv.style.border = '1px solid #08c';
    messageDiv.style.borderRadius = '10px';
    messageDiv.style.backgroundColor = '#fff';
    messageDiv.style.boxShadow = '0px 4px 6px rgba(0,0,0,0.1)';
    messageDiv.style.zIndex = '1000';
    messageDiv.style.textAlign = 'start';

    messageDiv.innerHTML = `
        <h4 style="margin-bottom: 10px; font-weight: bold; color: #533;">${message}</h4>
        <button onclick="closeMessage()" style="padding: 5px 15px; background-color: #dc3545; color: white; border: none; border-radius: 5px; cursor: pointer;">Close</button>
    `;

    document.body.appendChild(messageDiv);
}

function closeMessage() {
    const messageDiv = document.getElementById('customMessage');
    if (messageDiv) {
        messageDiv.remove();
    }
}
