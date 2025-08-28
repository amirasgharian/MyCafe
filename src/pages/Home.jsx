import React from "react";
import cafeImg from '../img/cafePic.jpg';
import '../styles/App.css'

function Home() {
  return (
    <React.Fragment>
        <div className="d-flex flex-column min-vh-100">
            <main className="flex-grow-1 d-flex align-items-center justify-content-center">
                
                <img src={cafeImg} alt="عکس کافه" className="cafe-img"></img>
            </main>
            <footer className="bg-dark text-white text-center py-3 rounded"  id="contact">
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