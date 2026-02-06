import "./News_and_Acrticles.css";
import CenterTitle from "../../components/common/Center_Section_Line3/Center_Section_Line3";
import CardGrid from "../../components/common/Cards/cardGrid";
import image4 from "../../assets/kids-playing-football-29318311.webp";
import image5 from "../../assets/pexels-gustavo-fring-4894722.webp";
import image6 from "../../assets/premium_photo-1661567408466-27899e8a4a2f.webp";

function News_and_Acrticles() {
  const articles = [
    {
      title: "زيارة جمعية حياة الطفل الخيرية",
      img: image4,
      date: "2025 / 6 /10",
    },
    {
      title: "زيارة جمعية حياة الطفل الخيرية",
      img: image5,
      date: "2025 / 10 /6",
    },
    {
      title: "زيارة جمعية حياة الطفل الخيرية",
      img: image6,
      date: "2025 / 7 /4",
    },
  ];
  return (
    <>
      <CenterTitle text="المقالات" />
      <div className="first text section">
        <p>
          في هذا القسم تجد جميع مبادرات وجهود جمعية سعادة طفل - إرث محمد، سواء
          كانت مشاريع اكتملت وحققت أثرها في حياة الأطفال والأسر، أو حملات جارية
          ما زالت بانتظار دعمكم لتصل إلى أهدافها. نحن نؤمن أن كل مشروع، صغيرًا
          كان أو كبيرًا، هو خطوة في صناعة مستقبل أفضل، وهنا نتيح لكم متابعة
          الإنجازات السابقة والمشاركة في ما هو قادم
        </p>
      </div>
      <div className="search-filter-wrapper">
        {/* بوكس البحث */}
        <div className="search-box">
          <input type="text" placeholder="ابحث هنا..." />
          <i className="fas fa-search"></i>
        </div>
        {/* زرار الفلترة */}
        <button className="filter-btn">
          <span>الحملات الجارية</span>
          <i className="fas fa-filter"></i>
        </button>
      </div>

      <CardGrid
        data={articles}
        showButton={false}
        showPercentage={false}
        showdate={true}
        showdescription={false}
      />
      <CardGrid
        data={articles}
        showButton={false}
        showPercentage={false}
        showdate={true}
        showdescription={false}
      />
    </>
  );
}

export default News_and_Acrticles;
