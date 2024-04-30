import React from "react";
import { Link } from "react-router-dom";

function Elshafaa() {
  return (
    <>
      <section class="banner bg-gray-200 py-8">
        <div class="container mx-auto text-center">
          <div class="bantxt mb-4">
            <span class="text-lg font-bold">كمامات امنة</span>
            <span class="text-lg font-bold text-blue-500">خصم يصل الي 15%</span>
            <br />
            <span>احصل علي افضل كمامات امنة لحمياتك و حماية عائلتك</span>
          </div>
          <a
            href="./product.html"
            class="btn bg-blue-500 text-white px-8 py-2 rounded-full"
          >
            تصفح باقي العروض
          </a>
        </div>
      </section>

      <section class="sec_3 py-8" id="sec_3">
        <div class="container mx-auto">
          <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div dir={"rtl"} class="card bg-gray-100 p-4">
              <h5 class="text-lg font-bold mb-2">20% وفّر</h5>
              <p class="mb-4">
                <span class="text-white text-lg">معقم يد</span>
                <br />
                <span class="text-lg font-semibold">
                  99.9% حماية من البكتريا
                </span>
              </p>
              <button class="btn bg-blue-500 text-white px-4 py-2 rounded-full">
                اشتري الان
              </button>
            </div>
            <div class="card bg-gray-100 p-4">
              <h5 class="text-lg font-bold mb-2">15% خصم</h5>
              <p class="mb-4">
                <span class="text-blue-500 text-lg">مستلزمات واقية</span>
                <br />
                <span class="text-lg font-semibold">
                  99.9% حماية من البكتريا
                </span>
              </p>
              <button class="btn bg-blue-500 text-white px-4 py-2 rounded-full">
                اشتري الان
              </button>
            </div>
          </div>
        </div>
      </section>
      <section class="sec_5" id="sec_5">
        <p class="sptext">اكثر المنتجات مبيعاً</p>
        <div class="container mx-auto">
          <div class="flex flex-wrap justify-center">
            {/* <!--  --> */}
            <div class="w-72 m-4">
              <div class="card text-center">
                <img
                  src="./assist/imgs/imgs/imgs21.jpg"
                  class="card-img-top"
                  alt="..."
                />
                <div class="text-gray-500">أجهزة, ميزان حرارة</div>
                <h6 class="card-title">Object thermometer</h6>
                {/* <!-- STAR RATING  --> */}
                <div>
                  <i class="fa fa-star star"></i>
                  <i class="fa fa-star star"></i>
                  <i class="fa fa-star star"></i>
                  <i class="fa fa-star star"></i>
                  <i class="fa fa-star star"></i>
                </div>
                <h3 class="price">175 L.E</h3>
                <a href="./payment_page.html" class="btn btn-primary">
                  اشتري الان
                </a>
              </div>
            </div>

            {/* <!--  --> */}
            <div class="w-72 m-4">
              <div class="card text-center">
                <img
                  src="./assist/imgs/imgs/imgs28.jpg"
                  class="card-img-top"
                  alt="..."
                />
                <div class="text-gray-500">أجهزة, ميزان حرارة</div>
                <h6 class="card-title">Non-Contact thermometer</h6>
                {/* <!-- STAR RATING  --> */}
                <div>
                  <i class="fa fa-star star"></i>
                  <i class="fa fa-star star"></i>
                  <i class="fa fa-star star"></i>
                  <i class="fa fa-star star"></i>
                  <i class="fa fa-star star"></i>
                </div>
                <h3 class="price">295 L.E</h3>
                <a href="./payment_page.html" class="btn btn-primary">
                  اشتري الان
                </a>
              </div>
            </div>
            {/* <!--  --> */}
            <div class="w-72 m-4">
              <div class="card text-center">
                <img
                  src="./assist/imgs/imgs/imgs47.jpg"
                  class="card-img-top"
                  alt="..."
                />
                <div class="text-gray-500">أجهزة, ميزان حرارة</div>
                <h6 class="card-title">LCD Thermometer</h6>
                {/* <!-- STAR RATING  --> */}
                <div>
                  <i class="fa fa-star star"></i>
                  <i class="fa fa-star star"></i>
                  <i class="fa fa-star star"></i>
                  <i class="fa fa-star star"></i>
                  <i class="fa fa-star star"></i>
                </div>
                <h3 class="price">325 L.E</h3>
                <a href="./payment_page.html" class="btn btn-primary">
                  اشتري الان
                </a>
              </div>
            </div>
            {/* <!--  --> */}
            <div class="w-72 m-4">
              <div class="card text-center">
                <img
                  src="./assist/imgs/imgs/imgs46.jpg"
                  class="card-img-top"
                  alt="..."
                />
                <div class="text-gray-500">أجهزة, ميزان حرارة</div>
                <h6 class="card-title">Non-touch thermometer</h6>
                {/* <!-- STAR RATING  --> */}
                <div>
                  <i class="fa fa-star star"></i>
                  <i class="fa fa-star star"></i>
                  <i class="fa fa-star star"></i>
                  <i class="fa fa-star star"></i>
                  <i class="fa fa-star star"></i>
                </div>
                <h3 class="price">350 L.E</h3>
                <a href="./payment_Page.html" class="btn btn-primary">
                  اشتري الان
                </a>
              </div>
            </div>
            {/* <!--  --> */}
          </div>
        </div>
      </section>

      <section class="sec_6" id="sec_6">
        <div class="bg-gray-100 py-20">
          <div class="container mx-auto">
            <div class="text-center mb-10">
              <h2 class="text-3xl font-semibold">بعض آراء عملائنا</h2>
            </div>
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* <!-- Testimonial 1 --> */}
              <div class="bg-white rounded-lg shadow-md p-6">
                <p class="text-gray-700 mb-4">
                  الصيدلية دي مكنتش مجرد مكان أشتري منه الدواء، بس كانت تجربة.
                  الأجواء هناك كانت مريحة والخدمة كانت ممتازة. الموظفين كانوا
                  متفهمين لاحتياجاتي وعطوني الوقت والاهتمام اللي كنت محتاجه. مش
                  هسيب الصيدلية دي لأي سبب
                </p>
                <div class="flex items-center">
                  <img
                    src="./assist/imgs/imgs/imgs51.jpg"
                    class="w-12 h-12 rounded-full mr-4"
                    alt="محمد مصطفي"
                  />
                  <div>
                    <h5 class="font-bold">محمد مصطفي</h5>
                    <p class="text-gray-500 text-sm">ممرض في القصر العيني</p>
                  </div>
                </div>
              </div>
              {/* <!-- Testimonial 2 --> */}
              <div class="bg-white rounded-lg shadow-md p-6">
                <p class="text-gray-700 mb-4">
                  كل مرة بزور الصيدلية دي بتكون تجربة مختلفة ومميزة. الناس فيها
                  مش بس بيعرفوا يرشحولك الدواء اللي محتاجه، لأ دا بيهتموا بيك
                  بشكل شخصي و بيدوك نصائح وتوجيهات مفيدة. دايما برجع ليهم بثقة
                </p>
                <div class="flex items-center">
                  <img
                    src="./assist/imgs/imgs/719d480c-4097-468c-91d0-792e058ec630.png"
                    class="w-12 h-12 rounded-full mr-4"
                    alt="احمد عادل"
                  />
                  <div>
                    <h5 class="font-bold">احمد عادل</h5>
                    <p class="text-gray-500 text-sm">دكتور صيدلي</p>
                  </div>
                </div>
              </div>
              {/* <!-- Testimonial 3 --> */}
              <div class="bg-white rounded-lg shadow-md p-6">
                <p class="text-gray-700 mb-4">
                  الخدمة في الصيدلية دي مش بس كانت حلوة ،دا الموظفين متعاونين
                  وبيقدموا خدمة ممتازة بكل معنى الكلمة. اشتريت الدواء اللي
                  عاوزاه بسهولة وسرعة، وحسيت اني في مكان آمن وموثوق
                </p>
                <div class="flex items-center">
                  <img
                    src="./assist/imgs/imgs/f2a2726c-ed18-4d87-b37d-e2d84c80b431.png"
                    class="w-12 h-12 rounded-full mr-4"
                    alt="مريم رضا"
                  />
                  <div>
                    <h5 class="font-bold">مريم رضا</h5>
                    <p class="text-gray-500 text-sm">دكتورة علاج طبيعي</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section class="sec_7" id="sec_7">
        <p class="sptext">آخر الأخبار</p>
        <div class="container mx-auto text-center">
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* <!-- News Card --> */}
            <div class="bg-white rounded-lg shadow-md p-6">
              <img
                src="./assist/imgs/imgs/imgs52.jpg"
                class="w-full h-48 object-cover rounded-md mb-4"
                alt="النفايات المعدية بالمستشفيات"
              />
              <h6 class="text-xl font-semibold mb-2">
                النفايات المعدية بالمستشفيات
              </h6>
              <p class="text-gray-700 mb-4 text-left">
                تحتوي مخلفات الرعاية الصحية على كائنات مجهرية قد تكون مضرّة
                ويمكنها نقل العدوى إلى المرضى في المستشفيات والعاملين الصحيين
                وعامة الناس. تشمل المخاطر المحتملة الأخرى انتشار كائنات مجهرية
                مقاومة للأدوية من مرافق الرعاية الصحية إلى البيئة. وتشمل أيضاً
                المخاطر الصحية ذات الصلة بالمخلفات والمنتجات الثانوية ما يلي:
                الإصابات الناجمة عن وخز الأدوات الحادة؛ التسمم والتلوث عن طريق
                مفعول المستحضرات الدوائية ، وخصوصاً المضادات الحيوية والعقاقير
                السامة للخلايا؛ التسمم والتلوث عن طريق مياه الصرف؛ وبعناصر أو
                مركبات مثل الزئبق
              </p>
              <div class="flex items-center justify-between">
                <div class="flex items-center">
                  <i class="fa fa-tag text-blue-500 mr-2"></i>
                  <a href="#" class="text-blue-500">
                    blog , Youtube
                  </a>
                </div>
                <a href="#" class="btn btn-primary">
                  إقرأ المزيد <i class="fa fa-arrow-circle-right ml-2"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {/* <!-- Card 1 --> */}
          <div class="max-w-sm rounded overflow-hidden shadow-lg">
            <img src="./assist/imgs/imgs/imgs53.jpg" class="w-full" alt="..." />
            <div class="px-6 py-4">
              <h6 class="font-bold text-xl mb-2">المقصات الجراحية</h6>
              <p class="text-gray-700 text-base">
                ، وتعرف كذلك باسم «الملقط» في بعض الدول خارج الولايات المتحدة،
                هي عبارة عن أدوات جراحية تستخدم في القطع. وتشمل مقصات الضمادات،
                ومقصات التشريح، ومقصات القزحية، ومقصات العمليات، ومقصات الغرز،
                ومقصات قطع الأوتار، ومقصات ميتزينبوم، ومقصات جراحات التجميل،
                ومقصات مايو. تصنع المقصات الجراحية عادة من الفولاذ المقاوم
              </p>
            </div>
            <div class="px-6 pt-4 pb-2">
              <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
                #blog
              </span>
              <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700">
                #Youtube
              </span>
            </div>
            <div class="px-6 py-4">
              <a
                href="#"
                class="inline-block bg-blue-500 text-white py-2 px-4 rounded-full"
              >
                إقرأ المزيد{" "}
                <i class="fa fa-arrow-circle-right" aria-hidden="true"></i>
              </a>
            </div>
          </div>

          {/* <!-- Card 2 --> */}
          <div class="max-w-sm rounded overflow-hidden shadow-lg">
            <img src="./assist/imgs/imgs/imgs54.jpg" class="w-full" alt="..." />
            <div class="px-6 py-4">
              <h6 class="font-bold text-xl mb-2">جهاز ضغط الدم</h6>
              <p class="text-gray-700 text-base">
                ، يوضع السوار بشكل سلس ومريح حول الذراع، على نفس الارتفاع الرأسي
                للقلب بشكل تقريبي، في حين أن الشخص يجلس وذراعه مسترخية ومدعومة.
                المواقع أخرى لوضع السوار تعتمد على الأنواع، ويمكن أن تشمل
                اللسان، الزعنفة، الذيل
              </p>
            </div>
            <div class="px-6 pt-4 pb-2">
              <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
                #Care
              </span>
              <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700">
                #Youtube
              </span>
            </div>
            <div class="px-6 py-4">
              <a
                href="#"
                class="inline-block bg-blue-500 text-white py-2 px-4 rounded-full"
              >
                إقرأ المزيد{" "}
                <i class="fa fa-arrow-circle-right" aria-hidden="true"></i>
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Elshafaa;
