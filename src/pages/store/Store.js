import CenterTitle from "../../components/common/Center_Section_Line3/Center_Section_Line3";
import ProductGrid from '../../components/Store/Product'

function Store() {
  return (
    <>
      <CenterTitle text="المتجر الالكتروني" />
      <div className="first text section">
        <p>
          المتجر الخيري هو وسيلتك لدعم رسالتنا بطريقة مختلفة؛ يمكنك شراء منتجات
          رمزية، ويذهب ريعها بالكامل لمشاريع الجمعية وحملاتها. تسوّق الآن
          وشاركنا في صناعة الأمل.
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
          <span>الاحدث اولا</span>
          <i className="fas fa-filter"></i>
        </button>
      </div>
      
      <ProductGrid/>
      <ProductGrid/>
      <ProductGrid/>
    </>
  );
}

export default Store;
