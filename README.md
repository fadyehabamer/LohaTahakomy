<h1 align="center"> لوحة تحكمي </h1>


<p align="center">
  <img src="assets/small.png">
</p>


<div dir="rtl">
  
# لوحة تحكمي

## تحكم و أعرض معلومات عن موقعك بكل سهولة

### قالب HTML من صفحة أربعة صفحات يمكنك استخدامه في : 
- لوحة تحكم لموقعك 
- التحكم في الأعضاء او المنتجات داخل موقعك
- وسيله احترافيه للتحكم و عرض معلومات عن اعمالك

#### مميزات هذا العمل..
-متوافر باللغة العربية و الإنجليزية
- متعدد الأقسام
- متعدد الصفحات
- سهوله التعديل
- كود مرتب و نظيف
- متوافق و متجاوب مع جميع الأجهزة و المتصفحات
- يراعي كافة شروط محركات البحث
- تصميم انيق ومميز
- سهولة تحويله ليناسب عملك الخاص

#### الصفحات المستخدمة : 
- الرئيسية
- تسجيل الدخول 
- اضافه أعضاء او منتجات
- معرفه معلومات اضافيه عن الأعضاء
- احصائيات



#### اللغات و المكتبات المستخدمة
- HTML
- CSS
- JavaScript
- charts.js
  
</div>

<div dir="rtl">

#### معاينة مباشرة
https://lohatahakomy.vercel.app

#### طريقة التشغيل
افتح الملف `index.html` (العربية) أو `index_en.html` (الإنجليزية) في المتصفح، أو شغّل خادمًا محليًا من مجلد المشروع:

</div>

```bash
python3 -m http.server 8000
# http://localhost:8000
```

---

## English

**LohaTahakomy** ("my dashboard") is a static, responsive admin dashboard template in Arabic (RTL) and English: a home page with stat cards and Chart.js charts, a users table, an add-user form and a login page.

**Live demo:** https://lohatahakomy.vercel.app

### Run locally

No build step. Open `index.html` (Arabic) or `index_en.html` (English), or serve the folder with `python3 -m http.server 8000`.

### Structure

```
index.html / index_en.html   dashboard home (AR / EN)
AR/  EN/                     users table, add user, login pages
css/                         myFrame.css (utility classes), style.css, rtl.css, media.css
js/charts.js                 Chart.js charts (Chart.js 2.9.4 from jsDelivr)
js/main.js                   sidebar collapse toggle
```

Font Awesome 5 and Chart.js are loaded from CDNs, so the page needs an internet connection for icons and charts.

### License

[MIT](LICENSE)
