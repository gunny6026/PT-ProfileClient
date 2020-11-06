import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';




//상품 번호를 장바구니 테이블에 넣는다
const NavTool = (props) => {
    const price = props.price;

    const cart = {
      ptNo: props.ptNo,
      userNo:''
    }
    //토큰에서 회원 번호만 받아와서 넣기

    
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

    return (
        <div >
          <h1>{price} 원</h1>
          <h2 className="salePrice">할인가 : {price * 0.8}</h2>
          <br/>
          <Link to={`/sangdam`}>
            <button>카톡 상담</button>
          </Link>
          <br/>
          <button onClick={addCart}>장바구니 추가</button>
          <button>바로 결제</button>
        </div>
    );
};

export default NavTool;