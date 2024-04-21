// yup'taki bütün fonksiyonları import etme
import * as yup from "yup";

// 1 büyük harf
// 1 küçük harf
// 1 sayı
// 1 özel karakter
// min 5 karakter
const regex =
  '^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{5,}$';


// validasyon şeması
// formdaki inputların geçerli olması
// için gerekli koşulları tanımladığımız yapı

// bir input alanının zorunluluklarını belirtirken
// ilk çağırmamız gereken fonksiyon veri tipi olmalı
export const schema = yup.object().shape({
// email için zorunlulukları belirle
email: yup
.string()
.email('Geçerli bir mail formatı giriniz')
.required('Zorunlu alan'),

// yaş için zorunlulukları belirle
age: yup
.number()
.min(18,"Yaşınız 18'den küçük olamaz")
.max(100,"Yaşınız 100'den büyük olamaz")
.integer("Yaşınız tam sayı olmalı")
.required("Zorunlu alan"),

// şifre alanı için zorunluluklar
password: yup
.string()
.min(5, 'Şifre en az 5 karakter olmalı')
// şifre regex'deki kurallara uygun mu kontrol eder
.matches (regex, 'Şifreniz yeterince güçlü değil')
.required('Zorunlu alan'),

// şifre onay için zorunluluklar
confirmPassword: yup
.string()
// oneOf inputtaki veri verdiğimiz dizideki verilerden
// biriyle eşleşiyor mu kontrol eder
// yup.ref input alanlarındaki verilere erişmeye yarar
.oneOf([yup.ref('password')], 'Onay şifreniz doğru değil')
.required('Zorunlu Alan'),
});