import { useParams } from 'react-router-dom'; 
import { products } from '../../../components/Store/productsData.js'; 
import ProductGrid from "../../../components/Store/Product.js";
import { useState } from 'react';
import PurchaseProduct from '../../../components/Store/PurchaseProduct.js'; 

const ProductDetails = () => {
  const { id } = useParams();
  const product = products.find((p) => p.id === parseInt(id));

  const [isModalOpen, setIsModalOpen] = useState(false);

  if (!product) {
    return <h1 className="text-center p-10 font-bold text-3xl"> المنتج غير موجود يا فندم</h1>;
  }

  return (
    <>
      <div className="w-full bg-white p-4 md:p-10 font-sans" dir="rtl">
        <div className="max-w-6xl mx-auto bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
          
          <div className="flex flex-col lg:flex-row">
            
            {/* قسم الصورة */}
            <div className="w-full lg:w-1/2 bg-[#F5F7F9] p-10 flex items-center justify-center min-h-[450px]">
              <img 
                src={product.image}  
                alt={product.title} 
                className="w-full max-w-sm object-contain mix-blend-multiply"
              />
            </div>

            {/* قسم التفاصيل */}
            <div className="w-full lg:w-1/2 p-8 lg:p-12 flex flex-col justify-center">
              
              <div className="flex justify-between items-start mb-6">
                <h1 className="text-3xl font-bold text-gray-900">{product.title}</h1>
                <div className="flex items-center gap-1 text-2xl font-bold text-gray-900">
                  <span>{product.price}</span>
                  <span className="text-base font-normal text-gray-500">{product.currency}</span>
                </div>
              </div>

              <p className="text-gray-400 text-sm leading-8 mb-8 text-justify border-b border-gray-100 pb-8">
                {product.description || "هذا وصف افتراضي للمنتج.. يتميز هذا المنتج بجودة عالية وتصميم عصري يناسب جميع الاحتياجات المدرسية."}
              </p>

              <div className="mb-6">
                <h3 className="font-bold text-gray-900 mb-3 text-sm">الألوان المتاحة</h3>
                <div className="flex gap-3">
                  <div className="w-6 h-6 rounded-full bg-[#D1D5DB] cursor-pointer"></div>
                  <div className="w-6 h-6 rounded-full bg-[#9CA3AF] cursor-pointer"></div>
                  <div className="w-6 h-6 rounded-full bg-[#60A5FA] cursor-pointer border-2 border-gray-400"></div>
                </div>
              </div>

              <div className="mb-10">
                <h3 className="font-bold text-gray-900 mb-3 text-sm">الكمية</h3>
                <div className="flex items-center gap-4">
                  <div className="flex items-center justify-between border border-gray-300 rounded-full w-32 px-2 py-1">
                    <button className="w-8 h-8 flex items-center justify-center text-gray-500 text-xl pb-1 hover:text-black">-</button>
                    <span className="font-bold text-lg text-gray-900">1</span>
                    <button className="w-8 h-8 flex items-center justify-center text-gray-500 text-xl pb-1 hover:text-black">+</button>
                  </div>
                </div>
              </div>

              {/* 4. ربط الزرار بفتح المودال */}
              <button 
                onClick={() => setIsModalOpen(true)}
                className="w-full bg-[#72B7C4] hover:bg-[#5faab8] text-white font-bold py-3 rounded-lg text-lg transition-colors shadow-md"
              >
                اشتري الان
              </button>

            </div>
          </div>
        </div>
      </div>

      <ProductGrid/>

      {isModalOpen && (
        <PurchaseProduct 
          product={product} 
          onClose={() => setIsModalOpen(false)} 
        />
      )}
    </>
  );
};

export default ProductDetails;