// ذخیره تنظیمات زبان
document.getElementById('language').addEventListener('change', function() {
    const selectedLanguage = this.value;
    localStorage.setItem('language', selectedLanguage);
    applyLanguage(selectedLanguage);
});

// ذخیره تنظیمات تم
document.getElementById('light-mode').addEventListener('change', function() {
    const isLightMode = this.checked;
    localStorage.setItem('theme', isLightMode ? 'light' : 'dark');
    applyTheme(isLightMode ? 'light' : 'dark');
});

function applyLanguage(language) {
    const elements = document.querySelectorAll('[data-lang]');
    elements.forEach(el => {
        const translationKey = el.getAttribute('data-lang');
        if (translations[language] && translations[language][translationKey]) {
            el.textContent = translations[language][translationKey];
        }
    });
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

const translations = {
    english: {
        profile: 'Profile',
        contacts: 'Contacts',
        analytics: 'Analytics',
        settings: 'Settings',
        shareProfile: 'Share your profile',
        contactUs: 'Contact Us',
        choosePlan: 'Choose Your Plan',
        unlockExperience: 'Unlock the full networking experience with upgrade features',
        monthly: 'Monthly',
        annually: 'Annually',
        discount: '17% discount',
        whatsIncluded: 'What’s included',
        crmIntegrations: 'CRM Integrations',
        realTimeAnalytics: 'Real-Time Analytics',
        calendarIntegration: 'Calendar Integration',
        accessProContent: 'Access to Pro Content',
        showcaseTeam: 'Showcase Your Team',
        contactSales: 'Contact sales to discuss Enterprise plans',
        cancelAnytime: 'Cancel anytime. Price in USD',
        shopProducts: 'Shop Products',
        pricing: 'Pricing',
        faq: 'FAQ',
        legals: 'Legals',
        termsOfUse: 'Terms of Use',
        privacyPolicy: 'Privacy Policy',
        firstName: 'First name',
        lastName: 'Last name',
        accountEmail: 'Account Email',
        accountPhone: 'Account Phone',
        darkMode: 'Dark Mode',
        language: 'Language',
        saveChanges: 'Save changes',
        editProfile: 'Edit Profile',
        pageViews: 'Page Views',
        pageClicks: 'Page Clicks',
        ctr: 'CTR',
        contactsCollected: 'Contacts Collected'
    },
    arabic: {
        profile: 'الملف الشخصي',
        contacts: 'جهات الاتصال',
        analytics: 'التحليلات',
        settings: 'الإعدادات',
        shareProfile: 'شارك ملفك الشخصي',
        contactUs: 'اتصل بنا',
        choosePlan: 'اختر خطتك',
        unlockExperience: 'افتح تجربة الشبكات الكاملة بميزات الترقية',
        monthly: 'شهرياً',
        annually: 'سنوياً',
        discount: 'خصم 17%',
        whatsIncluded: 'ما هو مشمول',
        crmIntegrations: 'تكاملات CRM',
        realTimeAnalytics: 'التحليلات في الوقت الحقيقي',
        calendarIntegration: 'تكامل التقويم',
        accessProContent: 'الوصول إلى المحتوى الاحترافي',
        showcaseTeam: 'عرض فريقك',
        contactSales: 'اتصل بالمبيعات لمناقشة خطط الشركات',
        cancelAnytime: 'إلغاء في أي وقت. السعر بالدولار الأمريكي',
        shopProducts: 'تسوق المنتجات',
        pricing: 'التسعير',
        faq: 'الأسئلة الشائعة',
        legals: 'الوثائق القانونية',
        termsOfUse: 'شروط الاستخدام',
        privacyPolicy: 'سياسة الخصوصية',
        firstName: 'الاسم الأول',
        lastName: 'الاسم الأخير',
        accountEmail: 'البريد الإلكتروني للحساب',
        accountPhone: 'هاتف الحساب',
        darkMode: 'الوضع الداكن',
        language: 'اللغة',
        saveChanges: 'حفظ التغييرات',
        editProfile: 'تعديل الملف الشخصي',
        pageViews: 'مشاهدات الصفحة',
        pageClicks: 'نقرات الصفحة',
        ctr: 'نسبة النقر إلى الظهور',
        contactsCollected: 'جهات الاتصال التي تم جمعها'
    },
    farsi: {
        profile: 'نمایه',
        contacts: 'مخاطبین',
        analytics: 'تجزیه و تحلیل',
        settings: 'تنظیمات',
        shareProfile: 'اشتراک گذاری نمایه شما',
        contactUs: 'تماس با ما',
        choosePlan: 'طرح خود را انتخاب کنید',
        unlockExperience: 'با ویژگی‌های ارتقا تجربه کامل شبکه‌سازی را باز کنید',
        monthly: 'ماهانه',
        annually: 'سالانه',
        discount: '17٪ تخفیف',
        whatsIncluded: 'چه چیزی شامل است',
        crmIntegrations: 'ادغام‌های CRM',
        realTimeAnalytics: 'تجزیه و تحلیل در زمان واقعی',
        calendarIntegration: 'ادغام تقویم',
        accessProContent: 'دسترسی به محتوای حرفه‌ای',
        showcaseTeam: 'نمایش تیم شما',
        contactSales: 'برای بحث در مورد برنامه‌های سازمانی با فروش تماس بگیرید',
        cancelAnytime: 'لغو در هر زمان. قیمت به دلار آمریکا',
        shopProducts: 'خرید محصولات',
        pricing: 'قیمت گذاری',
        faq: 'سوالات متداول',
        legals: 'قوانین',
        termsOfUse: 'شرایط استفاده',
        privacyPolicy: 'سیاست حفظ حریم خصوصی',
        firstName: 'نام',
        lastName: 'نام خانوادگی',
        accountEmail: 'ایمیل حساب کاربری',
        accountPhone: 'تلفن حساب کاربری',
        darkMode: 'حالت تاریک',
        language: 'زبان',
        saveChanges: 'ذخیره تغییرات',
        editProfile: 'ویرایش نمایه',
        pageViews: 'مشاهدات صفحه',
        pageClicks: 'کلیک‌های صفحه',
        ctr: 'نرخ کلیک',
        contactsCollected: 'مخاطبین جمع آوری شده'
    }
};

// اعمال تنظیمات ذخیره شده
document.addEventListener('DOMContentLoaded', function() {
    const savedLanguage = localStorage.getItem('language');
    const savedTheme = localStorage.getItem('theme');
    if (savedLanguage) {
        applyLanguage(savedLanguage);
        document.getElementById('language').value = savedLanguage;
    }
    if (savedTheme) {
        applyTheme(savedTheme);
        document.getElementById('light-mode').checked = (savedTheme === 'light');
    }
});
