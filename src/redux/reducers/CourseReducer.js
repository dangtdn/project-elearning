let objDetail = {
    maKhoaHoc: "Angular",
    biDanh: "bootcamp-react-0112",
    tenKhoaHoc: "bootcamp react 0112",
    moTa: "1",
    luotXem: 0,
    hinhAnh: "https://elearning0706.cybersoft.edu.vn/hinhanh/bootcamp-react-0112.png",
    maNhom: "GP01",
    ngayTao: "20/05/2021",
    soLuongHocVien: 0,
    nguoiTao: {
      taiKhoan: "tigerthu107",
      hoTen: "Tiger",
      maLoaiNguoiDung: "GV",
      tenLoaiNguoiDung: "Giáo vụ"
    }
}

const stateDefault = {
    arrCourse: [],
    courseDetail: {}
}

export const CourseReducer = (state = stateDefault, action) => {
    switch(action.type) {
        case 'LAY_DANH_SACH_KHOA_HOC': {
            state.arrCourse = [...action.data];
            console.log("reducer " + state.arrCourse)

            return {...state};
        }
        case 'LAY_KHOA_HOC_THEO_DANH_MUC': {
            state.arrCourse = [...action.data];

            return {...state};
        }
        case 'LAY_CHI_TIET_KHOA_HOC': {
            state.courseDetail = action.data;
            // if(action.data) console.log(action.data)

            console.log("reducer " + action.data)
            return {...state};
        }

        case 'LAY_CHI_TIET_KHOA_HOC': {
            state.arrCourse = [...action.data];
            
            return {...state};
        }

        case 'XOA_DANH_SACH_KHOA_HOC': {
            state.arrCourse = [];

            return {...state};
        }
        
        case 'XOA_KHOA_HOC': {
            let arrCourse = state.arrCourse.filter((course) => {
                return course.maKhoaHoc != action.data
            })
            return {...state, arrCourse: arrCourse};
        }

        case 'THEM_KHOA_HOC': {
            state.arrCourse.push(action.data)
            return {...state};
        }

        case 'GHI_DANH_KHOA_HOC': {
            
            return {...state};
        }

        case 'TIM_KIEM_KHOA_HOC': {
            let arrCourseUpdate = [...state.arrCourse];
    
            let arrSearch = arrCourseUpdate.filter((item) => {
                return item.tenKhoaHoc.includes(action.data);
            });

            return {...state, arrCourse: arrSearch};
        }
        default: return {...state};
    }
}