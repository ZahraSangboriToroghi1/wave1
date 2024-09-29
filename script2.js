document.addEventListener('DOMContentLoaded', function() {
    function checkURL(url) {
        const pattern = /^https:\/\/app\.resonancecard\.com\/[0-9]{2,3}[0-9]{2,3}[0-9]{5}[0-9]{2}[0-9]{5}$/;
        return pattern.test(url);
    }

    // Event listener for the "Continue" button in index5.html
    const continueButton5 = document.querySelector('.continue-button-5');
    if (continueButton5) {
        continueButton5.addEventListener('click', function() {
            const file = document.getElementById('uploadQRCode').files[0];
            const reader = new FileReader();

            reader.onload = function (e) {
                localStorage.setItem('qrCode', e.target.result);
                window.location.href = 'index6.html';
            };

            if (file) {
                reader.readAsDataURL(file);
            }
        });
    }

    // Event listener for the "Analytics" link in index7.html
    const analyticsLink = document.querySelector('.analytics-link');
    if (analyticsLink) {
        analyticsLink.addEventListener('click', function(e) {
            const qrCode = localStorage.getItem('qrCode');
            if (!checkURL(qrCode)) {
                e.preventDefault();
                window.location.href = 'index10.html';
            }
        });
    }

    // Event listener for the "See Pricing" button in index10.html
    const pricingButton = document.querySelector('.pricing-button');
    if (pricingButton) {
        pricingButton.addEventListener('click', function() {
            window.location.href = 'index13.html';
        });
    }

    // Event listener for the "Cancel" button in index10.html
    const cancelButton = document.querySelector('.cancel-button');
    if (cancelButton) {
        cancelButton.addEventListener('click', function() {
            window.location.href = 'index8.html';
        });
    }
});
