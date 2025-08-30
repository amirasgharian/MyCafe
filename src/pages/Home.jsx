import React from "react";
import '../styles/App.css'

function Home() {
  return (
    <React.Fragment>
      <div className="d-flex flex-column min-vh-100">
        <main className="flex-grow-1 d-flex flex-column align-items-center justify-content-center text-center px-3">
          <img
            src="/Img/cafePic.jpg"
            alt="عکس کافه"
            className="cafe-img img-fluid mb-4"
            style={{ maxHeight: "50vh", objectFit: "contain" }}
          />

          <h1 className="fw-bold mb-3">به کافه ما خوش آمدید ☕</h1>
          <p className="lead">
            جایی برای لذت بردن از قهوه‌های خاص و لحظات آرامش‌بخش
          </p>
        </main>

        <footer className="bg-dark text-white text-center py-3 rounded" id="contact">
          <div className="container">
            <h5>ارتباط با ما</h5>
            <p>ایمیل: info@mycafe.com | تلفن: 123456789</p>
            <p>آدرس: تهران، تهرانپارس، خیابان فرجام</p>
            <p>ساعات کاری: 8 صبح تا 12 شب</p>
          </div>
        </footer>
      </div>
    </React.Fragment>
  );
}

export default Home;
