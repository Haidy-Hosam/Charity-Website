import React from "react";
import "./campaigns.css";
import CardGrid from "../../components/common/Cards/cardGrid";
import Card from "../../components/common/Cards/card";
import image2 from "../../assets/free-video-2247164.webp";
import image3 from "../../assets/rr.webp";
import CenterTitle from '../../components/common/Center_Section_Line3/Center_Section_Line3';


function Campaigns() {
  const NewCrds = [
    {
      id: "c1",
      title: "تشرد الاطفال",
      description:
        "مع دخول فصل الشتاء، يواجه الكثير من الأطفال والأسر المحتاجة صعوبة في توفير الملابس والدفايات اللازمة لحمايتهم من البرد. من خلال هذه الحملة نسعى لتوزيع 500 حقيبة شتوية تحتوي على (طاقية، جاكيت، قبعة، وكفوف) للأطفال في القرى الأكثر احتياجًا.",
      img: image2,
      percentage: 88,
      targetPath: "/donate/1",
    },
    {
      id: "c2",
      title: "الكارت التاني زي ما هوطفله يتيمه",
      description:
        "مع دخول فصل الشتاء، يواجه الكثير من الأطفال والأسر المحتاجة صعوبة في توفير الملابس والدفايات اللازمة لحمايتهم من البرد. من خلال هذه الحملة نسعى لتوزيع 500 حقيبة شتوية تحتوي على (طاقية، جاكيت، قبعة، وكفوف) للأطفال في القرى الأكثر احتياجًا.",
      img: image3,
      percentage: 46,
      targetPath: "/donate/1",
    },
  ];

  return (
    <>
      <CenterTitle text='الحملات' />
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

      <div className="Cards">
        <CardGrid />
        <CardGrid data={NewCrds} />
      </div>
    </>
  );
}

export default Campaigns;
