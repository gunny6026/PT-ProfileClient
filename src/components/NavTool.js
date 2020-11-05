import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const NavSt = styled.div`
    border: 1px solid rgb(221, 221, 221);
    border-radius: 12px;
    padding: 24px;
    box-shadow: rgba(0, 0, 0, 0.12) 0px 6px 16px;
    text-align: center;
`;

const addCart = (e) =>{
  e.preventDefault();

  fetch("", {
    method: "put",
          headers: {
            "Authorization": localStorage.getItem("Authorization")
          },
  })
    .then((res) => res.text())
    .then((res) => {
      if (res === "ok") {
        alert("장바구니에 담겼습니다");
      }else{
    alert("장바구니에 담기지 않았습니다");
  }
  });
}

//상품 번호를 장바구니 테이블에 넣는다
const NavTool = (props) => {
    const price = props.price;

    const cart = {
      ptNo: props.ptNo,
      userNo:''
    }

    return (
        <NavSt>
          <h1>{price} 원</h1>
          <h2 className="salePrice">할인가 : {price * 0.8}</h2>
          <br/>
          <Link to={`/sangdam`}>
            <button>카톡 상담</button>
          </Link>
          <br/>
          <button onClick={addCart}>장바구니 추가</button>
          <button>바로 결제</button>
        </NavSt>
    );
};

export default NavTool;