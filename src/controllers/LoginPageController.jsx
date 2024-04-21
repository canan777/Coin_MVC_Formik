import { useFormik } from 'formik';
import { schema } from '../schema';
import LoginPageView from '../views/LoginPageView';

const LoginPageController = () => {
  // formik'in bütün özelliklerini kullanmamızı sağlayan hook
  const formik = useFormik({
    // formda tutulacak verilerin ilk değeri
    initialValues: {
      email: '',
      age: '',
      password: '',
      confirmPassword: '',
    },

    // validasyon şeması
    // inputlardaki verileri şemada koşullara uygun mu kontrol
    // edeceğiz. Geçerli değilse error state'inde hataları tutar
    validationSchema: schema,

    // form gönderilince çalışacak olan fonksiyon
    // otomatik olarak sayfa yenilemeyi engeller
    // 1.parametre olarak formdaki verileri alır
    // 2.parametre olarak formda çalışabilecek aksiyonları alır
    onSubmit: (values, actions) => {
      console.log(actions);
    },
  });

  return <LoginPageView formik={formik} />;
};

export default LoginPageController;