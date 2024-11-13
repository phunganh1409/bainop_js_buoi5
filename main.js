// Bài 1
let diemChuan = 0;
let diemToan = 0;
let diemVan = 0;
let diemTiengAnh = 0;

const tongKet = document.getElementById("tongKet");
tongKet.onclick = function () {
  const diemChuan = document.getElementById("diemChuan").value * 1;
  const diemToan = document.getElementById("diemToan").value * 1;
  const diemVan = document.getElementById("diemVan").value * 1;
  const diemTiengAnh = document.getElementById("diemTiengAnh").value * 1;
  const diemUuTien = document.getElementById("diemUuTien").value * 1;
  const diemDoiTuong = document.getElementById("diemDoiTuong").value * 1;

  if (diemToan === 0 || diemVan === 0 || diemTiengAnh === 0) {
    document.getElementById("ketQua").innerHTML = "Rớt ( có môn điểm 0)";
    return;
  }

  let uUtien = 0;
  if (diemUuTien === "A") uUtien = 2;
  else if (diemUuTien === "B") uUtien = 1;
  else if (diemUuTien === "C") uUtien = 0.5;

  let doiTuong = 0;
  if (diemDoiTuong === 1) doiTuong = 2.5;
  else if (diemDoiTuong === 2) doiTuong = 1.5;
  else if (diemDoiTuong === 3) doiTuong = 1;

  let tongDiem = diemToan + diemVan + diemTiengAnh + uUtien + doiTuong;
  if (tongDiem >= diemChuan) {
    document.getElementById("ketQua").innerHTML =
      "Đậu ! Tổng điểm đạt được: " + tongDiem;
  } else if (tongDiem < diemChuan)
    document.getElementById("ketQua").innerHTML =
      "Rớt ! Tổng điểm đạt được: " + tongDiem;
};

// Bài tập 2
const kw50Dau = 500;
const kw50Ke = 650;
const kw100Ke = 850;
const kw150Ke = 1100;

let total = 0;

const thanhToan = document.getElementById("thanhToan");
thanhToan.onclick = function () {
  const tenChuHo = document.getElementById("tenChuHo").value;
  const soKw = document.getElementById("soKw").value;

  if (soKw <= 50) {
    total = soKw * kw50Dau;
  } else if (soKw <= 100) {
    total = 50 * 500 + (soKw - 50) * kw50Ke;
  } else if (soKw <= 200) {
    total = 50 * 500 + 50 * 650 + (soKw - 100) * kw100Ke;
  } else if (soKw <= 350) {
    total = 50 * 500 + 50 * 650 + 100 * 850 + (soKw - 200) * kw150Ke;
  } else
    total = 50 * 500 + 50 * 650 + 100 * 850 + 150 * 1100 + (soKw - 350) * 1300;

  let result =
    "Tên người đóng: " + tenChuHo + " Số tiền điện cần đóng là: " + total;

  document.getElementById("kwThanhToan").innerHTML = result;
};

// Bài 3
function tinhThue() {
  const hoTen = document.getElementById("hoTen").value;
  const tongThuNhap = document.getElementById("tongThuNhap").value;
  const nguoiPhuThuoc = document.getElementById("nguoiPhuThuoc").value;

  const thuNhapTruThue = tongThuNhap - 4 - nguoiPhuThuoc * 1.6;

  let thueSuat = "";
  if (thuNhapTruThue <= 60) {
    thueSuat = 0.05;
  } else if (thuNhapTruThue <= 120) {
    thueSuat = 0.1;
  } else if (thuNhapTruThue <= 210) {
    thueSuat = 0.15;
  } else if (thuNhapTruThue <= 384) {
    thueSuat = 0.2;
  } else if (thuNhapTruThue <= 624) {
    thueSuat = 0.25;
  } else if (thuNhapTruThue <= 960) {
    thueSuat = 0.3;
  } else {
    thueSuat = 0.35;
  }

  let thuePhaiTra = thuNhapTruThue * thueSuat;
  let result = `Họ tên: ${hoTen}<br>
    Tổng thu nhập năm: ${tongThuNhap} triệu VND<br>
    Số người phụ thuộc: ${nguoiPhuThuoc}<br>
    Thu nhập chịu thuế: ${thuNhapTruThue.toFixed(2)} triệu VND<br>
    Thuế thu nhập cá nhân phải trả: ${thuePhaiTra.toFixed(2)} triệu VND`;

  document.getElementById("resultThue").innerHTML = result;
}


// Bài 4
function toggleConnectionInput() {
  const loaiKhachHang = document.getElementById("loaiKhachHang").value;
  const soKetNoiLabel = document.getElementById("soKetNoiLabel");
  const soKetNoiInput = document.getElementById("soKetNoi");

  if (loaiKhachHang === "doanhNghiep") {
    soKetNoiLabel.classList.remove("hidden"); // Hiện label "Số kết nối"
    soKetNoiInput.classList.remove("hidden"); // Hiện ô nhập số kết nối
    soKetNoiInput.disabled = false; // Cho phép nhập số kết nối
} else {
    // Nếu loại khách hàng là "Nhà dân", ẩn ô nhập số kết nối
    soKetNoiLabel.classList.add("hidden");
    soKetNoiInput.classList.add("hidden");
    soKetNoiInput.disabled = true; // Vô hiệu hóa ô nhập số kết nối
    soKetNoiInput.value = ""; // Xóa giá trị ô nhập số kết nối

}
}

function tinhHoaDon() {
  const maKhachHang = document.getElementById("maKhachHang").value;
  const loaiKhachHang = document.getElementById("loaiKhachHang").value;
  const soKenhCaoCap = (document.getElementById("soKenhCaoCap").value);
  const soKetNoi = (document.getElementById("soKetNoi").value);

  let hoaDon = 0;

  if (loaiKhachHang === "nhaDan") {
    hoaDon = 4.5 + 20.5 + (soKenhCaoCap * 7.5);
  } else if (loaiKhachHang === "doanhNghiep") {
    hoaDon = 15 + 75;
    if (soKetNoi > 10) {
      hoaDon += (soKetNoi - 10) * 5;
    }
    hoaDon += soKenhCaoCap * 50;
  }

  let result = `
                Mã khách hàng: ${maKhachHang}<br>
                Loại khách hàng: ${
                  loaiKhachHang === "nhaDan" ? "Nhà dân" : "Doanh nghiệp"
                }<br>
                Số kênh cao cấp: ${soKenhCaoCap}<br>
                ${
                  loaiKhachHang === "doanhNghiep"
                    ? `Số kết nối: ${soKetNoi}<br>`
                    : ""
                }
                Tổng hóa đơn: $${hoaDon}
            `;
            console.log(result)

            document.getElementById("tienCap").innerHTML = result
}
