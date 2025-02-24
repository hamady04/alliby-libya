// دالة القائمة الجانبية للموبايل
function toggleMenu() {
    const menu = document.getElementById('mobile-menu');
    menu.classList.toggle('active');
}

// دالة الوقت الترحيبي
function welcomeMessage() {
    const hour = new Date().getHours();
    let greeting = '';
    let bgColor = '';

    if (hour < 12) {
        greeting = 'صباح الخير';
        bgColor = '#ffeb3b';  // لون صباحي مشرق
    } else if (hour < 18) {
        greeting = 'مساء الخير';
        bgColor = '#ff9800';  // لون دافئ للمساء
    } else {
        greeting = 'مساء النور';
        bgColor = '#3f51b5';  // لون بارد لوقت الليل
    }

    const message = ${greeting}! أهلاً وسهلاً بك في الموقع;
    alert(message);
    document.body.style.backgroundColor = bgColor; // تغيير خلفية الصفحة حسب الوقت
}

// دالة لإظهار رسالة ترحيب عند تحميل الصفحة
window.onload = function() {
    welcomeMessage();
}

// دالة تغيير اللون الخلفي عند الضغط
function changeBackgroundColor() {
    const colors = ['#ff5733', '#33ff57', '#3357ff', '#ff33a8'];
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    document.body.style.backgroundColor = randomColor;
}

// دالة لطباعة التاريخ الحالي
function showCurrentDate() {
    const currentDate = new Date();
    alert(`التاريخ الحالي هو: ${currentDate.toLocaleDateString()}`);
}

// دالة لإغلاق أو فتح التنبيهات
function toggleAlert() {
    alert("هذه رسالة تنبيهية!");
}