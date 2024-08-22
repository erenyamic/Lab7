document.addEventListener('DOMContentLoaded', function () {
    const contactList = document.getElementById('contact-list');
    const addContactBtn = document.getElementById('add-contact-btn');
    const deleteAllBtn = document.getElementById('delete-all-btn');

    let contacts = [];

    addContactBtn.addEventListener('click', function () {
        let addingContacts = true;

        do {
            let newName = prompt("Enter name:");
            let newPhone = prompt("Enter phone number:");
            let newEmail = prompt("Enter email address:");

            if (!newName || isNaN(newPhone) || !newEmail.includes("@")) {
                alert("Invalid input. Please try again.");
                continue;
            }

            contacts.push({
                name: newName,
                phone: newPhone,
                email: newEmail
            });

            const newContact = document.createElement('li');
            newContact.className = 'list-group-item';
            newContact.textContent = `${newName} / ${newPhone} / ${newEmail}`;
            contactList.appendChild(newContact);

            addingContacts = confirm("Do you want to add another contact?");
            if (!addingContacts) {
                break;
            }
        } while (true);
    });

    deleteAllBtn.addEventListener('click', function () {
        if (confirm("Are you sure you want to delete all contacts?")) {
            contactList.innerHTML = '';
            contacts = [];
        }
    });
});
