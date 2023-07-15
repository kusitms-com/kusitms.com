import React, { useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { ReactComponent as IconDelete } from "../images/common/icon-delete.svg";
import logo from "../images/common/logo.svg";
import logoText from "../images/common/logo-text.svg";

const SideBarWrap = styled.div`
  z-index: 5;
  padding-top: 23px;
  background: #151519;
  height: 100%;
  width: 100%;
  top: 0;
  position: fixed;
  transition: 0.5s ease;
  color: #ffffff;
  display: flex;
  flex-direction: column;

  &.open {
    right: 0;
    transition: 0.5s ease;
  }
`;

const Menu = styled.li`
  margin: 23.5px 28px;
`;

const SideBarTopContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 28px 0 16px;
  margin-bottom: 40px;
`;

const LogoContainer = styled.div`
  display: flex;
  gap: 10px;

  cursor: pointer;
`;

const IconDeleteCustom = styled(IconDelete)`
  margin-left: auto;
`;

const LinkBtn = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  color: #05f;
  font-weight: 600;
  height: 30px;
  background-color: white;
  border-radius: 75px;
  width: 94px;
  margin-left: 27px;
  cursor: pointer;
`;

function Sidebar({
  isOpen,
  setIsOpen,
  categories,
}: {
  isOpen: boolean;
  setIsOpen: any;
  categories: Array<{
    title: string;
    link: string;
  }>;
}) {
  const outside = useRef<any>();
  const navigate = useNavigate();

  useEffect(() => {
    document.addEventListener("mousedown", handlerOutsie);
    return () => {
      document.removeEventListener("mousedown", handlerOutsie);
    };
  });

  const handlerOutsie = (e: any) => {
    if (!outside.current.contains(e.target)) {
      toggleSide();
    }
  };

  const toggleSide = () => {
    setIsOpen(false);
  };

  const onClickCategory = (link: string) => {
    navigate(link);
  };

  const onClickLinkBtn = () => {
    window.open(process.env.REACT_APP_KUSITMS_28TH_REGISTER_URL, "_blank");
  };
  return (
    <SideBarWrap id="sidebar" ref={outside} className={isOpen ? "open" : ""}>
      <SideBarTopContainer>
        <LogoContainer>
          <img src={logo} />
          <img src={logoText} />
        </LogoContainer>
        <IconDeleteCustom onClick={toggleSide} onKeyDown={toggleSide} />
      </SideBarTopContainer>
      <ul>
        {categories.map(({ title, link }, index) => {
          return (
            <Menu
              key={index}
              onClick={() => {
                onClickCategory(link);
              }}
            >
              {title}
            </Menu>
          );
        })}
      </ul>
      <LinkBtn onClick={onClickLinkBtn}>지원하기</LinkBtn>
    </SideBarWrap>
  );
}

export default Sidebar;
