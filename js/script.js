document.addEventListener('DOMContentLoaded', function () {
    const contactList = document.getElementById('contact-list');
    const addContactBtn = document.getElementById('add-contact-btn');
    const deleteAllBtn = document.getElementById('delete-all-btn');

    addContactBtn.addEventListener('click', function () {
        let newName = prompt("Enter name:");
        let newPhone = prompt("Enter phone number:");
        let newEmail = prompt("Enter email address:");

        // Validate input
        if (!newName || isNaN(newPhone) || !newEmail.includes("@")) {
            alert("Invalid input. Please try again.");
            return;
        }

        // Add new contact to the list
        const newContact = document.createElement('li');
        newContact.className = 'list-group-item';
        newContact.textContent = `${newName} / ${newPhone} / ${newEmail}`;
        contactList.appendChild(newContact);
    });

    deleteAllBtn.addEventListener('click', function () {
        if (confirm("Are you sure you want to delete all contacts?")) {
            contactList.innerHTML = '';
        }
    });
});
