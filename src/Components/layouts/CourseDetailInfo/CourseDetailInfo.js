import React, { Fragment, useEffect, useState } from 'react'
import './CourseDetailInfo.scss'
import { useSelector, useDispatch } from 'react-redux'
import { dangKyKhoaHoc, layChiTietKhoaHoc } from '../../../redux/actions/CourseAction';
import { useToasts } from 'react-toast-notifications'

import Loading from '../../../common/Loading/Loading';

function CourseDetailInfo(props) {
    const maKH = props.maKH;

    const dispatch = useDispatch();
    const courseDetail = useSelector(state => state.CourseReducer.courseDetail)
    const isLoading = useSelector(state => state.LoadingReducer.loading)

    const { addToast } = useToasts()

    const enroll = (maKH) => {
        let taiKhoan = localStorage.getItem("taiKhoan")

        console.log(taiKhoan)

        dangKyKhoaHoc(maKH, taiKhoan)
        .then((res) => {
            addToast("Ghi danh thanh cong", {
                appearance: 'success',
                autoDismiss: true,
            })
        })
        .catch((err) => {
            console.log("errors:", err);
            addToast(err.response.data, {
                appearance: 'error',
                autoDismiss: true,
            })

        });

    }

    useEffect(() => {
        dispatch(layChiTietKhoaHoc(maKH));
    }, [])

    const renderLayout = () => {
        if(isLoading) return;
        return(
            <Fragment>
                <div className="rate">
                    <label class="active" title="text"><i class="fa fa-star"></i></label>
                    <label class="active" title="text"><i class="fa fa-star"></i></label>
                    <label class="active" title="text"><i class="fa fa-star"></i></label>
                    <label title="text"><i class="fa fa-star"></i></label>
                    <label title="text"><i class="fa fa-star"></i></label>
                </div>
                <h1 className="course-title">{courseDetail.tenKhoaHoc}</h1>
                <p className="course-subtitle">{courseDetail.moTa}</p>
                <div className="author">
                    <div className="author-img">
                        <img src="/images/user.jpg" />
                    </div>
                    <div className="author-name">{courseDetail.nguoiTao?.hoTen}</div>
                </div> 
                <ul className="course-note">
                    <li>{courseDetail.ngayTao}</li>
                    <li><i class="fa fa-user"></i> {courseDetail.soLuongHocVien}</li>
                    <li><i class="fa fa-eye"></i> {courseDetail.luotXem}</li>
                </ul>
                <div className="course-price">$234</div>  
                <div className="course-buy" onClick={() => enroll(maKH)}>Enroll Now</div>
            </Fragment>
        );
    }

    return (
        <div className="course-info">
            <div className="course-bg">
                <img src="/images/bg.jpg" />
            </div>
            <div className="container text-center">
                    <Loading />
                    {renderLayout()}
            </div>
        </div>
    )
}


export default CourseDetailInfo;
