import React from "react";
import frame2 from "../../assets/Frame 2.png";
import SectionTitle from "../../components/common/LR_Section_line1/Section_Line.js";
import "./Home.css";
import CardGrid from "../../components/common/Cards/cardGrid.js";
import ProductGrid from "../../components/Store/Product.js"; // بتاع المتجر المظبوط
import Card from "../../components/common/Cards/card.js";
import image4 from "../../assets/kids-playing-football-29318311.webp";
import image5 from "../../assets/pexels-gustavo-fring-4894722.webp";
import image6 from "../../assets/premium_photo-1661567408466-27899e8a4a2f.webp";
import female from "../../assets/female.webp";
import male1 from "../../assets/male1.webp";
import female2 from "../../assets/femal2.webp";
import male2 from "../../assets/male2.webp";
import bella from "../../assets/Trial-Logo-3.webp";
import pebci from "../../assets/download (3).webp";
import dole from "../../assets/down2load.webp";
import dell from "../../assets/channels4_profile.webp";
import hyndai from "../../assets/images.webp";
import nasa from "../../assets/downloasd.webp";
import image7 from "../../assets/pexels-photo-7386009.webp";

export default function Home() {
  const articles = [
    {
      id: 10,
      title: "زيارة جمعية حياة الطفل الخيرية",
      img: image4,
      date: "2025 / 6 /10",
    },
    {
      id: 11,
      title: "زيارة جمعية حياة الطفل الخيرية",
      img: image5,
      date: "2025 / 10 /6",
    },
    {
      id: 12,
      title: "زيارة جمعية حياة الطفل الخيرية",
      img: image6,
      date: "2025 / 7 /4",
    },
  ];
  return (
    <>
      <div className="frame-wrapper">
        <img className="frame2" src={frame2} alt="Frame 2" />
      </div>
      <div>
        <SectionTitle title="الحملات الجارية" linkText="عرض المزيد"  linkHref = '/campaigns' />
      </div>
      <div className="first text section">
        <p>
          في هذا القسم تجد أحدث الحملات التي تطلقها جمعية سعادة طفل - إرث محمد
          لدعم الأطفال والأسر المحتاجة. يمكنك متابعة تفاصيل كل حملة، معرفة نسبة
          التبرعات المحققة، والمساهمة مباشرة في إحداث فرق حقيقي في حياة
          المستفيدين.
        </p>
      </div>

      <CardGrid />
      <div>
        <SectionTitle title="الحملات البارزة" linkText="عرض المزيد"/>
      </div>

      <Card
        id="single1"
        title="دفى الشتاء لأطفالنا"
        description="مع دخول فصل الشتاء..."
        img={image7}
        percentage={46}
        targetPath="/donate/1"
        showButton={true}
        showPercentage={true}
        showdate={false}
        showdescription={true}
      />

      <div>
        <SectionTitle title="المقالات" linkText="عرض المزيد"  linkHref = '/newsandarticles'/>
      </div>

      <div className="second text section">
        <p>
          نفتخر في جمعية سعادة طفل - إن محمد بمشاريعنا الإنسانية التي تساهم في
          تحسين جودة حياة الأطفال وأسرهم، هذا تعريف لأحد أبرز مشاريعنا التي تعكس
          التزامنا بالعمل الخيري والاستدامة، مع تفاصيل نسب الإنجاز وعدد
          المستفيدين.{" "}
        </p>
      </div>

      <CardGrid
        data={articles}
        showButton={false}
        showPercentage={false}
        showdate={true}
        showdescription={false}
      />

      <div>
        <SectionTitle title="المتجر الخيري" linkText="عرض المزيد"  linkHref = '/store'/>
      </div>

      <div className="Third text section">
        <p>
          المتجر الخيري هو وسيلتك لدعم رسالتنا بطريقة مختلفة؛ يمكنك شراء منتجات
          رمزية، ويذهب ريعها بالكامل لمشاريع الجمعية وحملاتها. تسوّق الآن
          وشاركنا في صناعة الأمل.
        </p>
      </div>

      <div></div>
<ProductGrid limit={3} />

      <div className="line_style">
        <span className="line" style={{ flex: 1 }} aria-hidden="true"></span>

        <h2 className="title">قالو عنا</h2>

        <span className="line" style={{ flex: 1 }} aria-hidden="true"></span>
      </div>

      <div className="Forth text section">
        <p>
          كلمات داعمينا وشركائنا هي شهادة نعتز بها، فهي تعكس الثقة التي بنيناها
          مع المجتمع والمؤسسات. في هذا القسم نشارككم آراء من وقفوا معنا في
          رحلتنا لتحقيق رسالتنا السامية{" "}
        </p>
      </div>

      <div className="opinions-wrapper">
        <button className="arrow left-arrow">›</button>
        <div className="Opinions">
          <p className="p1">
            <img src={female} className="female" alt="" />
            كلمات داعمينا وشركائنا هي شهادة نعتز بها، فهي تعكس الثقة التي
            بنيناها مع المجتمع والمؤسسات. في هذا القسم نشارككم آراء من وقفوا
            معنا في رحلتنا لتحقيق رسالتنا السامية
          </p>

          <p className="p2">
            <img src={male1} className="male" alt="" />
            كلمات داعمينا وشركائنا هي شهادة نعتز بها، فهي تعكس الثقة التي
            بنيناها مع المجتمع والمؤسسات. في هذا القسم نشارككم آراء من وقفوا
            معنا في رحلتنا لتحقيق رسالتنا السامية
          </p>

          <p className="p3">
            <img src={female2} className="female" alt="" />
            كلمات داعمينا وشركائنا هي شهادة نعتز بها، فهي تعكس الثقة التي
            بنيناها مع المجتمع والمؤسسات. في هذا القسم نشارككم آراء من وقفوا
            معنا في رحلتنا لتحقيق رسالتنا السامية
          </p>

          <p className="p4">
            <img src={male2} className="male" alt="" />
            كلمات داعمينا وشركائنا هي شهادة نعتز بها، فهي تعكس الثقة التي
            بنيناها مع المجتمع والمؤسسات. في هذا القسم نشارككم آراء من وقفوا
            معنا في رحلتنا لتحقيق رسالتنا السامية
          </p>
        </div>
        <button className="arrow right-arrow">‹</button>
      </div>

      {/* /* *************************************************** */}
      <div className="line_style">
        <span className="line" style={{ flex: 1 }} aria-hidden="true"></span>

        <h2 className="title"> شركائنا </h2>

        <span className="line" style={{ flex: 1 }} aria-hidden="true"></span>
      </div>

      <div className="fifth text section">
        <p>
          نتوجه بخالص الشكر والتقدير لشركائنا الأعزاء على دعمهم المستمر وثقتهم
          الغالية التي تمكننا من تحقيق رسالتنا في إسعاد الأطفال ورسم البسمة على
          وجوههم. شراكتكم هي سر نجاحنا ودافعنا للاستمرار{" "}
        </p>
      </div>

      <div className="opinions-wrapper">

  <button className="arrow left-arrow2">›</button>

  <div className="Partners">
    <img src={bella} className="par" alt="" />
    <img src={pebci} className="par" alt="" />
    <img src={dole} className="par" alt="" />
    <img src={dell} className="par" alt="" />
    <img src={hyndai} className="par" alt="" />
    <img src={nasa} className="par" alt="" />
  </div>

  <button className="arrow right-arrow2">‹</button>

</div>

    </>
  );
}
