import React from "react";
import { Link } from 'react-router-dom';
import "./Footer.scss";
function Footer() {
  return (
    <>
      <div className="footer">
        <div className="row">
          <div className="col-12 col-md-6 col-lg-3 col">
            <div className="company_info">
              <Link to="/trangchu">
                <div className="company_info_logo">
                  <h3>DOCTOR CARE</h3>
                </div>
              </Link>
              <hr></hr>
              <h4>Địa chỉ</h4>
              <p className="company_info-item">Số 315 Trường Chinh, Thanh Xuân Hà Nội</p>
              <h4>Số điện thoại</h4>
              <p className="company_info-item">0123456789</p>
              <h4>Email</h4>
              <p className="company_info-item">support@doctorcare.com</p>
            </div>
          </div>
          <div className="col-12 col-md-6 col-lg-3 col">
            <div className="company_link">
              <h4>LIÊN KẾT</h4>
              <hr></hr>
              <p className="company_link-item">Liên kết hợp tác</p>
              <p className="company_link-item">Câu hỏi thường gặp</p>
              <p className="company_link-item">Điều khoản sử dụng</p>
              <p className="company_link-item">Chính sách bảo mật</p>
            </div>
          </div>
          <div className="col-12 col-md-6 col-lg-3 col">
            <div className="company_support">
              <h4>HỖ TRỢ KHÁCH HÀNG</h4>
              <hr></hr>
              <p className="company_support-item">Phiếu quà tặng</p>
              <p className="company_support-item">Hướng dẫn chọn giờ</p>
              <p className="company_support-item">Thẻ VIP</p>
            </div>
          </div>
          <div className="col-12 col-md-6 col-lg-3 col">
            <div className="register_for_news">
              <h4>ĐĂNG KÝ NHẬN BẢN TIN</h4>
              <hr></hr>
              <div className="input-group mb-3">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Địa chỉ Email"
                  aria-label="Recipient's username"
                  aria-describedby="button-addon2"
                ></input>
                <button>Gửi</button>
              </div>
              <p style={{ color: "grey" }}>
                Đăng ký với chúng tôi để nhận email về thông tin mới nhất, khuyến
                mại đặc biệt và các sự kiện độc đáo
              </p>
            </div>
          </div>

        </div>




      </div>
    </>
  );
}
export default Footer;
