import React from "react";
import './UserUpdateInfo.css'
import './DoctorUpdateInfo.css'

function UserUpdateInfo() {

    const author = 'Xuân Hiếu';
    const role = 'Chủ tài khoản';
    const role2 = 'Bác sĩ';
  return (
    <>
      <h1>SỬA THÔNG TIN CÁ NHÂN</h1>
      <div className="form">
        <form>
          <div className="form-header">
            <div className="form-header_avatar"></div>
            <h3 className="form-header_name">{author}</h3>
            <p className="form-header_role">{role}</p>
          </div>
          <div className="form-content">
            <div className="form-content_name">
              <label>Họ và tên</label>
              <input type={Text} />
            </div>
            <div className="form-content_email">
              <label>Email</label>
              <input type={"text"} />
            </div>
            <div className="form-content_dob">
              <label>Ngày sinh</label>
              <input type={"date"} />
            </div>
            <div className="form-content_gender">
              <label>Giới tính</label>
              <select>
                <option>Chọn giới tính</option>
                <option>Nam</option>
                <option>Nữ</option>
              </select>
            </div>
            <div className="form-content_phone">
              <label>Số điện thoại</label>
              <input type={"text"} />
            </div>
            <div className="form-content_address">
              <label>Địa chỉ</label>
              <input type={"text"} />
            </div>
            <div className="form-content_job">
              <label>Nghề nghiệp</label>
              <input type={"text"} />
            </div>
          <div className="btn">
          <button type="submit">Lưu</button>
          <button type="reset">Hủy</button>
          </div>
          </div>
        </form>
      </div>
      {/* <div>
        <img src="https://isofhcare-backup.s3-ap-southeast-1.amazonaws.com/images/frame_1c75cb90_c90f_433b_a75f_8bb7a87dafe0.png"/>
      </div> */}


<h1>SỬA THÔNG TIN BÁC SĨ</h1>
      <div className="form">
        <form>
          <div className="form-header">
            <div className="form-header_avatar"></div>
            <h3 className="form-header_name">{author}</h3>
            <p className="form-header_role">{role2}</p>
          </div>
          <div className="form-content">
            <div className="form-content_nameDoctor">
              <label>Họ và tên</label>
              <input type={Text} />
            </div>
            <div className="form-content_emailDoctor">
              <label>Email</label>
              <input type={"text"} />
            </div>
            <div className="form-content_hospital">
              <label>Bệnh viên</label>
              <input type={"text"} />
            </div>
            <div className="form-content_major">
              <label>Chuyên khoa</label>
              <select>
                <option>Chọn chuyên khoa</option>
                <option>...</option>
                <option>...</option>
              </select>
            </div>
            <div className="form-content_degree">
              <label>Học vị</label>
              <input type={"text"} />
            </div>
            <div className="form-content_exp">
              <label>Năm kinh nghiệm</label>
              <input type={"text"} />
            </div>
            <div className="form-content_time">
              <label>Thời lượng tư vấn</label>
              <input type={"text"} />
            </div>
          <div className="btn">
          <button type="submit">Lưu</button>
          <button type="reset">Hủy</button>
          </div>
          </div>
        </form>
      </div>
    </>
  );
}

export default UserUpdateInfo;