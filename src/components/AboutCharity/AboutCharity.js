import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import "./AboutCharity.css"; 
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
import SectionLine from "../common/Left_Section_Line2/Section_line2";
import CenterTitle from "../common/Center_Section_Line3/Center_Section_Line3";
import GoalBoard from "../../assets/Top Five ServiceNow Implementations-1-1 (2).webp";
import PersonImg from "../../assets/dowwnloasd.webp";



delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: require("leaflet/dist/images/marker-icon-2x.png"),
  iconUrl: require("leaflet/dist/images/marker-icon.png"),
  shadowUrl: require("leaflet/dist/images/marker-shadow.png"),
});

export default function MyStaticLeafletMap({
  center = [24.7136, 46.6753], // default center (lat, lng)
  zoom = 14,
  height = "300px", // ارتفاع الخريطة
  markers = [{ position: [24.7136, 46.6753], popup: "موقعي" }],
}) {
  return (
    <>
      <CenterTitle text="عن الجمعية" />

      <p className="T1">
        جمعية سعادة طفل - إرث محمد هي جمعية خيرية غير ربحية تسعى إلى صناعة الأمل
        ورسم البسمة على وجوه الأطفال والأسر المحتاجة. نعمل من خلال مشاريعنا
        وحملاتنا على تحسين جودة الحياة، وتقديم الدعم في مجالات التعليم، الصحة،
        والرعاية الاجتماعية. رسالتنا تنبع من إيماننا العميق بأن لكل طفل الحق في
        حياة كريمة وفرص متكافئة للمستقبل. نجاحنا هو ثمرة ثقة المجتمع بنا، وشهادة
        داعمينا وشركائنا الذين وقفوا معنا في رحلتنا. في الأقسام التالية، نشارككم
        ما قيل عنا من كلمات نفتخر بها، وأسماء الشركاء الذين دعموا رسالتنا
        وأسهموا في تحويلها إلى واقع ملموس
      </p>

      <section className="about-hero">
        <div className="about-hero-inner">
          <div className="about-text" dir="rtl">
            <p>
              تأسست جمعية سعادة طفل – إرث محمد عام 2018 في المملكة العربية
              السعودية كمنظمة خيرية غير ربحية، ومرخصة رسميًا لدى وزارة الموارد
              البشرية والتنمية الاجتماعية. جاءت فكرة التأسيس استلهامًا من الإرث
              الإنساني العميق الذي تركه الشاب محمد بن عبدالله آل فلان – رحمه
              الله -، والذي كان مثالًا في البذل والعطاء، إذ كرّس جزءًا كبيرًا من
              حياته لمساندة الأطفال الأيتام، وتقديم العون للأسر محدودة الدخل،
              ورسم البسمة على وجوه الصغار.{" "}
            </p>
            <p>منذ انطلاقتها، وضعت الجمعية رؤيتها...</p>
            <p>وتخطط الجمعية من خلال استراتيجيتها بعيدة المدى...</p>
          </div>
        </div>
      </section>
      {/* =============================================================================================================== */}

      <SectionLine text="الرؤية" />

      <p className="T2">
        أن نصبح منبرًا إنسانيًا رائدًا على المستويين المحلي والإقليمي، يُحدث
        أثرًا ملموسًا ومستدامًا في حياة الأطفال والأسر المحتاجة. نسعى إلى أن
        نكون نقطة انطلاق لقصص نجاح جديدة، من خلال تمكين الأجيال الناشئة بالعلم
        والصحة والدعم النفسي والاجتماعي، ومنحهم فرصًا متكافئة لحياة كريمة
        ومستقبل واعد. رؤيتنا تتمحور حول بناء مجتمع أكثر تكافلًا وعدالة، حيث يكون
        لكل طفل الحق في النمو والازدهار دون أن تحده العقبات الاقتصادية أو
        الاجتماعية
      </p>
      {/* =============================================================================================================== */}

      <div className="Mint_Triangle">
        <SectionLine text="الرسالة" color="#ffffff" />

        <p className="T3">
          نؤمن بأن الابتسامة التي نرسمها على وجوه الأطفال اليوم هي بذرة أمل
          لمستقبل أفضل غدًا. لذلك، تتركز رسالتنا على تقديم مبادرات ومشاريع خيرية
          مستدامة، ترتكز على ثلاث ركائز أساسية: الشفافية في العمل لضمان ثقة
          المجتمع، الشراكة المجتمعية لتعزيز التعاون مع الأفراد والمؤسسات،
          والابتكار في طرق الدعم لضمان وصول المساعدة بأكثر الوسائل فاعلية. من
          خلال ذلك، نعمل على نشر الأمل، تخفيف المعاناة، وبناء جسور إنسانية تمتد
          عبر الأجيال
        </p>
      </div>

      {/* =============================================================================================================== */}
      <CenterTitle text="الاهداف" />

      <div className="Goals">
        <div className="goals-list">
          <div className="goal">
            <span className="num">1</span>
            <p>تمكين الأطفال الأيتام وأسرهم عبر برامج تعليمية وصحية.</p>
          </div>

          <div className="goal">
            <span className="num">2</span>
            <p>توفير الرعاية الاجتماعية والدعم النفسي للأطفال المحتاجين.</p>
          </div>

          <div className="goal">
            <span className="num">3</span>
            <p>بناء مشاريع تنموية مستدامة تخدم المجتمع المحلي.</p>
          </div>
          <div className="goal">
            <span className="num">4</span>
            <p>بناء مشاريع تنموية مستدامة تخدم المجتمع المحلي.</p>
          </div>
          <div className="goal">
            <span className="num">5</span>
            <p>بناء مشاريع تنموية مستدامة تخدم المجتمع المحلي.</p>
          </div>
        </div>
        <img src={GoalBoard} alt="" className="GoalBoard" />
      </div>

      {/* =============================================================================================================== */}
      <CenterTitle text="المؤسسون" />
      <br />
      <div className="team-wrapper">
        <div className="team-card">
          <div className="team-image-wrapper">
            <img src={PersonImg} alt="" className="team-image" />
          </div>
          <h3 className="team-name">أ. عمرو مسحالي</h3>
          <p className="team-title">مستشار في الاستدامة المالية</p>
          <p className="team-desc">
            كلمات فصيحة وعباراتنا هي رؤيتنا، يعبر بها هي، تعكس الفئة التي ينطو
            بها المجتمع والمؤسسات، في هذا القسم شركتكم إن من وقفوا معنا هم
            رؤيتنا لتحقيق رسالتنا السامية.
          </p>
        </div>

        <div className="team-card">
          <div className="team-image-wrapper">
            <img src={PersonImg} alt="" className="team-image" />
          </div>
          <h3 className="team-name">أ. عمرو مسحالي</h3>
          <p className="team-title">مستشار في الاستدامة المالية</p>
          <p className="team-desc">
            كلمات فصيحة وعباراتنا هي رؤيتنا، يعبر بها هي، تعكس الفئة التي ينطو
            بها المجتمع والمؤسسات، في هذا القسم شركتكم إن من وقفوا معنا هم
            رؤيتنا لتحقيق رسالتنا السامية.
          </p>
        </div>

        <div className="team-card">
          <div className="team-image-wrapper">
            <img src={PersonImg} alt="" className="team-image" />
          </div>
          <h3 className="team-name">أ. عمرو مسحالي</h3>
          <p className="team-title">مستشار في الاستدامة المالية</p>
          <p className="team-desc">
            كلمات فصيحة وعباراتنا هي رؤيتنا، يعبر بها هي، تعكس الفئة التي ينطو
            بها المجتمع والمؤسسات، في هذا القسم شركتكم إن من وقفوا معنا هم
            رؤيتنا لتحقيق رسالتنا السامية.
          </p>
        </div>
      </div>

      {/* =============================================================================================================== */}
      <CenterTitle text="قالو عنا" />
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
      <CenterTitle text="شركائنا" />

      <div className="fifth text section">
        <p>
          نتوجه بخالص الشكر والتقدير لشركائنا الأعزاء على دعمهم المستمر وثقتهم
          الغالية التي تمكننا من تحقيق رسالتنا في إسعاد الأطفال ورسم البسمة على
          وجوههم. شراكتكم هي سر نجاحنا ودافعنا للاستمرار{" "}
        </p>
      </div>

      <div className="partners-wrapper">
        <button className="arrow left-arrow2" title="Next">›</button>
        <div className="Partners">
          <img src={bella} className="par" alt="Sponsor logo" />
          <img src={pebci} className="par" alt="Sponsor logo" />
          <img src={dole} className="par" alt="Sponsor logo" />
          <img src={dell} className="par" alt="Sponsor logo" />
          <img src={hyndai} className="par" alt="Sponsor logo" />
          <img src={nasa} className="par" alt="Sponsor logo" />
        </div>
        <button className="arrow right-arrow2" title="Previous">‹</button>
      </div>

      <div className="my-static-leaflet-wrapper" style={{ width: "100%" }}>
        <MapContainer
          center={center}
          zoom={zoom}
          style={{ height: height, width: "100%" }}
          dragging={false} // عشان تكون ثابتة
          touchZoom={false}
          doubleClickZoom={false}
          scrollWheelZoom={false}
          zoomControl={false}
          attributionControl={true} // خلي attribution عشان سياسات OSM
        >
          {/* OpenStreetMap tiles — مجاناً */}
          <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />

          {markers.map((m, i) => (
            <Marker key={i} position={m.position}>
              {m.popup && <Popup>{m.popup}</Popup>}
            </Marker>
          ))}
        </MapContainer>
      </div>
    </>
  );
}
