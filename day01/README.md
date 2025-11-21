# 📅 Day 01 – Değişkenler, Operatörler ve Temel Mantık

Bu günün amacı JavaScript'in temel yapı taşlarını kavramaktır:  
değişkenler, aritmetik işlemler, kullanıcıdan veri alma, if–else yapıları ve switch-case mantığı.

Aşağıdaki 3 proje, hem temel JS mantığını hem de basit akış kontrolünü anlaman için tasarlanmıştır.

---

## 🧠 Bugün Öğrenilecek Konular

- `let`, `const` ile değişken oluşturma  
- `prompt()` ile kullanıcıdan bilgi alma  
- Sayı işlemleri (toplama, çıkarma, çarpma, bölme)  
- Koşullu yapılar (`if`, `else if`, `else`)  
- Çoklu kontrol yapısı (`switch-case`)  
- Template literals (`` `Merhaba ${isim}` ``)  

---

# 📁 Projeler

---

## ✅ **Proje 01 – Yaş Hesaplama & Emeklilik Kalan Süre**

**Açıklama:**  
Kullanıcıdan doğum yılı ve emeklilik yaşı alınır.  
Şu anki yaş hesaplanır ve emekliliğe kaç yıl kaldığı gösterilir.

**Gereksinimler:**
1. Kullanıcıdan **doğum yılı** alınır.  
2. Kullanıcıdan **emeklilik yaşı** alınır (ör. 65).  
3. Yaş hesaplanır:  
   ```js
   age = currentYear - birthYear;
   ```
4. Emekliliğe kalan süre hesaplanır:  
   ```js
   yearsLeft = retirementAge - age;
   ```
5. Eğer yaş emeklilik yaşından büyükse:  
   `"Zaten emekli oldunuz!"` mesajı verilir.  

**Kazanımlar:**  
- Değişken kullanımı  
- Aritmetik işlemler  
- Koşullu ifadeler  

---

## ✅ **Proje 02 – Not Sistemi (If-Else Yoğun)**

**Açıklama:**  
Kullanıcının girdiği 0–100 arası bir sayısal notu, harfli nota dönüştürür.  
AA, BA, BB, CC, FF şeklinde sonuç döndürür.

**Not Aralıkları (Örnek):**
- 90–100 → **AA**
- 80–89 → **BA**
- 70–79 → **BB**
- 60–69 → **CC**
- 0–59  → **FF**

**Gereksinimler:**
1. Kullanıcıdan 0–100 arası bir sayı alınır.  
2. `if–else if–else` ile uygun harf notu belirlenir.  
3. Sonuç console’a yazdırılır.  

**Kazanımlar:**
- Koşul yazma pratiği  
- Mantıksal akış kurma  
- Veri doğrulama düşüncesi  

---

## ✅ **Proje 03 – Basit Hesap Makinesi (switch-case)**

**Açıklama:**  
Kullanıcı iki sayı girer, ardından yapmak istediği işlemi (+, -, *, /) seçer.  
Switch-case ile işlem yapılır ve sonuç gösterilir.

**Gereksinimler:**
1. Kullanıcıdan **iki sayı** alınır.  
2. Kullanıcıdan yapılacak işlem alınır (`+`, `-`, `*`, `/`).  
3. `switch-case` yapısı kullanılarak işlem uygulanır.  
4. Sonuç console’a yazdırılır.  

**Kazanımlar:**
- Switch-case mantığını anlamak  
- Operatörlerle işlem yapma  
- Kullanıcı girdisini işleme alma  

---

## 🧪 Nasıl Çalıştırılır?

**Tarayıcı Konsolu:**
1. Bir HTML dosyası oluştur.  
2. İçine JS dosyanı `<script>` ile bağla.  
3. Tarayıcıda aç → F12 → Console sekmesi.

**Node.js:**
```bash
node project01.js
```

---

## 🎯 Özet

Day 01'de:

- Değişken kullanımı  
- Kullanıcıdan veri alma  
- Operatörlerle aritmetik hesaplamalar  
- If–else karar yapıları  
- Switch-case ile işlem seçimi  
- Gerçek hayata uygulanan 3 mini proje  

öğrenmiş oldun.

---

Hazırsan Day 02’ye geçebiliriz! 🚀  
Kodlarını da istersen tek tek yazabilirim.
