שלום עודד,

הנה כל המידע שהסוכן החדש שלך צריך כדי להמשיך את העבודה על "חנות הממתקים של ג'וי":

# 🍬 חנות הממתקים של ג'וי - מסמך העברה לסוכן חדש

**תאריך:** 23 במרץ 2026
**פרויקט:** Joy's Candy Shop - משחק מתמטיקה חינוכי
**לקוח:** עודד (Oded)

---

## 📍 מיקום הפרויקט

הפרויקט הנוכחי נמצא ב:
```
/home/node/.joni/workspace/joy-candy-shop-redesign/
```

**קבצים עיקריים:**
- `landing.html` - מסך הבית (דף נחיתה)
- `index.html` - המשחק עצמו
- `styles.css` - עיצוב המשחק
- `landing-styles.css` - עיצוב דף הבית
- `game.js` - כל הלוגיקה
- `assets/001-cute-cartoon-princess-character-for-kids.png` - דמות הנסיכה (1.7MB)

---

## 🌐 פרטי Netlify (פרודקשן)

### חשבון Netlify:
- **Email:** odedn1611@gmail.com
- **Password:** Naya161!

### אתר בפרודקשן:
- **URL:** https://remarkable-quokka-cc4442.netlify.app
- **Site ID:** ced34f84-4110-451f-bba7-644fe603be5b
- **Site Name:** remarkable-quokka-cc4442

### API Token (להעלאה אוטומטית):
```
nfp_uBnM9ZoyEyCzoq2tS3BePbLCJfYgeTyMb299
```

---

## 🚀 איך להעלות שינויים לפרודקשן

### אופציה 1: Netlify CLI (מומלץ)

```bash
cd /home/node/.joni/workspace/joy-candy-shop-redesign

# העלאה ישירה לפרודקשן
npx netlify-cli deploy \
--prod \
--dir=. \
--auth=nfp_uBnM9ZoyEyCzoq2tS3BePbLCJfYgeTyMb299 \
--site=ced34f84-4110-451f-bba7-644fe603be5b
```

### אופציה 2: Netlify Dashboard (ידני)

1. התחבר ל-https://app.netlify.com
- Email: odedn1611@gmail.com
- Password: Naya161!
2. בחר את האתר: remarkable-quokka-cc4442
3. גרור קבצים ל-"Deploys" או לחץ "Deploy manually"

---

## 🎮 מבנה הפרויקט

### מסכים במשחק (7 סה"כ):
1. **Landing page** (`landing.html`) - מסך בית עם הסברים
2. **מסך פתיחה** - כותרת + נסיכה + כפתור "שחקי"
3. **תפריט רמות** - 4 כרטיסי רמות + מונה כוכבים
4. **רמה 1: ספירת ממתקים** - ספירה 1-20
5. **רמה 2: חיבור ממתקים** - חיבור עם מקלדת
6. **רמה 3: השוואת ממתקים** - גדול/קטן
7. **רמה 4: חיסור ממתקים** - חיסור אינטראקטיבי
8. **מסך חגיגה** - כוכבים + קונפטי

### טכנולוגיה:
- **Vanilla JavaScript** - לא React!
- 6 קבצים בלבד (HTML+CSS+JS+נכס)
- 0 תלויות חיצוניות
- LocalStorage לשמירת התקדמות
- Responsive מלא (Desktop + Tablet + Mobile)

---

## 🎨 עיצוב - כללים חשובים

### צבעים (אל תשנה!):
- **ורוד:** #ff69b4, #ff1493, #ffb6d9
- **סגול:** #ba55d3, #8b4789, #9370db
- **טורקיז:** #40e0d0
- **כחול:** #87ceeb
- **זהב:** #ffd700

### כללי UX קריטיים:
1. ✅ **תמיד להשתמש בממתקים** (🍬🍭🍫🧁🍩) - **לא עיגולים צבעוניים!**
2. ✅ כפתורים גדולים (44x44px מינימום)
3. ✅ אנימציות רכות ועדינות
4. ✅ אין טיימר / לחץ זמן
5. ✅ פידבק חיובי בלבד ("כמעט! ננסה שוב")

---

## 🌍 דומיין (עדיין לא מחובר)

### פרטי דומיין:
- **דומיין:** joycandyshop.com
- **רכישה:** דרך Njalla (נרכש עם USDT)
- **סטטוס:** טרם חובר ל-Netlify

### חיבור דומיין ב-Netlify:
1. כנס ל-Netlify Dashboard → remarkable-quokka-cc4442
2. Settings → Domain management
3. Add custom domain: joycandyshop.com
4. עדכן DNS ב-Njalla:
- Type: CNAME
- Name: www
- Value: remarkable-quokka-cc4442.netlify.app
- Type: A
- Name: @
- Value: 75.2.60.5 (Netlify Load Balancer)

---

## 📦 גיבויים וגרסאות אחרות

### תיקיות נוספות בworkspace:
- `joy-candy-shop/` - גרסת React הישנה (לא בשימוש)
- `joy-candy-shop-production/` - גרסה vanilla ישנה
- `joy-candy-react/` - גרסת React אחרת
- `joy-candy-complete/` - גרסה מלאה

**הגרסה הרלוונטית כרגע:** `joy-candy-shop-redesign/`

---

## 👤 פרטי הלקוח

- **שם:** עודד (Oded)
- **שפה:** עברית
- **Timezone:** UTC
- **סגנון תקשורת:** ישיר, ללא פרפראות, מעדיף תוצאות מהר
- **מטרה:** משחק חינוכי לבת שלו (כיתה א', שם: ג'וי)

### העדפות:
- ✅ פרודקשן מהר - "עלה ישר לפרודקשן"
- ✅ תוצאות מעשיות
- ✅ תקשורת קצרה וברורה
- ❌ לא אוהב דיבורים ארוכים

---

## 🔧 פקודות שימושיות

### בדיקה מקומית:
```bash
cd /home/node/.joni/workspace/joy-candy-shop-redesign
python3 -m http.server 8000
# פתח: http://localhost:8000/landing.html
```

### העלאה לפרודקשן (מהירה):
```bash
cd /home/node/.joni/workspace/joy-candy-shop-redesign
npx netlify-cli deploy --prod --dir=. \
--auth=nfp_uBnM9ZoyEyCzoq2tS3BePbLCJfYgeTyMb299 \
--site=ced34f84-4110-451f-bba7-644fe603be5b
```

### יצירת ארכיון:
```bash
cd /home/node/.joni/workspace
tar --exclude=node_modules --exclude=.git -czf joy-candy-backup.tar.gz joy-candy-shop-redesign/
```

---

## ✅ צ'קליסט לפני העלאה

- [ ] בדיקה בדפדפן (Chrome + Firefox)
- [ ] בדיקה במובייל (responsive)
- [ ] כל 4 הרמות עובדות
- [ ] LocalStorage שומר התקדמות
- [ ] אין שגיאות ב-Console
- [ ] כל הממתקים מוצגים (לא עיגולים!)
- [ ] כל הכפתורים עובדים
- [ ] דמות הנסיכה נטענת

---

## 📞 צור קשר

אם יש שאלות או בעיות:
- תעדכן את עודד ישירות
- כל המידע מתועד ב-`/home/node/.joni/workspace/memory/`
- תיעוד נוסף ב-`README.md` ו-`COMPLETION.md` בתיקיית הפרויקט

---

**בהצלחה! 🍬🐙**


---

המסמך כולל:
✅ פרטי חשבון Netlify (email, password, API token)
✅ פקודות להעלאה לפרודקשן
✅ מיקום כל הקבצים
✅ כללי עיצוב חשובים
✅ מידע על הדומיין
✅ כל מה שצריך להמשיך את העבודה

בהצלחה!
ג'וני 🐙