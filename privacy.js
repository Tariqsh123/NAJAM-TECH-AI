// Cursor
const cursor = document.querySelector('.cursor');

document.addEventListener('mousemove', e => {
    cursor.setAttribute("style", "top: "+(e.pageY - 10)+"px; left: "+(e.pageX - 10)+"px;")
})

document.addEventListener('click', () => {
    cursor.classList.add("expand");

    setTimeout(() => {
        cursor.classList.remove("expand");
    }, 500)
})
// Cursor End




// MENU
document.addEventListener('DOMContentLoaded', function () {
    var toggler = document.querySelector('.navbar-toggler');
    
    toggler.addEventListener('click', function () {
        if (this.textContent.trim() === 'MENU') {
            this.textContent = 'CLOSE';
        } else {
            this.textContent = 'MENU';
        }
    });
});

// MENU END


// CHAT  IN WHATSAPP

function openWhatsAppChat() {
    const phoneNumber = '+92312345678'; 
    const message = 'Hi, Thanks for Contacting Us.';
    const encodedMessage = encodeURIComponent(message);
    const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
    window.open(whatsappURL, '_blank');
}

document.getElementById('sticky-message-box').addEventListener('click', openWhatsAppChat);
document.getElementById('last-footer-top-left').addEventListener('click', openWhatsAppChat);

// CHAT  IN WHATSAPP END





// Cookies Bar
document.getElementById('cookie-settings').addEventListener('click', function(e) {
    e.preventDefault();
    document.getElementById('cookie-bar').classList.toggle('hidden');
});

document.getElementById('accept').addEventListener('click', function() {
 
    document.getElementById('cookie-bar').classList.add('hidden');
});

document.getElementById('decline').addEventListener('click', function() {

    document.getElementById('cookie-bar').classList.add('hidden');
});

/* COOKIES BAR End  */



// FOOTER EMAIL 
document.getElementById('email-form').addEventListener('submit', function(e) {
    e.preventDefault();

    const emailInput = document.getElementById('email-input');
    const emailValue = emailInput.value;

   
    const gmailDomain = '@gmail.com';
    if (emailValue) {
        if (emailValue.endsWith(gmailDomain)) {
           
            alert('Email submitted: ' + emailValue);


            emailInput.value = '';
        } else {
            alert('Please enter a valid email address ending with ' + gmailDomain);
        }
    } else {
        alert('Please enter a valid email address.');
    }
});


document.getElementById('email-input').addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        document.getElementById('email-form').dispatchEvent(new Event('submit'));
    }
});


const arrow = document.querySelector('#footer-mid1-mid::after');
document.querySelector('#footer-mid1-mid').addEventListener('click', function(e) {
    if (e.target === this) { 
        document.getElementById('email-form').dispatchEvent(new Event('submit'));
    }
});


// FOOTER EMAIL END