import i18n from "i18next";
import { initReactI18next } from "react-i18next";

// the translations
// (tip move them in a JSON file and import them,
// or even better, manage them separated from your code: https://react.i18next.com/guides/multiple-translation-files)
const resources = {
  en: {
    translation: {
      "Welcome to React": "Welcome to React and react-i18next"
    }
  },
  ar: {
    translation: {
      "Welcome to React": "مصعب",
      "Welcome": "أهلا بك",
      "Welcome back": "مرحبًا بعودتك",
      "Enter your information below": "أدخل معلوماتك أدناه:",
      "Full name": "الاسم الكامل",
      "Email": "عنوان بريد الكتروني",
      "Password": "كلمه السر",
      "Confirm Password": "تأكيد كلمة المرور",
      "Login": "تسجيل الدخول",
      "Signup": "اشتراك",
      "Find the best hotels": "اعثر على أفضل الفنادق والمنازل والمنتجعات والمزيد ...",
      "Where are you going?": "إلى أين تذهب؟",
      "Hotels near you": "الفنادق القريبة منك",
      "Resorts near you": "المنتجعات بالقرب منك",
      "Facilities": "وسائل الراحة",
      "Description": "وصف",
      "Detail": "لكن لا بد أن أوضح لك أن كل هذه الأفكار المغلوطة حول استنكار  النشوة وتمجيد الألم نشأت بالفعل، وسأعرض لك التفاصيل لتكتشف حقيقة وأساس تلك السعادة البشرية، فلا أحد يرفض أو يكره أو يتجنب الشعور بالسعادة، ولكن بفضل هؤلاء الأشخاص الذين لا يدركون بأن السعادة لا بد أن نستشعرها بصورة أكثر عقلانية ومنطقية فيعرضهم هذا لمواجهة الظروف الأليمة، وأكرر بأنه لا يوجد من يرغب في الحب ونيل المنال ويتلذذ بالآلام، الألم هو الألم ولكن نتيجة لظروف ما قد تكمن السعاده فيما نتحمله من كد وأسي.",
      "Price": "تبدأ في",
      "Night": "ليل",
      "Book now": "احجز الآن",
      "Select": "حدد غرفة...",
      "Checkin date": "تاريخ الوصول",
      "Checkout date": "موعد انتهاء الأقامة",
      "Passengers": "مسافرين",
      "Reserve": "الاحتياطي",
      "Exclusive events": "أحداث حصرية ، ذكريات لا تقدر بثمن ...",
      "Events near you": "أحداث بالقرب منك",
      "Discover and read": "اكتشف واقرأ القصص التي تهمك",
      "Blogs": "المدونات"
    }
  }
};

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    compatibilityJSON: 'v3',
    resources,
    lng: "ar", // language to use, more information here: https://www.i18next.com/overview/configuration-options#languages-namespaces-resources
    // you can use the i18n.changeLanguage function to change the language manually: https://www.i18next.com/overview/api#changelanguage
    // if you're using a language detector, do not define the lng option
    interpolation: {
      escapeValue: false // react already safes from xss,
    },
  });

export default i18n;