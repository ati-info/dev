function showLoader(event) {
    const targetElement = event.currentTarget;
    
    // যদি এটি Disabled না হয়, তবেই ক্লিক অ্যানিমেশন যোগ করুন
    if (!targetElement.classList.contains('disabled')) {
        // অ্যানিমেশন যোগ
        targetElement.classList.add('is-active');
    } else {
        // যদি ডিসেবল্ড থাকে, তাহলে লিঙ্কের ডিফল্ট আচরণ বন্ধ করুন
        event.preventDefault();
        return; // লোডার দেখানোর প্রয়োজন নেই
    }


    // লোডার দেখানোর জন্য এবং আসল নেভিগেশনের জন্য সামান্য ডিলে (ক্লিক অ্যানিমেশনের জন্য)
    setTimeout(() => {
        document.getElementById('loading-overlay').style.display = 'flex';
        // HTML এর ডিফল্ট লিঙ্ক ব্যবহার করা হয়েছে, তাই অতিরিক্ত JS কোড দরকার নেই
    }, 100); 
}

window.onload = function() {
    // লোডিং স্ক্রিন সরিয়ে মেইন কন্টেন্ট দেখানোর জন্য
    setTimeout(function() {
        document.getElementById('loading-overlay').style.display = 'none';
        document.querySelector('.main-body').style.display = 'flex'; // main-body flex করে দেওয়া হয়েছে
    }, 500);
    
    // নেভিগেট করার পর বা অ্যানিমেশন শেষ হলে is-active ক্লাসটি সরিয়ে ফেলার জন্য
    document.querySelectorAll('.subject-card').forEach(card => {
        card.addEventListener('transitionend', function() {
            card.classList.remove('is-active');
        });
    });
}