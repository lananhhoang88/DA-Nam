import React from 'react'
import { Link } from 'react-router-dom'
import './layout-menu.css'
import { FaAppStoreIos, FaCube, FaAngleDown } from 'react-icons/fa'

function Layout() {

    return (
        <div className='layout-menu-container ng-star-inserted'>
            <div className='root-menu'>
                <span className='rootMenu ng-star-inserted'>
                    <FaAppStoreIos style={{ width: '26px', height: '26px', paddingRight: '10px' }}></FaAppStoreIos>
                    Quản lý đề tài NCKH</span>
            </div>
            <div className='scroll-bar'>
                <ul>
                    <li>
                        <Link to='/nckh/thongbao-thongtin' className='menu' id='menu-button'>
                            <i><FaCube className='menu-icon'></FaCube></i>
                            <span className='menu-label'>Thông báo - Thông tin</span>
                        </Link>
                    </li>
                    <li>
                        <Link to='/nckh/thongtin-canhan' className='menu' id='menu-button'>
                            <i><FaCube className='menu-icon'></FaCube></i>
                            <span className='menu-label'>Quản lý thông tin cá nhân</span>
                        </Link>
                    </li>
                    <li>
                        <Link to='/nckh/dotdangky-detai' className='menu' id='menu-button'>
                            <i><FaCube className='menu-icon'></FaCube></i>
                            <span className='menu-label'>Đợt đăng ký đề tài NCKH</span>
                        </Link>
                    </li>
                    <li>
                        <Link to='' className='menu' id='menu-button'>
                            <i><FaCube className='menu-icon'></FaCube></i>
                            <span className='menu-label'>Đề tài NCKH cán bộ</span>
                            <i><FaAngleDown style={{ width: '20px' }}></FaAngleDown></i>
                        </Link>
                        <ul>
                            <Link to='/nckh/canbo-nckh/dangky' className='menu' id='menu-button'>
                                <i><FaCube className='menu-icon-1'></FaCube></i>
                                <span className='menu-label'>Đăng ký đề tài</span>
                            </Link>
                        </ul>
                    </li>
                    <li>
                        <Link to='' className='menu' id='menu-button'>
                            <i><FaCube className='menu-icon'></FaCube></i>
                            <span className='menu-label'>Đề tài NCKH sinh viên</span>
                            <i><FaAngleDown style={{ width: '20px' }}></FaAngleDown></i>
                        </Link>
                        <ul>
                            <Link to='/nckh/sinhvien-nckh/dangky' className='menu' id='menu-button'>
                                <i><FaCube className='menu-icon-1'></FaCube></i>
                                <span className='menu-label'>Đăng ký đề tài</span>
                            </Link>
                        </ul>
                    </li>
                    <li>
                        <Link to='' className='menu' id='menu-button'>
                            <i><FaCube className='menu-icon'></FaCube></i>
                            <span className='menu-label'>Quản lý danh mục NCKH</span>
                            <i><FaAngleDown style={{ width: '20px' }}></FaAngleDown></i>
                        </Link>
                        <ul>
                            <Link to='/nckh/dm-namhoc' className='menu' id='menu-button'>
                                <i><FaCube className='menu-icon-1'></FaCube></i>
                                <span className='menu-label'>Danh mục năm học</span>
                            </Link>
                            <Link to='/nckh/dm-loaidetai' className='menu' id='menu-button'>
                                <i><FaCube className='menu-icon-1'></FaCube></i>
                                <span className='menu-label'>Loại đề tài</span>
                            </Link>
                            <Link to='/nckh/dm-capdetai' className='menu' id='menu-button'>
                                <i><FaCube className='menu-icon-1'></FaCube></i>
                                <span className='menu-label'>Cấp đề tài</span>
                            </Link>
                            <Link to='/nckh/dm-linhvucnghiencuu' className='menu' id='menu-button'>
                                <i><FaCube className='menu-icon-1'></FaCube></i>
                                <span className='menu-label'>Lĩnh vực nghiên cứu</span>
                            </Link>
                            <Link to='/nckh/dm-detai-vaitrothamgia' className='menu' id='menu-button'>
                                <i><FaCube className='menu-icon-1'></FaCube></i>
                                <span className='menu-label'>Vai trò tham gia</span>
                            </Link>
                        </ul>
                    </li>
                </ul>
            </div>
            <div className='search-area'></div>
        </div>
    )
}

export default Layout
