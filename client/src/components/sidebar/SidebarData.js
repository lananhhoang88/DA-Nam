import React from 'react';
import * as RiIcons from 'react-icons/ri';
import {FaCube} from 'react-icons/fa'
// import {AiOutlineDown} from 'react-icons/ai'

export const SidebarData = [
  {
    title: 'Thông báo - Thông tin',
    path: '/nckh/thongbao-thongtin',
    icon: <FaCube style ={{color: 'black'}}/>,
  },
  {
    title: 'Quản lý thông tin cá nhân',
    path: '/nckh/thongtin-canhan',
    icon: <FaCube style ={{color: 'black'}}/>,
  },
  {
    title: 'Đợt đăng ký đề tài NCKH',
    path: '/nckh/dotdangky-detai',
    icon: <FaCube style ={{color: 'black'}}/>
  },
  {
    title: 'Đề tài NCKH cán bộ',
    path: '',
    icon: <FaCube style ={{color: 'black'}}/>,
    iconClosed: <RiIcons.RiArrowDownSFill style ={{color: 'black'}}/>,
    iconOpened: <RiIcons.RiArrowUpSFill style ={{color: 'black'}}/>,

    subNav: [
      {
        title: 'Đăng ký',
        path: '/nckh/canbo-nckh/dangky',
        icon: <FaCube style ={{color: 'black'}}/>,
        cName: 'sub-nav'
      },
      {
        title: 'Reports 2',
        path: '/reports/reports2',
        icon: <FaCube style ={{color: 'black'}}/>,
        cName: 'sub-nav'
      },
      {
        title: 'Reports 3',
        path: '/reports/reports3',
        icon: <FaCube style ={{color: 'black'}}/>
      }
    ]
  },
  {
    title: 'Đề tài NCKH sinh viên',
    path: '',
    icon: <FaCube style ={{color: 'black'}}/>,

    iconClosed: <RiIcons.RiArrowDownSFill style ={{color: 'black'}}/>,
    iconOpened: <RiIcons.RiArrowUpSFill style ={{color: 'black'}}/>,

    subNav: [
      {
        title: 'Đăng ký',
        path: '/nckh/sinhvien-nckh/dangky',
        icon: <FaCube style ={{color: 'black'}}/>
      },
      {
        title: 'Message 2',
        path: '/messages/message2',
        icon: <FaCube style ={{color: 'black'}}/>
      }
    ]
  },
  {
    title: 'Quản lý danh mục',
    path: '',
    icon: <FaCube style ={{color: 'black'}}/>,
    iconClosed: <RiIcons.RiArrowDownSFill style ={{color: 'black'}}/>,
    iconOpened: <RiIcons.RiArrowUpSFill style ={{color: 'black'}}/>,

    subNav: [
      {
        title: 'Danh mục năm học',
        path: '/nckh/sinhvien-nckh/dangky',
        icon: <FaCube style ={{color: 'black'}}/>
      },
      {
        title: 'Loại đề tài',
        path: '/nckh/dm-loaidetai',
        icon: <FaCube style ={{color: 'black'}}/>
      },
      {
        title: 'Cấp đề tài',
        path: '/nckh/dm-capdetai',
        icon: <FaCube style ={{color: 'black'}}/>
      },
      {
        title: 'Lĩnh vực nghiên cứu',
        path: 'nckh/dm-linhvucnghiencuu',
        icon: <FaCube style ={{color: 'black'}}/>
      },
      {
        title: 'Vai trò tham gia',
        path: '/nckh/dm-detai-vaitrothamgia',
        icon: <FaCube style ={{color: 'black'}}/>
      }
    ]
  }
];
