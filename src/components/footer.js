import "./footer.css";

const Footer = () => {
  return (
    <footer>
      <h1>XI RPL 1</h1>
      <div className="contact-container" id="contact">
        <ul>
          <li>Phone: +62 85220536728 ( Vina )</li>
          <l>Phone: +62 87729041703 ( Hasbiawak )</l>
          <li>
            <a href="https://forms.gle/1uXUxz4FDKm2hQmP8" target="blank">Order Here!</a>
          </li>
        </ul>
      </div>
      <div className="profile-box">
        <div class="profile-section">
          <i class="fa-brands fa-github"></i>
          <a
            href="https://github.com/deriana"
            target="blank"
            className="profile-link"
          >
            <p>Github</p>
          </a>
        </div>
        <div class="profile-section">
          <i class="fa-brands fa-facebook"></i>
          <a
            href="https://www.facebook.com/jerri.maruf"
            target="blank"
            className="profile-link"
          >
            <p>Facebook</p>
          </a>
        </div>
        <div class="profile-section">
          <i class="fa-brands fa-instagram"></i>
          <a
            href="https://www.instagram.com/hi_deri_/"
            target="blank"
            className="profile-link"
          >
            <p>Instagram</p>
          </a>
        </div>
        <div class="profile-section">
          <i class="fa-brands fa-instagram"></i>
          <a
            href="https://www.instagram.com/elegance_rpl1/  "
            target="blank"
            className="profile-link"
          >
            <p>Class RPL 1</p>
          </a>
        </div>
        <div class="profile-section">
          <i class="fa-brands fa-x-twitter"></i>
          <a
            href="https://x.com/Deriana765"
            target="blank"
            className="profile-link"
          >
            <p>Twitter</p>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
