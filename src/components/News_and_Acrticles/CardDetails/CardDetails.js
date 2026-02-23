import KidsImg from '../../../assets/pexels-gustavo-fring-4894722.webp';

function CardDetails() {
  return (
        <>
    <div className="news-hero">
  <div className="news-overlay"></div>

  <img
    src={KidsImg}   
    alt="زيارة جمعية حياة طفل الخيرية"
    className="news-image"
  />

  <div className="news-text" dir="rtl">
    <h3 className="news-title">زيارة جمعية حياة طفل الخيرية</h3>
    <p className="news-date">السبت 31 أغسطس 2024</p>
  </div>
</div>

<h1 className='headtext'>جمعية سعادة طفل - إرث محمد تنظم فعالية خيرية للأطفال والأسر المحتاجة</h1>
<div className="event-meta">
        <p><span className="icon">📍</span> <strong>المكان:</strong> قاعة مركز الملك فهد الثقافي - الرياض</p>
        <p><span className="icon">🗓️</span> <strong>التاريخ:</strong> يوم الجمعة الموافق 20 سبتمبر 2025</p>
        <p><span className="icon">⏰</span> <strong>التوقيت:</strong> من الساعة 5:00 مساءً حتى 10:00 مساءً</p>
      </div>

      <section className="event-body">
        <p>
          شهد الحدث حضورًا واسعًا من العائلات، المتطوعين، والداعمين الذين شاركوا في صناعة لحظات لا تُنسى للأطفال. تتضمن فعاليات اليوم:
        </p>

        <ul className="event-list">
          <li>أركان ألعاب ومسابقات للأطفال.</li>
          <li>ورش رسم وتلوين لتنمية الإبداع.</li>
          <li>عروض فنية واستعراضية ترفيهية.</li>
          <li>بازار خيري لدعم أنشطة الجمعية المستقبلية.</li>
        </ul>

        <p>
          <strong>الهدف:</strong> كان الهدف من هذا الحدث هو جمع التبرعات لدعم برامج التعليم والرعاية الصحية للأطفال، بالإضافة إلى نشر روح المشاركة والمسؤولية المجتمعية.
        </p>

        <p className="quote">
          <span className="quote-icon">💙</span>
          نؤكد أن هذه الفعاليات ليست مجرد نشاط عابر، بل هي خطوة جديدة ضمن مسار طويل يهدف إلى منح الأطفال حياة أفضل وتمكين المجتمع من صناعة التغيير.
        </p>

        <p className="closing">
          🌟 مثل هذه الفعاليات تؤكد أن العمل الإنساني يمكن أن يخلق بيئة مليئة بالأمل، وإن كل ابتسامة تُهدى لطفل هي بذرة أمل نستمر في زرعها.
        </p>
      </section>
      </>
  )
}

export default CardDetails