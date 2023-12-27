const btn = document.getElementById('menu-btn');
const nav = document.getElementById('menu');
const menuLinks = document.querySelectorAll('#menu a');

btn.addEventListener('click', () => {
    btn.classList.toggle('open');
    nav.classList.toggle('flex');
    nav.classList.toggle('hidden');
});

// Add event listener to each menu link
menuLinks.forEach(link => {
    link.addEventListener('click', () => {
        // Close the menu when a link is clicked
        btn.classList.remove('open');
        nav.classList.remove('flex');
        nav.classList.add('hidden');
    });
});

// JavaScript code for sharing on different platforms
function shareOnWhatsApp(event) {
    event.preventDefault();
    var websiteUrl = encodeURIComponent('https://dev-daizy.github.io/TEJWANI-ASSOCIATES/');
    var whatsappUrl = 'https://api.whatsapp.com/send?text=please check this out CS vaibhav tejwani profile : ' + websiteUrl;
    window.open(whatsappUrl, '_blank');
    closeShareMenu();
}
function shareOnWhatsAppMobile(event) {
    event.preventDefault();
    var websiteUrl = encodeURIComponent('https://dev-daizy.github.io/TEJWANI-ASSOCIATES/');
    var whatsappUrl = 'https://web.whatsapp.com/send?text=please check this out CS vaibhav tejwani profile : ' + websiteUrl;
    window.open(whatsappUrl, '_blank');
    closeShareMenu();
}

function shareOnTwitter(event) {
    event.preventDefault();
    var websiteUrl = encodeURIComponent('https://dev-daizy.github.io/TEJWANI-ASSOCIATES/');
    var twitterUrl = 'https://twitter.com/intent/tweet?url=' + websiteUrl;
    window.open(twitterUrl, '_blank');
    closeShareMenu();
}

function shareOnFacebook(event) {
    event.preventDefault();
    var websiteUrl = encodeURIComponent('https://dev-daizy.github.io/TEJWANI-ASSOCIATES/');
    var facebookUrl = 'https://www.facebook.com/sharer/sharer.php?u=' + websiteUrl;
    window.open(facebookUrl, '_blank');
    closeShareMenu();
}

function closeShareMenu() {
    document.getElementById('shareMenu').classList.add('hidden');
}

document.getElementById('shareButton').addEventListener('click', function() {
    var shareMenu = document.getElementById('shareMenu');
    shareMenu.classList.toggle('hidden');
});

// Close the share menu when clicking outside of it
document.addEventListener('click', function(event) {
    var shareButton = document.getElementById('shareButton');
    var shareMenu = document.getElementById('shareMenu');

    if (!shareButton.contains(event.target) && !shareMenu.contains(event.target)) {
        shareMenu.classList.add('hidden');
    }
});
function redirectToPayment() {
    // Replace the placeholders with your actual UPI information
    var upiLink = "upi://pay?pa=vaibhavtejwani02@okhdfcbank&pn=vaibhav%20tejwani&mc=<merchant-code>&tid=<transaction-id>&tr=<transaction-ref-id>&tn=&am=<transaction-amount>&cu=<currency-code>&url=<url>";

    // Redirect the user to the UPI payment link
    window.location.href = upiLink;
}


// Smooth scrolling using JavaScript
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
