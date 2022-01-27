import React from 'react';
import './style.scss';
const Home = () => {
  return (
    <div className="Home">
      <div className="Home-Image">
        <div className="Home-Content">
          <h3>Tìm bác sĩ, bệnh viện dễ dàng hơn</h3>
          <p>Chủ động đặt lịch hẹn thông minh và được chăm sóc tận tình</p>
          <div className='Home-Content-search'>
            <input className="Home-Content_input" placeholder="Nhập tên bác sĩ, bệnh viện, dịch vụ..."></input>
            <button className="btnSearch">Tìm kiếm</button>
          </div>
        </div>
        <img
          src="https://motortradescare.com.au/wp-content/uploads/2020/11/shutterstock_1721876416-NTD-Agreement-scaled.jpg"
          alt="home"
        ></img>
      </div>

      <div className="product_details">
        <div className="featured_product">
          <h5>DỊCH VỤ CỦA CHÚNG TÔI</h5>
        </div>
        <div className="product_news ">
          <div className="product_detail">
            <img src="" alt=""></img>
            <div className="detail">
              <p>Bệnh viện</p>
              <hr style={{ height: '4px', color: '#13cfae' }}></hr>
              <p>
                Đặt khám theo gói dịch vụ chất lượng, dịch vụ xét nghiệm và chẩn đoán hình ảnh hiện đại tới từ các đối
                tác bệnh viện hàng đầu.
              </p>
            </div>
          </div>

          <div className="product_detail">
            <img src="" alt=""></img>
            <div className="detail">
              <p>Bác sĩ</p>
              <hr style={{ height: '4px', color: '#13cfae' }}></hr>
              <p>
                Đặt khám trực tiếp tới đội ngũ bác sĩ có trình độ chuyên môn cao, nhiều năm kinh nghiệm, giàu y đức,
                giúp bạn hoàn toàn chủ động lựa chọn thời gian khám.
              </p>
            </div>
          </div>

          <div className="product_detail">
            <img src="" alt=""></img>
            <div className="detail">
              <p>Hỏi đáp</p>
              <hr style={{ height: '4px', color: '#13cfae' }}></hr>
              <p>
                Cộng đồng y tế đông đảo với sự tham gia của các bác sĩ đầu ngành tới từ nhiều lĩnh vực, hỗ trợ giải đáp
                thắc mắc của bạn trong mọi khía cạnh sức khỏe.
              </p>
            </div>
          </div>

          <div className="product_detail">
            <img src="" alt=""></img>
            <div className="detail">
              <p>Cẩm nang</p>
              <hr style={{ height: '4px', color: '#13cfae' }}></hr>
              <p>
                Với lượng bài đăng phong phú sẽ chia sẻ, cung cấp cho bạn nhiều kiến thức bổ ích về sức khỏe từ kinh
                nghiệm của những bác sĩ đầu ngành.
              </p>
            </div>
          </div>
        </div>
        <div className="product">
          <div className="product-list">
            <div className="product-list_items">
              <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAA8CAMAAAANIilAAAAA81BMVEUAAADv7+/v7+/v7+/v7+/v7+/u7u7v7+/v7+/t7e3r6+vs7O3v7+/v7+/v7+/t7e3t7e3v7++jr8Gfr7+kr8Kkr8Ckr8Glr8Khrb/v7++lr8Okrb+irb+jrL+fr7/v7+/z8/EoaVgispalvrfW39zV2+Ho6uupv74ljXeNrqQjoIYkln+LrKPa4t7A0cvi5+akr8Fym5Bai34Vf2k1cWIAlntBemvL19SxxsB/pJt0nZElhXC9zckjqY4ipIoNoYYKi3I0cWEncmDc3+MVp4tolIoTiXFBeWsmfWnAx9KfubOUsK10m5QZl35OgnRNgnQedGE6RG+XAAAAH3RSTlMA37/vIECQEJ9gQHCvz4CAUDDvIL+/36+Af39wYFAwXRgWcQAAAldJREFUSMel12ljmjAYwHHCLWDr0d1H9qB2Wg8QrfXsWrceu/f9P81kCwSTQMT+3/98YhAMCpPleghjTTVrStkcFadpdilvmcRR7xxqdYT5EO/fvzh7K7E0TXWzH9B8HjbCN5wtquqdupWa4zj6u/Bls/FsH6v4wD6HZ6/DfVzBB/c1DBtN0aKDtiBudsdVsr3CcVcRCBuzXtOzGP2zU8hpFjBa5b7xA8Ddosc3AxhgJoPZ6jXAohN8EPQLbnHuaB3HtQA+ds5FeL4cB6y20lUzmA9zVRJsH4HNBFePwB6xFpbgUW8wmDMYEexIcA/iIkYT7Bbjc/jfXIhPi/EIoLu5BhgIsSfFfd/Pw+pTcPUYrBGMcvFosVwu7wj+Pd7VSnCVYC0P94AUY1LE3Bk4D08J2G58f5XoNfl5SvAQYHL5yc92DUAW7pbHmxQbcvzn/r6/K57Zj1ulWBFjWgSkC9/fAqlN9ku228MZt9vTFnM7Iw5TvqtF8CL7DDdSXP4Xhuizszy2U2yXxHTV8vv5CuCxu9rDiPm/SDHfjF4jUoXiugQPo/gazTFNp9jCJR+9NnMqKIX1LDYT/OP7t5awNjuYZhCc323ADqZpBZjb6hNlP5Pgyc3PC0GrLEYKk0HwzeUXX1A3iysKm3owNolgRq/JU4dvS48VyCKCHf2w05Mu3yPAmJ6hBBnFR6lk1bUUcBvejoR0OgjSqyTOQrLjI7V8uoYlUctXl2hXhKhGBRTVy75l0Dyr5PsNDRnKIekqT7WTdKyU22hPqoZSKuNUrWo7hzzTKBr6F5TJTQEV9A3BAAAAAElFTkSuQmCC"></img>
              <div className="product-list_items-content">
                <p>Đặt khám từ xa</p>
                <p>
                  Bác sĩ của DOCTORCARE luôn sẵn sàng tư vấn và chăm sóc sức khỏe cho bạn mọi lúc mọi nơi qua video và
                  chat
                </p>
              </div>
            </div>
            <div className="product-list_items">
              <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAA8CAMAAAANIilAAAABRFBMVEUAAADv7+/v7+/v7+/v7+/v7+/v7+/u7u7v7+/t7e3v7+/t7e3v7+/u7u7s7Ozu7u4oaFj39/fv7+/v7+/v7++kr8GlscPr6+zU3dvg5uRWh3snaVcoaVgoaFikscHf3+WLq6MoaFi6xc+fr7+fr7/v7+8oaVjz8/EispbW39wljXfV2+FBemsBlnu9zck0cWF+o5tNgnTa4t6NrqRznJFbi36kvbbc4OWnv7iatq4lbVvv8O/r7Ozj5+akr8EdrpIhdWLh5ejL2NQjqY5olIkHmn8Fj3YUgGkaeWTs7u7m6ufZ3uPN1drAx9K/zdDA0cuyu8mJqaVmk4dThnoiiHI+d2kme2fX3OLJ0dcirZIQoocjoYcjmIAljncRhGwncmDl6OrY2+G0xseyx8Gpv76UsK6BpZsVp4xJfnJym5AmgGs9d2l/4BTxAAAAJXRSTlMA3yDvEM+/kJ9Ar4B/cGAwIB+AYFDff+/v38/Pv4BfUEBAMCAQS76j7gAAA2tJREFUSMedlVlb2kAUhhMICahgW+2+L/kSmkCAgFa0rSJqF6t1725b69L2/9/3TMeYMIco+t4xPG++mTMzZ7SzMUpWLmvbuaFSRjsfRsEkMSJ/Hr1gSTNmZEAzM2LanFxmgMzIZOin2cZoyZLr5PyYEdmGdu2eKhXzOV3XY40z+eK9sK1rL64+6VFHuMV5R7b4xtXHPcXJ2f0ol1X7g00sP9KS6DZnrxUAqDer/K/hpDvC/6/6iGg+V//MJifN3SmSgo0wPKgD8JldiOV8X7e5PO0QDR8I1R0zT1lxmdz9t+QK3tQRTCg7dt04OU0smMLWvOlO1/dbHcd5BqCq7Nj9SB5W3Qmg682RIwgdhxbRUnbMiuQhVV4HVrxyAMy+InvVcZqAUjM9knN81n9rtS7wrXL4mULDsAWox8VIqxck7UrFdWch4PLosWxzWVKpvHR3U+RSutxa+UD1erX4aROYajSmuGylyzVv0qnLSL9Bm8Xl/LGsXsaOkOfoaEWukKtqO0opWF0ckRlyVsOQ9knKvtqNUrYqwNHypJPkTYttdDblXtSx5e04PbQQ2ArHsqUM14Cf3uuk2wDW7f6npKT2AVD0XFLuAhOqfDmlFzRF9ExiyUDd5rIky6P3ve+xvBoFc5lfq+fAhpeoN82kkyoX+9zJWlyyqXjWXOaLLgdk70yfuChz2UhtYh2yvbdS9sWKORpvRBE1kmniUm7ZnOwpjXsdgefJ5LpcMb8YESbvRBty2ryBScxYHuf9cy06ZHtx0+fNgJ+Tao3qtXLS9OkHf+2KCXm41yR+ecdyAwJf8QsJ2cj2mLPAUXTGuvST+4amRFdl29r+Ou9uAjV5vEUjrCx82Zb+BC82YehUJZFJJvFxF8HKjnwk24sLL113XvohrxcxLp7GJerUki/Ahqj3gRg8lGPzX9tAlS1ZcAv4Rm7EtqjZ64Z4OBbcCPH6yPan8H9t7gnzbWwtT/rAovyiZFNekrziPhTBn9yYp1SzNfpiz+BneUsyinxXyRA1w5aolpscBH7zYO0OVWbpaZI/IGaXNnsG2/B5sIaBKVuayu1BXf+moTEuCR7cKJ8FvetpjGbtM7iipZPRL+6Snbu4S1xJVbNF7UwyQ/1dM6MNwpjJVX1MG5TRvN6bOq6di0JxyNRFpGmNGRrnHwmwmKmDYsVrAAAAAElFTkSuQmCC"></img>
              <div className="product-list_items-content">
                <p>Đội ngũ chuyên gia và cơ sở y tế hàng đầu</p>
                <p>
                  Dễ dàng kết nối với các bác sĩ ưu tú, tận tâm, có chuyên môn cao đến từ các bệnh viện tuyến trung ương
                  và phòng khám uy tín
                </p>
              </div>
            </div>
          </div>
          <div className="product-list">
            <div className="product-list_items">
              <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAA8CAMAAAANIilAAAAAtFBMVEUAAADv7+/v7+/v7+/u7u7u7u7v7+/v7+/v7+/v7+/v7+/u7u7u7u7v7+/v7++kr8Ht7e2jr8Ckr8Cjr7+jr7/v7++jr8Gkr8Kkrb+lscOfr7+fr7/v7+8oaVi9zckispYncmAkln+kvbZai35ym5Ckr8HW3tyYtK2LrKPW39xmkocIjXRBeWsAlns1cWIicF3i5+WxxcB/pJoVfmjK1dOAo5skoIZNgnQSg2vj5+YliXMedWFO8pQ7AAAAHHRSTlMAv98QQHAg75DPn4BgUK/aoIWgWEAw779wbyAQr/5PJwAAAhdJREFUSMellulW2zAQRiV5k7cApXQduW2I7QBJSAIU2r7/e1VKwMKacWLB/aPE59wzo2/khZHEUZYKABA8K2LmQ5BzeA0vPNQEXMRIPRRAIbrmv36qzxiNhCFytuNjfXJSfyFb5jCMDJjmrD7/Vn+g3BQOkQb7yp/rc0JGLrZNabKwhGNwZvhOuDkcRzKaGMYQ0XI6Sk5iyi1gHJySBYwk8iiMSAKPwogM3Q7gULXzyqxrszqEjpxBn7nSzNbQmnVxhTI71PVU7XjY7NdLVPpQ149K3d1oa2XWW6Wc0pODp1qpf8vlndLcLpdPSrnb7gXeu42bplkodaMrGp7Mumka98FgAUu7UjQPaNZoy40aZE4fs6iX8/Vsh+5gNjVR7//q6/S0ZE+uXiat57vt5qR/0JFNsNyo3YD+6OhaK1ORcSSvF897vF+ZC1bGfQskb7ottuaXlXHfCW57evlyqq63tm0qb0AyAsnZe2RBy21F4coQkzINkksbmK9sExMeMkos7ck/SZA8IY/n7x8UVnbO2OlbZXxL/v1FMSiX0FGpQba0HDtPbJLHK5Q2GjQ0Fck9/jqyiXlT2oeYPwH1SeH/kufecmHl3NcVzBK8vbB/39J5yfqQWtG7NA8cOfTpGSHHlg0ZJhDHxSSVISO5SAYMwTOZR0V5EbNhCuSJLAqxQVP2avMoZj7EvKuZB8yb8DQ13YZsFP8BX5YZyuKu6+sAAAAASUVORK5CYII="></img>
              <div className="product-list_items-content">
                <p>Tiếp đón ưu tiên với nhiều quyền lợi đặc biệt</p>
                <p>
                  Đặt khám hẹn trước tại các bệnh viện trung ương, phòng khám hàng đầu với nhiều đặc quyền dành riêng
                  cho bạn và gia đình
                </p>
              </div>
            </div>
            <div className="product-list_items">
              <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAA8CAMAAAANIilAAAAAtFBMVEUAAADv7+/v7+/v7+/u7u7u7u7v7+/v7+/v7+/v7+/v7+/u7u7u7u7v7+/v7++kr8Ht7e2jr8Ckr8Cjr7+jr7/v7++jr8Gkr8Kkrb+lscOfr7+fr7/v7+8oaVi9zckispYncmAkln+kvbZai35ym5Ckr8HW3tyYtK2LrKPW39xmkocIjXRBeWsAlns1cWIicF3i5+WxxcB/pJoVfmjK1dOAo5skoIZNgnQSg2vj5+YliXMedWFO8pQ7AAAAHHRSTlMAv98QQHAg75DPn4BgUK/aoIWgWEAw779wbyAQr/5PJwAAAhdJREFUSMellulW2zAQRiV5k7cApXQduW2I7QBJSAIU2r7/e1VKwMKacWLB/aPE59wzo2/khZHEUZYKABA8K2LmQ5BzeA0vPNQEXMRIPRRAIbrmv36qzxiNhCFytuNjfXJSfyFb5jCMDJjmrD7/Vn+g3BQOkQb7yp/rc0JGLrZNabKwhGNwZvhOuDkcRzKaGMYQ0XI6Sk5iyi1gHJySBYwk8iiMSAKPwogM3Q7gULXzyqxrszqEjpxBn7nSzNbQmnVxhTI71PVU7XjY7NdLVPpQ149K3d1oa2XWW6Wc0pODp1qpf8vlndLcLpdPSrnb7gXeu42bplkodaMrGp7Mumka98FgAUu7UjQPaNZoy40aZE4fs6iX8/Vsh+5gNjVR7//q6/S0ZE+uXiat57vt5qR/0JFNsNyo3YD+6OhaK1ORcSSvF897vF+ZC1bGfQskb7ottuaXlXHfCW57evlyqq63tm0qb0AyAsnZe2RBy21F4coQkzINkksbmK9sExMeMkos7ck/SZA8IY/n7x8UVnbO2OlbZXxL/v1FMSiX0FGpQba0HDtPbJLHK5Q2GjQ0Fck9/jqyiXlT2oeYPwH1SeH/kufecmHl3NcVzBK8vbB/39J5yfqQWtG7NA8cOfTpGSHHlg0ZJhDHxSSVISO5SAYMwTOZR0V5EbNhCuSJLAqxQVP2avMoZj7EvKuZB8yb8DQ13YZsFP8BX5YZyuKu6+sAAAAASUVORK5CYII="></img>
              <div className="product-list_items-content">
                <p>Giá khám bằng với giá tại cơ sở y tế</p>
                <p>Không những vậy còn giúp bạn tiết kiệm thời gian và các chi phí phát sinh khác</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div id="carouselExampleIndicators" className="carousel slide slider" data-bs-ride="carousel">
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="0"
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img
              src="https://isofhcare-backup.s3-ap-southeast-1.amazonaws.com/images/xet-nghiem-khang-the-covid-19-sau-tiem-isofhcare_5c16dadf_cb85_41aa_a4e4_4b04a58385e9.png"
              className="d-block w-100"
              id="slide_img"
              alt="..."
            ></img>
          </div>
          <div className="carousel-item">
            <img
              src="https://isofhcare-backup.s3-ap-southeast-1.amazonaws.com/images/noisoi-01-(2)_5f7d3a6e_6fbf_4645_a10f_7986cf41e8d4.jpg"
              className="d-block w-100"
              id="slide_img"
              alt="..."
            ></img>
          </div>
          <div className="carousel-item">
            <img
              src="https://isofhcare-backup.s3-ap-southeast-1.amazonaws.com/images/banner-van-chuyen-nguoi-benh-f0-tai-ha-noi-isofhcare_48e2002e_3f1f_4182_9d0e_1eb01893c179.jpg"
              className="d-block w-100"
              id="slide_img"
              alt="..."
            ></img>
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>

      <div className="company_detail">
        <h3>Dịch vụ</h3>
        <div className="company_intro">
          <h1>TƯ VẤN SỨC KHỎE TRỰC TUYẾN</h1>
          <p>
            Mang đến những dịch vụ thăm khám chuyên nghiệp, thân thiện cùng những đặc quyền dành riêng cho bạn và gia
            đình. Điều mà chúng tôi quan tâm hàng đầu chính là sự nhanh chóng, thuận tiện, an tâm của người bệnh. Những
            dịch vụ mà DOCTOR CARE cung cấp sẽ giúp bạn và gia đình luôn chủ động và tự tin khi đi khám chữa bệnh tại cơ
            sở y tế là các phòng khám, bệnh viện tuyến trung ương.
          </p>
        </div>
        <div className="more_about_us">HIỂU THÊM VỀ CHÚNG TÔI</div>
      </div>

      <div className="news-events">
        <div className="main_news">
          <p className="news_title">CẨM NANG Y TẾ</p>
          <div className="cards_news">
            <div className="card" style={{ width: '24rem' }}>
              <img
                src="https://isofhcare-backup.s3-ap-southeast-1.amazonaws.com/images/dau-nua-dau-thi-giac-isofhcare-jpg_546d3fff_3732_45ed_80cc_889ccf4d6162.png"
                className="card-img-top"
                alt="..."
              ></img>
              <div className="card-body">
                <h5 className="card-title">Đau đầu cấp tính: Đâu là nguyên nhân hay gặp phải?</h5>
                <p className="card-text">
                  Đau đầu là một triệu chứng hay gặp, do nhiều nguyên nhân khác nhau. Đau đầu có thể là hậu quả của một
                  bệnh toàn thân hoặc tổn thương thực thể ở não và vùng sọ...
                </p>
                <p>XEM THÊM</p>
              </div>
            </div>

            <div className="card" style={{ width: '24rem' }}>
              <img
                src="https://isofhcare-backup.s3-ap-southeast-1.amazonaws.com/images/benh-thuy-dau-co-nen-kieng-gio-kieng-nam-quat-isofhcare-jpg_c793c40d_6890_4a5d_a212_f42e7cc328ea.png"
                className="card-img-top"
                alt="..."
              ></img>
              <div className="card-body">
                <h5 className="card-title">Theo quan niệm dân gian: Mắc thủy đậu cần kiêng gió, kiêng...</h5>
                <p className="card-text">
                  Thủy đậu: căn bệnh truyền nhiễm dễ lây truyền và có đến hơn 90% người mắc bệnh nếu chưa có miễn dịch.
                  Từ xưa đến nay nếu phát hiện sớm và điều trị thì bệnh...
                </p>
                <p>XEM THÊM</p>
              </div>
            </div>

            <div className="card" style={{ width: '24rem' }}>
              <img
                src="https://isofhcare-backup.s3-ap-southeast-1.amazonaws.com/images/dau-dau-man-tinh-isofhcare-jpg_10326353_5738_4609_a8b8_2a0e133e21bf.png"
                className="card-img-top"
                alt="..."
              ></img>
              <div className="card-body">
                <h5 className="card-title">6 nguyên nhân gây nên bệnh đau đầu mạn tính</h5>
                <p className="card-text">
                  Đau đầu là một trong những triệu chứng xuất hiện phổ biến nhưng sâu bên trong lại ẩn giấu nhiều dấu
                  hiệu nguy hiểm mà bạn có chắc đã biết đến? Những cơn đau...
                </p>
                <p>XEM THÊM</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="company_achivement">
        <div className="achivement_list">
          <div className="achivement">
            <h2>70</h2>
            <h4>Bệnh viện uy tín</h4>
          </div>
          <div className="achivement">
            <h2>250</h2>
            <h4>Bác sĩ nhiều năm kinh nghiệm</h4>
          </div>
          <div className="achivement">
            <h2>500</h2>
            <h4>Khách hàng tư vấn</h4>
          </div>
        </div>
      </div>

      <div className="logos_companies">
        <div className="logo">
          <img
            src="https://isofhcare-backup.s3-ap-southeast-1.amazonaws.com/images/o2o-01-png_971c5a73_e148_49d4_9150_93b50275bcbf.png"
            alt=""
          ></img>
        </div>
        <div className="logo">
          <img
            src="https://isofhcare-backup.s3-ap-southeast-1.amazonaws.com/images/tai-xuong-(1)_ff79dc7d_45f8_47ff_97e0_d463a2c7b2ba.jpg"
            alt=""
          ></img>
        </div>
        <div className="logo">
          <img
            src="https://isofhcare-backup.s3-ap-southeast-1.amazonaws.com/images/1598498688731-logo_b86c2bbe_fd9b_4b42_9bf7_acacb768ef86.png"
            alt=""
          ></img>
        </div>
        <div className="logo">
          <img
            src="https://isofhcare-backup.s3-ap-southeast-1.amazonaws.com/images%2fimages_logo-chu-xanh_ykhn_82d76b7e_096c_4637_a243_c1ac45ad1bd9.png?alt=media"
            alt=""
          ></img>
        </div>
        <div className="logo">
          <img
            src="https://isofhcare-backup.s3-ap-southeast-1.amazonaws.com/images/logo-gentis-isofhcare_9ffb3117_4705_489d_9f06_03ee9bd1dc5b.png"
            alt=""
          ></img>
        </div>
        <div className="logo">
          <img
            src="https://isofhcare-backup.s3-ap-southeast-1.amazonaws.com/images/hanalab_16c2e0db_10fd_41f0_983d_6ab573315d06.png"
            alt=""
          ></img>
        </div>
      </div>
    </div>
  );
};

export default Home;
