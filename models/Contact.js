const fs = require('fs');
const path = require('path');

class Contact {
  constructor(name, email) {
    this.name = name;
    this.email = email;
  }

  save(callback) {
    const contactsFilePath = path.join(__dirname, '..', 'contacts.json');
    const contactData = { name: this.name, email: this.email };

    fs.readFile(contactsFilePath, 'utf8', (err, data) => {
      if (err) {
        console.error(err);
        return callback(err);
      }

      let contacts = [];
      if (data) {
        contacts = JSON.parse(data);
      }

      contacts.push(contactData);

      fs.writeFile(contactsFilePath, JSON.stringify(contacts, null, 2), 'utf8', (err) => {
        if (err) {
          console.error(err);
          return callback(err);
        }

        callback(null);
      });
    });
  }
}

module.exports = Contact;