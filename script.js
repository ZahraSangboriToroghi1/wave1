
// document.addEventListener('DOMContentLoaded', function() {
//     function redirectTo(url) {
//         window.location.href = url;
//     }

//     function showAlert(missingFields) {
//         alert('Please fill in the following fields: ' + missingFields.join(', '));
//     }


//     function applyTheme(theme) {
//         if (theme === 'dark') {
//             document.body.classList.add('dark-mode');
//             document.body.classList.remove('light-mode');
//         } else {
//             document.body.classList.add('light-mode');
//             document.body.classList.remove('dark-mode');
//         }
//     }

//     function applyLanguage(language) {
//         const elements = document.querySelectorAll('[data-lang]');
//         elements.forEach(el => {
//             const translationKey = el.getAttribute('data-lang');
//             if (translations[language] && translations[language][translationKey]) {
//                 el.textContent = translations[language][translationKey];
//             }
//         });
//     }
//     // index.html - Redirect to index1.html on Sign Up button click


//     const signUpButton = document.querySelector('.sign-up');
//     const logInButton = document.querySelector('.log-in');
//     if (signUpButton) {
//         signUpButton.addEventListener('click', function() {
//             redirectTo('login.html');
//         });
//     }
//     if (logInButton) {
//         logInButton.addEventListener('click', function() {
//             redirectTo('login.html');
//         });
//     }




//     function showAlert(message) {
//         alert(message);
//     }

//     function generateVerificationCode() {
//         return Math.floor(100000 + Math.random() * 900000).toString();
//     }

//     // Handling login.html form submission
//     const continueButton = document.querySelector('.continue');
//     if (continueButton) {
//         continueButton.addEventListener('click', function() {
//             const contact = document.getElementById('contact').value.trim();
//             if (contact) {
//                 const verificationCode = generateVerificationCode();
//                 localStorage.setItem('verificationCode', verificationCode);
//                 localStorage.setItem('contact', contact);
//                 showAlert(`Verification code sent to ${contact}: ${verificationCode}`); // Simulate sending code
//                 redirectTo('verify.html');
//             } else {
//                 showAlert('Please enter your phone number or email.');
//             }
//         });
//     }



//     const verifyButton = document.querySelector('.verify');
//     if (verifyButton) {
//         const contactDisplay = document.getElementById('contact-display');
//         const savedContact = localStorage.getItem('contact');
//         if (savedContact) {
//             contactDisplay.textContent = savedContact;
//         }

//         verifyButton.addEventListener('click', function() {
//             const enteredCode = [
//                 document.getElementById('digit1').value,
//                 document.getElementById('digit2').value,
//                 document.getElementById('digit3').value,
//                 document.getElementById('digit4').value,
//                 document.getElementById('digit5').value,
//                 document.getElementById('digit6').value
//             ].join('');
//             const savedCode = localStorage.getItem('verificationCode');
//             if (enteredCode === savedCode) {
//                 redirectTo('index1.html');
//             } else {
//                 document.getElementById('error-message').textContent = 'Incorrect verification code. Please try again.';
//             }
//         });
//     }


//     // index1.html - Validate form and redirect to index2.html
//     const signupForm = document.getElementById('signupForm');
//     if (signupForm) {
//         signupForm.addEventListener('submit', function(event) {
//             event.preventDefault();
//             const firstName = document.getElementById('firstName').value.trim();
//             const lastName = document.getElementById('lastName').value.trim();
//             const phone = document.getElementById('phone').value.trim();
//             const missingFields = [];

//             if (!firstName) missingFields.push('First Name');
//             if (!lastName) missingFields.push('Last Name');
//             if (!phone) missingFields.push('Phone Number');

//             if (missingFields.length > 0) {
//                 showAlert(missingFields);
//             } else {
//                 localStorage.setItem('userName', `${firstName} ${lastName}`);
//                 redirectTo('index2.html');
//             }
//         });

//         const phoneInput = document.getElementById('phone');
//         intlTelInput(phoneInput, {
//             initialCountry: "auto",
//             geoIpLookup: function(callback) {
//                 fetch('https://ipinfo.io?token=<your_token>', { headers: { 'Accept': 'application/json' }})
//                     .then(response => response.json())
//                     .then(data => callback(data.country))
//                     .catch(() => callback('us'));
//             }
//         });
//     }

//     const translations = {
//         english: {
//             profile: 'Profile',
//             contacts: 'Contacts',
//             analytics: 'Analytics',
//             settings: 'Settings',
//             darkMode: 'Dark Mode',
//             language: 'Language',
//             account: 'Account',
//             sharing: 'Sharing',
//             integrations: 'Integrations',
//             billing: 'Billing',
//             products: 'Products',
//             saveChanges: 'Save changes',
//             username: 'Username',
//             usernameWarning: 'Changing your username can have unintended side effects',
//             connectedAccounts: 'Connected Accounts',
//             connectedAccountsDesc: 'Connect your account with a third-party service to use it for login',
//             connect: 'Connect',
//             deleteAccount: 'Delete Account',
//             deleteAccountDesc: 'Note that deleting your account will also delete any organizations in which you are the only member',
//             delete: 'Delete',
//             shopProducts: 'Shop Products',
//             pricing: 'Pricing',
//             faq: 'FAQ',
//             legals: 'Legals',
//             termsOfUse: 'Terms of Use',
//             privacyPolicy: 'Privacy Policy',
//             shareProfile: 'Share your profile',
//             contactUs: 'Contact Us',
//             firstName: 'First name',
//             lastName: 'Last name',
//             accountEmail: 'Account Email',
//             accountPhone: 'Account Phone'
//         },
//         arabic: {
//             profile: 'الملف الشخصي',
//             contacts: 'جهات الاتصال',
//             analytics: 'التحليلات',
//             settings: 'الإعدادات',
//             darkMode: 'الوضع الداكن',
//             language: 'اللغة',
//             account: 'الحساب',
//             sharing: 'مشاركة',
//             integrations: 'التكاملات',
//             billing: 'الفواتير',
//             products: 'المنتجات',
//             saveChanges: 'حفظ التغييرات',
//             username: 'اسم المستخدم',
//             usernameWarning: 'تغيير اسم المستخدم يمكن أن يكون له آثار جانبية غير مقصودة',
//             connectedAccounts: 'الحسابات المتصلة',
//             connectedAccountsDesc: 'قم بتوصيل حسابك بخدمة طرف ثالث لاستخدامها لتسجيل الدخول',
//             connect: 'توصيل',
//             deleteAccount: 'حذف الحساب',
//             deleteAccountDesc: 'لاحظ أن حذف حسابك سيؤدي أيضًا إلى حذف أي مؤسسات تكون أنت العضو الوحيد فيها',
//             delete: 'حذف',
//             shopProducts: 'تسوق المنتجات',
//             pricing: 'التسعير',
//             faq: 'الأسئلة الشائعة',
//             legals: 'الوثائق القانونية',
//             termsOfUse: 'شروط الاستخدام',
//             privacyPolicy: 'سياسة الخصوصية',
//             shareProfile: 'شارك ملفك الشخصي',
//             contactUs: 'اتصل بنا',
//             firstName: 'الاسم الأول',
//             lastName: 'الاسم الأخير',
//             accountEmail: 'البريد الإلكتروني للحساب',
//             accountPhone: 'هاتف الحساب'
//         },
//         farsi: {
//             profile: 'نمایه',
//             contacts: 'مخاطبین',
//             analytics: 'تجزیه و تحلیل',
//             settings: 'تنظیمات',
//             darkMode: 'حالت تاریک',
//             language: 'زبان',
//             account: 'حساب کاربری',
//             sharing: 'اشتراک گذاری',
//             integrations: 'یکپارچه‌سازی‌ها',
//             billing: 'صورتحساب',
//             products: 'محصولات',
//             saveChanges: 'ذخیره تغییرات',
//             username: 'نام کاربری',
//             usernameWarning: 'تغییر نام کاربری می‌تواند عوارض جانبی ناخواسته داشته باشد',
//             connectedAccounts: 'حساب‌های متصل',
//             connectedAccountsDesc: 'حساب خود را با یک سرویس شخص ثالث برای استفاده از ورود متصل کنید',
//             connect: 'متصل کردن',
//             deleteAccount: 'حذف حساب',
//             deleteAccountDesc: 'توجه داشته باشید که حذف حساب شما همچنین باعث حذف هر سازمانی که شما تنها عضو آن هستید خواهد شد',
//             delete: 'حذف کردن',
//             shopProducts: 'خرید محصولات',
//             pricing: 'قیمت گذاری',
//             faq: 'سوالات متداول',
//             legals: 'قوانین',
//             termsOfUse: 'شرایط استفاده',
//             privacyPolicy: 'سیاست حفظ حریم خصوصی',
//             shareProfile: 'اشتراک گذاری نمایه شما',
//             contactUs: 'تماس با ما',
//             firstName: 'نام',
//             lastName: 'نام خانوادگی',
//             accountEmail: 'ایمیل حساب کاربری',
//             accountPhone: 'تلفن حساب کاربری'
//         }
//     };

//     // Apply saved theme and language settings
//     const savedTheme = localStorage.getItem('theme');
//     const savedLanguage = localStorage.getItem('language');
//     if (savedTheme) applyTheme(savedTheme);
//     if (savedLanguage) applyLanguage(savedLanguage);

//     // Toggle dark mode
//     const darkModeToggle = document.getElementById('dark-mode');
//     if (darkModeToggle) {
//         darkModeToggle.addEventListener('change', function() {
//             const theme = darkModeToggle.checked ? 'dark' : 'light';
//             localStorage.setItem('theme', theme);
//             applyTheme(theme);
//         });
//     }

//     // Language selection
//     const languageSelect = document.getElementById('language');
//     if (languageSelect) {
//         languageSelect.addEventListener('change', function() {
//             const language = languageSelect.value;
//             localStorage.setItem('language', language);
//             applyLanguage(language);
//         });
//     }

// // Load saved data in index11.html
//     const accountForm = document.getElementById('account-form');
//     if (accountForm) {
//         const savedFirstName = localStorage.getItem('firstName');
//         const savedLastName = localStorage.getItem('lastName');
//         if (savedFirstName) document.getElementById('first-name').value = savedFirstName;
//         if (savedLastName) document.getElementById('last-name').value = savedLastName;
    
//         accountForm.addEventListener('submit', function(event) {
//             event.preventDefault();
//             const firstName = document.getElementById('first-name').value.trim();
//             const lastName = document.getElementById('last-name').value.trim();
//             const email = document.getElementById('email').value.trim();
//             const phone = document.getElementById('phone').value.trim();
//             const language = document.getElementById('language').value;
//                 const darkMode = document.getElementById('dark-mode').checked;

//             localStorage.setItem('firstName', firstName);
//             localStorage.setItem('lastName', lastName);
//             localStorage.setItem('email', email);
//             localStorage.setItem('phone', phone);
//             localStorage.setItem('language', language);
//             localStorage.setItem('darkMode', darkMode);
//             alert('Changes saved successfully');
//         });
//     }
//     // /////////////////////////////////

//     // index2.html - Validate form and redirect to index3.html
//     const profileForm = document.getElementById('profileForm');
//     if (profileForm) {
//         profileForm.addEventListener('submit', function(event) {
//             event.preventDefault();
//             const jobTitle = document.getElementById('jobTitle').value.trim();
//             const company = document.getElementById('company').value.trim();
//             const location = document.getElementById('location').value.trim();
//             const missingFields = [];

//             if (!jobTitle) missingFields.push('Job Title');
//             if (!company) missingFields.push('Company');
//             if (!location) missingFields.push('Location');

//             if (missingFields.length > 0) {
//                 showAlert(missingFields);
//             } else {
//                 localStorage.setItem('occupationLocation', `${jobTitle}, ${company}, ${location}`);
//                 redirectTo('index3.html');
//             }
//         });
//     }

//     // index3.html - Handle image upload and redirect to index4.html
//     const profileImageInput = document.getElementById('profileImage');
//     const continueButton3 = document.querySelector('.continue-button-3');

//     if (profileImageInput && continueButton3) {
//         profileImageInput.addEventListener('change', function() {
//             const file = profileImageInput.files[0];
//             const reader = new FileReader();

//             reader.onload = function(e) {
//                 const imagePreview = document.getElementById('imagePreview');
//                 imagePreview.src = e.target.result;
//                 imagePreview.style.display = 'block';
//             };

//             if (file) {
//                 reader.readAsDataURL(file);
//             }
//         });

//         continueButton3.addEventListener('click', function() {
//             if (!profileImageInput.files.length) {
//                 alert('Please upload an image.');
//             } else {
//                 const file = profileImageInput.files[0];
//                 const reader = new FileReader();

//                 reader.onloadend = function() {
//                     localStorage.setItem('profileImage', reader.result);
//                     redirectTo('index4.html');
//                 };

//                 if (file) {
//                     reader.readAsDataURL(file);
//                 }
//             }
//         });
//     }


//     // index5.html - Validate QR code and redirect to index6.html
//     const continueButton5 = document.querySelector('.continue-button-5');
//     if (continueButton5) {
//         continueButton5.addEventListener('click', function() {
//             // Add validation logic for QR code if needed
//             redirectTo('index6.html');
//         });
//     }

//     // index6.html - Handle app download and redirect to index7.html
//     const downloadButtons = document.querySelectorAll('.download');
//     const continueButton6 = document.querySelector('.continue-button-6');
//     if (downloadButtons && continueButton6) {
//         downloadButtons.forEach(button => {
//             button.addEventListener('click', function() {
//                 // Add logic to handle app download if needed
//             });
//         });

//         continueButton6.addEventListener('click', function() {
//             redirectTo('index7.html');
//         });
//     }


//     // Load profile image and user info from localStorage in index7.html
// //     const profileImage = localStorage.getItem('profileImage');
// //     const userName = localStorage.getItem('userName');
// //     const occupationLocation = localStorage.getItem('occupationLocation');

// //     if (profileImage) {
// //         document.querySelectorAll('.header-top-right img, #profile-pic-main').forEach(img => img.src = profileImage);
// //     }
// //     if (userName) {
// //         document.querySelectorAll('#user-name').forEach(el => el.innerText = userName);
// //     }
// //     if (occupationLocation) {
// //         document.querySelectorAll('#occupation-location').forEach(el => el.innerText = occupationLocation);
// //     }

// //     function editProfile() {
// //         let newProfileImage = prompt("Enter new profile image URL:");
// //         let newUserName = prompt("Enter new user name:");
// //         let newOccupationLocation = prompt("Enter new occupation and location:");

// //         if (newProfileImage) {
// //             localStorage.setItem("profileImage", newProfileImage);
// //             document.querySelector(".header-top-right img").src = newProfileImage;
// //             document.querySelector("#profile-pic-main").src = newProfileImage;
// //         }
// //         if (newUserName) {
// //             localStorage.setItem("userName", newUserName);
// //             document.getElementById("user-name").innerText = newUserName;
// //         }
// //         if (newOccupationLocation) {
// //             localStorage.setItem("occupationLocation", newOccupationLocation);
// //             document.getElementById("occupation-location").innerText = newOccupationLocation;
// //         }
// //     }
// // });



//    // Your other functions and event listeners...

//     const profileImage = localStorage.getItem('profileImage');
//     const userName = localStorage.getItem('userName');
//     const occupationLocation = localStorage.getItem('occupationLocation');

//     if (profileImage) {
//         document.getElementById("profile-pic-header").src = profileImage;
//         document.getElementById("profile-pic-main").src = profileImage;
//     }
//     if (userName) {
//         document.getElementById("user-name").innerText = userName;
//     } else {
//         document.getElementById("user-name").innerText = "User Name Surname";
//     }
//     if (occupationLocation) {
//         document.getElementById("occupation-location").innerText = occupationLocation;
//     } else {
//         document.getElementById("occupation-location").innerText = "Job Title, Location";
//     }

//     function editProfile() {
//         const editProfileModal = document.getElementById("edit-profile-modal");
//         editProfileModal.style.display = "block";

//         if (profileImage) document.getElementById("edit-profile-image").value = profileImage;
//         if (userName) document.getElementById("edit-user-name").value = userName;
//         if (occupationLocation) document.getElementById("edit-occupation-location").value = occupationLocation;

//         document.getElementById("edit-profile-form").addEventListener("submit", function(event) {
//             event.preventDefault();

//             const newProfileImage = document.getElementById("edit-profile-image").value.trim();
//             const newUserName = document.getElementById("edit-user-name").value.trim();
//             const newOccupationLocation = document.getElementById("edit-occupation-location").value.trim();

//             if (newProfileImage) {
//                 localStorage.setItem("profileImage", newProfileImage);
//                 document.getElementById("profile-pic-header").src = newProfileImage;
//                 document.getElementById("profile-pic-main").src = newProfileImage;
//             }
//             if (newUserName) {
//                 localStorage.setItem("userName", newUserName);
//                 document.getElementById("user-name").innerText = newUserName;
//             }
//             if (newOccupationLocation) {
//                 localStorage.setItem("occupationLocation", newOccupationLocation);
//                 document.getElementById("occupation-location").innerText = newOccupationLocation;
//             }

//             editProfileModal.style.display = "none";
//         });
//     }

//     window.editProfile = editProfile;
// });



















document.addEventListener('DOMContentLoaded', function() {
    function redirectTo(url) {
        window.location.href = url;
    }

    function showAlert(missingFields) {
        alert('Please fill in the following fields: ' + missingFields.join(', '));
    }


    function applyTheme(theme) {
        if (theme === 'dark') {
            document.body.classList.add('dark-mode');
            document.body.classList.remove('light-mode');
        } else {
            document.body.classList.add('light-mode');
            document.body.classList.remove('dark-mode');
        }
    }

    function applyLanguage(language) {
        const elements = document.querySelectorAll('[data-lang]');
        elements.forEach(el => {
            const translationKey = el.getAttribute('data-lang');
            if (translations[language] && translations[language][translationKey]) {
                el.textContent = translations[language][translationKey];
            }
        });
    }
    // index.html - Redirect to index1.html on Sign Up button click


    const signUpButton = document.querySelector('.sign-up');
    const logInButton = document.querySelector('.log-in');
    if (signUpButton) {
        signUpButton.addEventListener('click', function() {
            redirectTo('login.html');
        });
    }
    if (logInButton) {
        logInButton.addEventListener('click', function() {
            redirectTo('login.html');
        });
    }




    function showAlert(message) {
        alert(message);
    }

    function generateVerificationCode() {
        return Math.floor(100000 + Math.random() * 900000).toString();
    }

    // Handling login.html form submission
    const continueButton = document.querySelector('.continue');
    if (continueButton) {
        continueButton.addEventListener('click', function() {
            const contact = document.getElementById('contact').value.trim();
            if (contact) {
                const verificationCode = generateVerificationCode();
                localStorage.setItem('verificationCode', verificationCode);
                localStorage.setItem('contact', contact);
                showAlert(`Verification code sent to ${contact}: ${verificationCode}`); // Simulate sending code
                redirectTo('verify.html');
            } else {
                showAlert('Please enter your phone number or email.');
            }
        });
    }



    const verifyButton = document.querySelector('.verify');
    if (verifyButton) {
        const contactDisplay = document.getElementById('contact-display');
        const savedContact = localStorage.getItem('contact');
        if (savedContact) {
            contactDisplay.textContent = savedContact;
        }

        verifyButton.addEventListener('click', function() {
            const enteredCode = [
                document.getElementById('digit1').value,
                document.getElementById('digit2').value,
                document.getElementById('digit3').value,
                document.getElementById('digit4').value,
                document.getElementById('digit5').value,
                document.getElementById('digit6').value
            ].join('');
            const savedCode = localStorage.getItem('verificationCode');
            if (enteredCode === savedCode) {
                redirectTo('index1.html');
            } else {
                document.getElementById('error-message').textContent = 'Incorrect verification code. Please try again.';
            }
        });
    }


    // index1.html - Validate form and redirect to index2.html
    const signupForm = document.getElementById('signupForm');
    if (signupForm) {
        signupForm.addEventListener('submit', function(event) {
            event.preventDefault();
            const firstName = document.getElementById('firstName').value.trim();
            const lastName = document.getElementById('lastName').value.trim();
            const phone = document.getElementById('phone').value.trim();
            const missingFields = [];

            if (!firstName) missingFields.push('First Name');
            if (!lastName) missingFields.push('Last Name');
            if (!phone) missingFields.push('Phone Number');

            if (missingFields.length > 0) {
                showAlert(missingFields);
            } else {
                localStorage.setItem('userName', `${firstName} ${lastName}`);
                redirectTo('index2.html');
            }
        });

        const phoneInput = document.getElementById('phone');
        intlTelInput(phoneInput, {
            initialCountry: "auto",
            geoIpLookup: function(callback) {
                fetch('https://ipinfo.io?token=<your_token>', { headers: { 'Accept': 'application/json' }})
                    .then(response => response.json())
                    .then(data => callback(data.country))
                    .catch(() => callback('us'));
            }
        });
    }

    const translations = {
        english: {
            profile: 'Profile',
            contacts: 'Contacts',
            analytics: 'Analytics',
            settings: 'Settings',
            darkMode: 'Dark Mode',
            language: 'Language',
            account: 'Account',
            sharing: 'Sharing',
            integrations: 'Integrations',
            billing: 'Billing',
            products: 'Products',
            saveChanges: 'Save changes',
            username: 'Username',
            usernameWarning: 'Changing your username can have unintended side effects',
            connectedAccounts: 'Connected Accounts',
            connectedAccountsDesc: 'Connect your account with a third-party service to use it for login',
            connect: 'Connect',
            deleteAccount: 'Delete Account',
            deleteAccountDesc: 'Note that deleting your account will also delete any organizations in which you are the only member',
            delete: 'Delete',
            shopProducts: 'Shop Products',
            pricing: 'Pricing',
            faq: 'FAQ',
            legals: 'Legals',
            termsOfUse: 'Terms of Use',
            privacyPolicy: 'Privacy Policy',
            shareProfile: 'Share your profile',
            contactUs: 'Contact Us',
            firstName: 'First name',
            lastName: 'Last name',
            accountEmail: 'Account Email',
            accountPhone: 'Account Phone'
        },
        arabic: {
            profile: 'الملف الشخصي',
            contacts: 'جهات الاتصال',
            analytics: 'التحليلات',
            settings: 'الإعدادات',
            darkMode: 'الوضع الداكن',
            language: 'اللغة',
            account: 'الحساب',
            sharing: 'مشاركة',
            integrations: 'التكاملات',
            billing: 'الفواتير',
            products: 'المنتجات',
            saveChanges: 'حفظ التغييرات',
            username: 'اسم المستخدم',
            usernameWarning: 'تغيير اسم المستخدم يمكن أن يكون له آثار جانبية غير مقصودة',
            connectedAccounts: 'الحسابات المتصلة',
            connectedAccountsDesc: 'قم بتوصيل حسابك بخدمة طرف ثالث لاستخدامها لتسجيل الدخول',
            connect: 'توصيل',
            deleteAccount: 'حذف الحساب',
            deleteAccountDesc: 'لاحظ أن حذف حسابك سيؤدي أيضًا إلى حذف أي مؤسسات تكون أنت العضو الوحيد فيها',
            delete: 'حذف',
            shopProducts: 'تسوق المنتجات',
            pricing: 'التسعير',
            faq: 'الأسئلة الشائعة',
            legals: 'الوثائق القانونية',
            termsOfUse: 'شروط الاستخدام',
            privacyPolicy: 'سياسة الخصوصية',
            shareProfile: 'شارك ملفك الشخصي',
            contactUs: 'اتصل بنا',
            firstName: 'الاسم الأول',
            lastName: 'الاسم الأخير',
            accountEmail: 'البريد الإلكتروني للحساب',
            accountPhone: 'هاتف الحساب'
        },
        farsi: {
            profile: 'نمایه',
            contacts: 'مخاطبین',
            analytics: 'تجزیه و تحلیل',
            settings: 'تنظیمات',
            darkMode: 'حالت تاریک',
            language: 'زبان',
            account: 'حساب کاربری',
            sharing: 'اشتراک گذاری',
            integrations: 'یکپارچه‌سازی‌ها',
            billing: 'صورتحساب',
            products: 'محصولات',
            saveChanges: 'ذخیره تغییرات',
            username: 'نام کاربری',
            usernameWarning: 'تغییر نام کاربری می‌تواند عوارض جانبی ناخواسته داشته باشد',
            connectedAccounts: 'حساب‌های متصل',
            connectedAccountsDesc: 'حساب خود را با یک سرویس شخص ثالث برای استفاده از ورود متصل کنید',
            connect: 'متصل کردن',
            deleteAccount: 'حذف حساب',
            deleteAccountDesc: 'توجه داشته باشید که حذف حساب شما همچنین باعث حذف هر سازمانی که شما تنها عضو آن هستید خواهد شد',
            delete: 'حذف کردن',
            shopProducts: 'خرید محصولات',
            pricing: 'قیمت گذاری',
            faq: 'سوالات متداول',
            legals: 'قوانین',
            termsOfUse: 'شرایط استفاده',
            privacyPolicy: 'سیاست حفظ حریم خصوصی',
            shareProfile: 'اشتراک گذاری نمایه شما',
            contactUs: 'تماس با ما',
            firstName: 'نام',
            lastName: 'نام خانوادگی',
            accountEmail: 'ایمیل حساب کاربری',
            accountPhone: 'تلفن حساب کاربری'
        }
    };

    // Apply saved theme and language settings
    const savedTheme = localStorage.getItem('theme');
    const savedLanguage = localStorage.getItem('language');
    if (savedTheme) applyTheme(savedTheme);
    if (savedLanguage) applyLanguage(savedLanguage);

    // Toggle dark mode
    const darkModeToggle = document.getElementById('dark-mode');
    if (darkModeToggle) {
        darkModeToggle.addEventListener('change', function() {
            const theme = darkModeToggle.checked ? 'dark' : 'light';
            localStorage.setItem('theme', theme);
            applyTheme(theme);
        });
    }

    // Language selection
    const languageSelect = document.getElementById('language');
    if (languageSelect) {
        languageSelect.addEventListener('change', function() {
            const language = languageSelect.value;
            localStorage.setItem('language', language);
            applyLanguage(language);
        });
    }

// Load saved data in index11.html
    const accountForm = document.getElementById('account-form');
    if (accountForm) {
        const savedFirstName = localStorage.getItem('firstName');
        const savedLastName = localStorage.getItem('lastName');
        if (savedFirstName) document.getElementById('first-name').value = savedFirstName;
        if (savedLastName) document.getElementById('last-name').value = savedLastName;
    
        accountForm.addEventListener('submit', function(event) {
            event.preventDefault();
            const firstName = document.getElementById('first-name').value.trim();
            const lastName = document.getElementById('last-name').value.trim();
            const email = document.getElementById('email').value.trim();
            const phone = document.getElementById('phone').value.trim();
            const language = document.getElementById('language').value;
                const darkMode = document.getElementById('dark-mode').checked;

            localStorage.setItem('firstName', firstName);
            localStorage.setItem('lastName', lastName);
            localStorage.setItem('email', email);
            localStorage.setItem('phone', phone);
            localStorage.setItem('language', language);
            localStorage.setItem('darkMode', darkMode);
            alert('Changes saved successfully');
        });
    }
    // /////////////////////////////////

    // index2.html - Validate form and redirect to index3.html
    const profileForm = document.getElementById('profileForm');
    if (profileForm) {
        profileForm.addEventListener('submit', function(event) {
            event.preventDefault();
            const jobTitle = document.getElementById('jobTitle').value.trim();
            const company = document.getElementById('company').value.trim();
            const location = document.getElementById('location').value.trim();
            const missingFields = [];

            if (!jobTitle) missingFields.push('Job Title');
            if (!company) missingFields.push('Company');
            if (!location) missingFields.push('Location');

            if (missingFields.length > 0) {
                showAlert(missingFields);
            } else {
                localStorage.setItem('occupationLocation', `${jobTitle}, ${company}, ${location}`);
                redirectTo('index3.html');
            }
        });
    }

    // index3.html - Handle image upload and redirect to index4.html
    const profileImageInput = document.getElementById('profileImage');
    const continueButton3 = document.querySelector('.continue-button-3');

    if (profileImageInput && continueButton3) {
        profileImageInput.addEventListener('change', function() {
            const file = profileImageInput.files[0];
            const reader = new FileReader();

            reader.onload = function(e) {
                const imagePreview = document.getElementById('imagePreview');
                imagePreview.src = e.target.result;
                imagePreview.style.display = 'block';
            };

            if (file) {
                reader.readAsDataURL(file);
            }
        });

        continueButton3.addEventListener('click', function() {
            if (!profileImageInput.files.length) {
                alert('Please upload an image.');
            } else {
                const file = profileImageInput.files[0];
                const reader = new FileReader();

                reader.onloadend = function() {
                    localStorage.setItem('profileImage', reader.result);
                    redirectTo('index4.html');
                };

                if (file) {
                    reader.readAsDataURL(file);
                }
            }
        });
    }


    // index5.html - Validate QR code and redirect to index6.html
    const continueButton5 = document.querySelector('.continue-button-5');
    if (continueButton5) {
        continueButton5.addEventListener('click', function() {
            // Add validation logic for QR code if needed
            redirectTo('index7.html');
        });
    }

    // // index6.html - Handle app download and redirect to index7.html
    // const downloadButtons = document.querySelectorAll('.download');
    // const continueButton6 = document.querySelector('.continue-button-6');
    // if (downloadButtons && continueButton6) {
    //     downloadButtons.forEach(button => {
    //         button.addEventListener('click', function() {
    //             // Add logic to handle app download if needed
    //         });
    //     });

    //     continueButton6.addEventListener('click', function() {
    //         redirectTo('index7.html');
    //     });
    // }


    // Load profile image and user info from localStorage in index7.html
    const profileImage = localStorage.getItem('profileImage');
    const userName = localStorage.getItem('userName');
    const occupationLocation = localStorage.getItem('occupationLocation');

    if (profileImage) {
        document.querySelectorAll('.header-top-right img, #profile-pic-main').forEach(img => img.src = profileImage);
    }
    if (userName) {
        document.querySelectorAll('#user-name').forEach(el => el.innerText = userName);
    }
    if (occupationLocation) {
        document.querySelectorAll('#occupation-location').forEach(el => el.innerText = occupationLocation);
    }

//     function editProfile() {
//         let newProfileImage = prompt("Enter new profile image URL:");
//         let newUserName = prompt("Enter new user name:");
//         let newOccupationLocation = prompt("Enter new occupation and location:");

//         if (newProfileImage) {
//             localStorage.setItem("profileImage", newProfileImage);
//             document.querySelector(".header-top-right img").src = newProfileImage;
//             document.querySelector("#profile-pic-main").src = newProfileImage;
//         }
//         if (newUserName) {
//             localStorage.setItem("userName", newUserName);
//             document.getElementById("user-name").innerText = newUserName;
//         }
//         if (newOccupationLocation) {
//             localStorage.setItem("occupationLocation", newOccupationLocation);
//             document.getElementById("occupation-location").innerText = newOccupationLocation;
//         }
//     }
});

















