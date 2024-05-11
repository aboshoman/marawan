import React from "react";

function Advice() {
  return (
    <>
      <p className="text-center bg-[url('src/assets/imgs/imgs/imgs04.png')] bg-center bg-no-repeat p-10 text-xl font-bold">
        نصائح طبية
      </p>
      <div className="  justify-center grid grid-cols-3 sm:grid-cols-3 gap-5 ml-[3%]">
        <div className="max-w-sm rounded  text-center shadow-xl">
          <img src="src/assets/imgs/imgs/nails.jpg" className="w-full" />
          <span className="px-6 py-4">
            <h6 className="font-bold text-xl mb-2">أسباب هشاشة الأظافر</h6>
            <ul dir="rtl" className="text-right mr-10">
              <li>الاستخدام الطويل والمتكرر للماء والصابون</li>
              <li>الإفراط في استخدام طلاء الأظافر</li>
              <li>استخدام مزيل الطلاء الحاوي على الأسيتون الخام %100</li>
              <li>تقدّم العمر</li>
              <li>سوء التغذية ونقص بعض الفيتامينات</li>
              <li>الشره المرضي العصبي</li>
              <li>نقص الحديد وفقر الدم</li>
              <li>الإصابة بقصور الغدة الدرقية</li>
              <li>الصدفية أو الإكزيما</li>
            </ul>
          </span>
        </div>

        <div className="max-w-sm rounded text-center shadow-xl">
          <img src="src/assets/imgs/imgs/vitc.jpg" className="w-full" />
          <span className="px-6 py-4">
            <h6 className="font-bold text-xl mb-10">فوائد فيتامين سي Vit C</h6>
            <ul dir="rtl" className="text-right mr-10">
              <li>مهم في تصنيع الهرمونات والنواقل العصبية.</li>
              <li>مهم لتصنيع الكولاجين .</li>
              <li>التئام الجروح وشفائها.</li>
              <li>تقوية المناعة.</li>
              <li>تحسين امتصاص الحديد.</li>
              <li>تقليل الكوليسترول.</li>
              <li>يلعب دور في تكوين العظام.</li>
              <li>يمنع تكوين الجذور الحرة التى تسبب تلف الخلايا.</li>
            </ul>
          </span>
        </div>

        <div className="max-w-sm rounded overflow-hidden text-center shadow-xl">
          <img src="src/assets/imgs/imgs/reflux.jpg" className="w-full" />
          <span className="px-6 py-4">
            <h6 className="font-bold text-xl mb-2">أسباب الارتجاع المريئي</h6>
            <ul dir="rtl" className="text-right mr-10">
              <li>السمنة</li>
              <li>التدخين والإفراط بشرب الكحول والقهوة.</li>
              <li>تناول كميات كبيرة من الطعام.</li>
              <li>
                {" "}
                الإكثار من المأكولات الحارة والحاوية كميات كبيرة من الدهون.
              </li>
              <li>الفتق الحجابي.</li>
              <li>الحمل.</li>
            </ul>
          </span>
        </div>

        <span></span>

        <div className="max-w-sm rounded overflow-hidden text-center shadow-xl">
          <img src="src/assets/imgs/imgs/cold.jpg" className="w-full" />
          <span className="px-6 py-4">
            <h6 className="font-bold text-xl mb-2">
              طرق منزلية للتخفيف من أعراض الزكام
            </h6>
            <ul dir="rtl" className="text-right mr-10">
              <li>شرب كميات كافية من الماء والسوائل الدافئة.</li>
              <li>أخذ قسطاً كافياً من الراحة.</li>
              <li>
                الغرغرة بمحلول الماء والملح (قم بوضع ملعقة صغيرة من الملح بكأس
                كبير من الماء).
              </li>
              <li>
                يمكن للبالغين والأطفال فوق عمر السنة (وليس الرضّع) استخدام
                القليل من العسل مع مشروب دافىء للتحكم بالسّعال.
              </li>
              <li>
                البقاء في المنزل عند الإصابة هو الحل الأفضل للتعافي وللحد من
                انتشار المرض.
              </li>
            </ul>
          </span>
        </div>

        <div className="max-w-sm rounded overflow-hidden text-center shadow-xl">
          <img src="src/assets/imgs/imgs/antibiotic.jpg" className="w-full" />
          <span className="px-6 py-4">
            <h6 className="font-bold text-xl mb-10">المضادّات الحيويّة</h6>
            <h3 className="text-right m-8">
              تشكّل المضادّات الحيويّة (متل التّيتراسيكلينات أو الفلوروكينولات)
              معقّدات غير قابلة للامتصاص مع الأطعمة الحاوية على الكالسيوم أو
              المغنيزيوم فتبطل فعّاليتها. لذلك يجب المباعدة بين الجرعة الدّوائية
              وتناول الأطعمة الحاوية على الكالسيوم مثل مُنتجات الألبان والأجبان.
              فمن الأفضل أن نتناول المضاد الحيوي قبل الطعام بساعةٍ أو بعد الطعام
              بساعتين.
            </h3>
          </span>
        </div>

        <div className="max-w-sm rounded overflow-hidden text-center shadow-xl">
          <img src="src/assets/imgs/imgs/iron.jpg" className="w-full" />
          <span className="px-6 py-4">
            <h6 className="font-bold text-xl mb-2">
              المُكمّلات الغذائيّة الحاوية على الحديد
            </h6>
            <h3 className="text-right m-8">
              من الشّائع جداً تناول مكملات الحديد مع وجبة الإفطار علماً أن
              امتصاصه يقل بنسبة %50 عند أخذه مع الطّعام وخاصةً مع الأغذية
              الحاوية على الكالسيوم كالحليب ومنتجات الألبان. لذلك فأفضل وقت
              لتناول مكملات الحديد هو في الصباح، أي قبل تناول وجبة الإفطار مع
              كأسٍ من الماء٫ وفي حال حدوث اضطراباتٍ هضميةٍ مزعجةٍ نوصي بأخذه بعد
              تناول الطّعام بساعتين مع وجود فيتامين سي الّذي سيساعد بشكلٍ كبيرٍ
              على امتصاص الحديد، وبالتّالي الحصول على الفائدة القصوى منه.
            </h3>
          </span>
        </div>

        <div className="max-w-sm rounded overflow-hidden text-center shadow-xl">
          <img src="src/assets/imgs/imgs/sore.jpg" className="w-full" />
          <span className="px-6 py-4">
            <h6 className="font-bold text-xl mb-2">
              أسباب كثيرة وراء إصابتك بالتهاب الحلق
            </h6>
            <ul dir="rtl" className="text-right mr-10">
              <li>الحساسية</li>
              <li>الهواء الجاف.</li>
              <li>التدخين</li>
              <li>التنفس عبر الفم.</li>
              <li>الكحول</li>
              <li>الصراخ</li>
              <li>الجزر المريئي المعدي (GERD).</li>
              <li>الإجهاد العضلي.</li>
            </ul>
          </span>
        </div>
      </div>
    </>
  );
}

export default Advice;
