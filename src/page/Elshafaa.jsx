import React from "react";
import { Link } from "react-router-dom";
import { useStore } from "../zustand/useStore";

function Elshafaa() {
  const products1 = JSON.parse(localStorage.getItem("products"));
  const products = products1.filter((value, index) => index < 4);
  const setProduct = useStore((state) => state.setProduct);
  console.log();
  return (
    <>
      <section className="bg-[url('src/assets/imgs/banner.png')] h-[90vh] bg-no-repeat bg-contain flex items-center">
        <div dir="rtl" className=" w-[600px] text-center ">
          <h2 className="text-2xl  font-bold mb-6">كمامات امنة</h2>
          <h4 className="text-4xl font-bold text-white mb-10">
            خصم يصل الي <span className="text-black text-6xl"> %15 </span>
          </h4>
          <p className="text-lg mb-10">
            احصل علي افضل كمامات امنة لحمياتك و حماية عائلتك
          </p>

          <Link
            to={"/product"}
            className=" bg-white rounded-md py-3.5 px-8 text-sm font-semibold hover:bg-sky-500 hover:text-cyan-50 transition-all"
          >
            تصفح باقي العروض
          </Link>
        </div>
      </section>
      <section className="py-8 px-16 grid grid-cols-1 md:grid-cols-2 gap-20">
        {/* card 1 */}
        <div className="bg-gray-900 p-4 bg-[url('src/assets/imgs/imgs/imgs02.jpg')] bg-center h-80 w-[34rem] rounded-lg ">
          <h5 className="text-lg font-bold mb-2 mt-[4rem]">20% وفّر</h5>
          <p className="mb-4">
            <span className="text-white text-lg">معقم يد</span>
            <br />
            <span className="text-lg font-semibold">
              99.9% حماية من البكتريا
            </span>
          </p>
          <Link
            to={"/product"}
            className="btn bg-blue-500 text-white px-4 py-2 rounded-full hover:bg-sky-300 hover:text-white transition-all"
          >
            اشتري الان
          </Link>
        </div>
        <div
          className="card bg-gray-100 bg-[url('src/assets/imgs/imgs/imgs03.jpg')] p-4 bg-center h-80 w-[34rem] rounded-lg"
          dir="rtl"
        >
          <h5 className="text-lg font-bold mb-2 mt-[4rem]">15% خصم</h5>
          <p className="mb-4">
            <span className="text-blue-500 text-lg">مستلزمات واقية</span>
            <br />
            <span className="text-lg font-semibold">
              99.9% حماية من البكتريا
            </span>
          </p>
          <Link
            to={"/product"}
            className="btn bg-blue-500 text-white transition-all px-4 py-2 rounded-full hover:bg-sky-300 hover:text-white"
          >
            اشتري الان
          </Link>
        </div>
      </section>
      <p className="text-center bg-[url('src/assets/imgs/imgs/imgs04.png')] bg-center bg-no-repeat p-10 text-xl font-bold">
        اكثر المنتجات مبيعاً
      </p>
      <div className="container mx-auto flex flex-wrap justify-center">
        {products.map((product) => (
          <div key={product.name} className="w-72 m-4 mb-10">
            <div className="card text-center">
              <img src={product.image} className="card-img-top" alt="..." />
              <div className="text-gray-500 ">{product.category}</div>
              <h6 className="card-title">{product.name}</h6>
              <div className="flex items-center justify-center">
                <svg
                  className="w-4 h-4 text-yellow-300 me-1"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 22 20"
                >
                  <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"></path>
                </svg>
                <p className="ms-2 text-sm font-bold text-gray-900 dark:text-slate-600">
                  {product.star}
                </p>
                <span className="w-1 h-1 mx-1.5 bg-gray-500 rounded-full dark:bg-gray-400"></span>
                <a className="text-sm font-medium text-gray-900 underline hover:no-underline dark:text-slate-600">
                  {product.reveiw} reviews
                </a>
              </div>
              <h3 className="price mb-3 text-sky-700">{product.price} L.E</h3>
              <Link
                onClick={() => setProduct(product.id)}
                to={"/payment"}
                className="btn btn-primary bg-blue-500 px-24 py-2 rounded-lg hover:bg-blue-600 text-white "
              >
                اشتري الان
              </Link>
            </div>
          </div>
        ))}
      </div>
      <section className="bg-gray-100 py-20 text-center mb-10">
        <h2 className="text-3xl font-semibold py-8">بعض آراء عملائنا</h2>
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white rounded-lg shadow-md p-6">
            <p className="text-gray-700 mb-4">
              الصيدلية دي مكنتش مجرد مكان أشتري منه الدواء، بس كانت تجربة.
              الأجواء هناك كانت مريحة والخدمة كانت ممتازة. الموظفين كانوا
              متفهمين لاحتياجاتي وعطوني الوقت والاهتمام اللي كنت محتاجه. مش هسيب
              الصيدلية دي لأي سبب
            </p>
            <span className="flex items-center">
              <img
                src="src/assets/imgs/imgs/imgs51.jpg"
                className="w-12 h-12 rounded-full mr-4"
                alt="محمد مصطفي"
              />
              <span>
                <h5 className="font-bold">محمد مصطفي</h5>
                <p className="text-gray-500 text-sm">ممرض في القصر العيني</p>
              </span>
            </span>
          </div>
          <div className="bg-white rounded-lg shadow-md p-6">
            <p className="text-gray-700 mb-4">
              كل مرة بزور الصيدلية دي بتكون تجربة مختلفة ومميزة. الناس فيها مش
              بس بيعرفوا يرشحولك الدواء اللي محتاجه، لأ دا بيهتموا بيك بشكل شخصي
              و بيدوك نصائح وتوجيهات مفيدة. دايما برجع ليهم بثقة
            </p>
            <span className="flex items-center">
              <img
                src="src/assets/imgs/imgs/719d480c-4097-468c-91d0-792e058ec630.png"
                className="w-12 h-12 rounded-full mr-4"
                alt="احمد عادل"
              />
              <span>
                <h5 className="font-bold">احمد عادل</h5>
                <p className="text-gray-500 text-sm">دكتور صيدلي</p>
              </span>
            </span>
          </div>
          <div className="bg-white rounded-lg shadow-md p-6">
            <p className="text-gray-700 mb-4">
              الخدمة في الصيدلية دي مش بس كانت حلوة ،دا الموظفين متعاونين
              وبيقدموا خدمة ممتازة بكل معنى الكلمة. اشتريت الدواء اللي عاوزاه
              بسهولة وسرعة، وحسيت اني في مكان آمن وموثوق
            </p>
            <span className="flex items-center">
              <img
                src="src/assets/imgs/imgs/f2a2726c-ed18-4d87-b37d-e2d84c80b431.png"
                className="w-12 h-12 rounded-full mr-4"
                alt="مريم رضا"
              />
              <span>
                <h5 className="font-bold">مريم رضا</h5>
                <p className="text-gray-500 text-sm">دكتورة علاج طبيعي</p>
              </span>
            </span>
          </div>
        </div>
      </section>
      <section className="sec_7">
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
        </div>
      </section>
      <div className="w-full flex justify-center items-center h-[80vh] bg-gradient-to-tl bg-sky-200 text-center">
        <form action="#">
          <fieldset>
            <p className="mb-7 text-3xl font-bold bg-[url('src/assets/imgs/imgs/imgs04.png')] bg-center bg-no-repeat p-7 ">
              سجل الآن كي تصلك آخر الأخبار
            </p>
            <p className="mb-16 text-lg">
              سجل الآن للحصول علي آخر العروض و التخفيضات
            </p>
            <input
              type="email"
              className="text-lg pr-48 py-[12px] px-2 text-gray-900 border border-gray-300 bg-gray-50 focus:ring-blue-500 dark:border-gray-600 dark:placeholder-gray-400 dark:text-gray-600 dark:focus:ring-blue-500 dark:focus:border-blue-500  focus:outline-none"
              required
            />
            <input
              type="submit"
              className="p-4 px-12 cursor-pointer bg-sky-400 hover:bg-sky-500 hover:text-sky-50"
            />
          </fieldset>
        </form>
      </div>
    </>
  );
}
export default Elshafaa;
