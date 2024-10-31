document.addEventListener('DOMContentLoaded', () => {
    // Emergency Contacts Feature
    const emergencyContacts = [];
    const emergencyContactsDiv = document.getElementById('emergencyContacts');

    function displayContacts() {
        emergencyContactsDiv.innerHTML = '';
        emergencyContacts.forEach((contact, index) => {
            const contactDiv = document.createElement('div');
            contactDiv.className = 'contact';
            contactDiv.innerHTML = `
                ${contact.name} - ${contact.number} 
                <button onclick="callContact('${contact.number}')">Call</button>
                <button onclick="textContact('${contact.number}')">Text</button>
            `;
            emergencyContactsDiv.appendChild(contactDiv);
        });
    }

    document.getElementById('addContactBtn').addEventListener('click', () => {
        const name = prompt('Enter contact name:');
        const number = prompt('Enter contact number:');
        if (name && number) {
            emergencyContacts.push({ name, number });
            displayContacts();
        }
    });

    window.callContact = (number) => {
        alert(`Calling ${number}...`);
    };

    window.textContact = (number) => {
        alert(`Texting ${number}...`);
    };

    // Location Sharing Feature
    document.getElementById('shareLocationBtn').addEventListener('click', () => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition((position) => {
                const latitude = position.coords.latitude;
                const longitude = position.coords.longitude;
                document.getElementById('locationMessage').innerText = 
                    `Location shared: https://maps.google.com/?q=${latitude},${longitude}`;
            }, () => {
                alert('Unable to retrieve your location.');
            });
        } else {
            alert('Geolocation is not supported by your browser.');
        }
    });

    // Safety Tips Feature
    const safetyTips = [
        'Always inform someone about your whereabouts.',
        'Trust your instincts in uncomfortable situations.',
        'Carry a charged mobile phone at all times.',
        'Be aware of emergency exits in buildings.',
        'Avoid isolated areas, especially at night.'
    ];
    let tipIndex = 0;
    const safetyTipsDiv = document.getElementById('safetyTips');
    setInterval(() => {
        safetyTipsDiv.innerText = safetyTips[tipIndex];
        tipIndex = (tipIndex + 1) % safetyTips.length;
    }, 5000);

    // Incident Report Feature
    document.getElementById('submitReport').addEventListener('click', () => {
        const description = document.getElementById('incidentDescription').value;
        const location = document.getElementById('incidentLocation').value;
        if (description && location) {
            alert('Incident report submitted successfully.');
            console.log(`Incident Description: ${description}, Location: ${location}`);
        } else {
            alert('Please fill out both fields.');
        }
    });

    // Safety Alerts Feature
    const alertsDiv = document.getElementById('alerts');
    const alerts = [
        'Be cautious while traveling alone.',
        'Stay in well-lit areas at night.',
        'Always lock your car doors when parked.'
    ];
    let alertIndex = 0;
    setInterval(() => {
        alertsDiv.innerText = alerts[alertIndex];
        alertIndex = (alertIndex + 1) % alerts.length;
    }, 4000);
});
