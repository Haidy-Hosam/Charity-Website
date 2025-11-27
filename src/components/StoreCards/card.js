import Productcard from "./Productcard";
import "./card.css";
import bag1 from "../../assets/download.webp";
import bag2 from "../../assets/download (1).webp";
import booklet from "../../assets/download (2).webp";
import pens from "../../assets/download (2).webp";

function CardStore() {
  return (
    <>
      <div className="products">
          <Productcard
            img={bag1}
            title="شنطة مدرسيه"
            Price="90$"
            Details="          شنطة مدرسية للجنسين في ابتدائي من كيمواداله طقم شنط + غداء معزولة +
            مقلمة نمط يونيكورن على سحابة اصفر مقاس واحد"
          />
          <Productcard
          img={bag2}
          title="شنطة مدرسيه"
          Price="100$"
          Details="          شنطة مدرسية بناتي للابتدائي من كيمواداله طقم شنط + غداء معزولة +
          مقلمة نمط يونيكورن على سحابة بينك مقاس واحد"
          />
        <Productcard
          img={booklet}
          title="كراسة مدرسية"
          Price="50$"
          Details="بوكليت مدرسي  190 ورقة"
        />
        <Productcard
          img={pens}
          title="عبوة اقلام"
          Price="80$"
          Details="قلم جاف بريما جينتا للكتابة بسلاسة فائقة، حبر سائل 0.7 ملم، عبوة من 10 قطع - ازرق"
        />
      </div>
    </>
  );
}

export default CardStore;
