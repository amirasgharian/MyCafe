import aboutPic from "../Img/aboutPic.jpg";

function About() {
  return (
    <div className="container my-4">
      <div className="text-center">
        <img
          src={aboutPic}
          alt="عکس محیط کافه"
          className="img-fluid rounded shadow"
          style={{ maxHeight: "400px"  }}
        />
      </div>

      <div className="mt-4 text-center">
        <h4 className="bg-dark text-light rounded p-2 w-1">
          کافه ما محیطی گرم و صمیمی برای لذت بردن از قهوه و شیرینی‌های خوشمزه
           فراهم کرده است. هدف ما ارائه بهترین تجربه‌ی کافه‌گردی برای شماست  
           با سرو انواع ثهوه جات و شیرینی جات در پذیرای شما هستیم
        </h4>
      </div>
    </div>
  );
}

export default About;
