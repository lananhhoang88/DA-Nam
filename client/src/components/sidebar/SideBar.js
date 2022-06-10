import React, { useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import { SidebarData } from './SidebarData';
import SubMenu from './SubMenu';
import { IconContext } from 'react-icons/lib';
import { BsFillGridFill, BsPersonCircle, BsFillQuestionCircleFill, BsBell, BsGridFill } from 'react-icons/bs';
import TopLogo from '../../assets/images/logo/logo.png'

const Nav = styled.div`
  background: #337AB7;
  height: 60px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

const NavLogo = styled.div`
  margin-left: 10px;
`;
const NavTitle = styled.div`
  margin-left: 10px;
  color: #ffff;
  font-size: 16px;
  font-weight: 700;
  text-transform: uppercase;
`;
const NavIcon = styled(Link)`
  // margin-left: 2rem;
  font-weight: 700;
  align-items: center;
  color: #337ab7;
  text-transform: uppercase;
  word-spacing: 1px;
  box-shadow: 0 2px 5px 0 rgb(0 0 0 / 15%);
  font-size: 18px;
  height: 60px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  &:hover {
    text-decoration: none;
  }
`;

const TopBarLeft = styled.div`
  display: flex;
  align-items: center;
  width: 30%
`
const TopBarRight1 = styled.div`
  
  width: 55%;
`
const TopBarRight2 = styled.div`
  float: right;
  align-items: center;
  display: flex;
  width: 45%;
`
const NavSearch = styled.li`
  list-style-type: none;
`;
const InputSearch = styled.input`
  height: 35px;
    // border-radius: 1px ;
    font-size: 15px;
    width: 300px;
`
const NavProfile = styled.div`
  height: 46px;
  align-items: center;
  float: right;
  right: 0;
  display: flex;
`
const NavName = styled.div`
color: #ffff;
`;
const NavAvatar = styled.div`
  width: 24px; 
  height: 24px;
`;
const SidebarNav = styled.nav`
  background: #ffff;
  width: 310px;
  height: 100vh;
  display: flex;
  justify-content: center;
  position: fixed;
  top: 60px;
  left: ${({ sidebar }) => (sidebar ? '0' : '-100%')};
  transition: 350ms;
  z-index: 10;
  box-shadow: 0 2px 5px 0 rgb(0 0 0 / 15%);
  overflow-y: scroll;
`;

const SidebarWrap = styled.div`
  width: 100%;
`;

const Sidebar = () => {
  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => setSidebar(!sidebar);

  return (
    <>
      <IconContext.Provider value={{ color: '#ffff' }}>
        <Nav>
          <TopBarLeft>
            <NavIcon to=''>
              <FaIcons.FaBars style={{ height: '30px', width: '30px' }} onClick={showSidebar} />
            </NavIcon>
            <NavLogo to=''>
              <img src={TopLogo} alt='' style={{ height: '40px', width: '40px' }} />
            </NavLogo>
            <NavTitle>Hệ thống đại học thông minh</NavTitle>
          </TopBarLeft>
          <TopBarRight1 />
          <TopBarRight2>
            <NavSearch>
              <InputSearch placeholder='Nhập từ khoa tìm kiếm' />
            </NavSearch>
            <BsGridFill style={{ width: '24px', height: '24px', margin: '15px' }} />
            <BsBell style={{ width: '24px', height: '24px', margin: '10px' }} />
            <BsFillQuestionCircleFill style={{ width: '24px', height: '24px', margin: '15px' }} />
            <NavProfile>
              <NavName>admin</NavName>
              <NavAvatar><BsPersonCircle style={{ width: '24px', height: '24px', marginLeft: '15px' }} /></NavAvatar>
            </NavProfile>
          </TopBarRight2>

        </Nav>
        <SidebarNav sidebar={sidebar}>
          <SidebarWrap>
            <NavIcon to='' >
              <BsFillGridFill style={{ color: '#337ab7 ', marginLeft: '10px' }} />
              <span style={{ marginLeft: '10px' }}>Quản lý đề tài NCKH</span>
              <AiIcons.AiOutlineClose onClick={showSidebar} />
            </NavIcon>
            {SidebarData.map((item, index) => {
              return <SubMenu item={item} key={index} />;
            })}
          </SidebarWrap>
        </SidebarNav>
      </IconContext.Provider>
    </>
  );
};

export default Sidebar;