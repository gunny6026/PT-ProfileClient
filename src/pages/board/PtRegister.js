import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
    margin-top: 60px;
    text-align: center;
    background-color: gray;
`;
const InputBox = styled.div`
    
    display: inline;
    background-color: beige;
    margin-left :auto;
    margin-right: auto;
   height : 800px;
`;

const Form = styled.form`
   
    display : grid;
    grid-template-rows: auto,auto,auto,auto,auto;
    width : 500px;
    background-color: beige;
    margin-left: auto;
    margin-right:auto;
`;

const Input = styled.input`
    margin : 10px 5px;
    height : 50px;
`;

const Buttons = styled.div`
    display: grid;
    width: 200px;
    font-size : 30px;
    grid-template-columns: auto auto;
    grid-gap: 10px;
    margin-left: auto;
    margin-right:auto;
`;


const PtRegister = (props) => {

    const submitPt = (e) =>{
        console.log("Dd");
        e.preventDefault();
        const ptData = document.getElementById("ptForm");
        const Datas = new FormData(ptData);
        console.log(Datas);
        fetch("http://10.100.102.27:8000/pt/write",{
            method:"POST",
            headers : {
                "Authorization" : localStorage.getItem("Authorization"),
            },   
            body: Datas
     }).then( (res)=> res.text())
    .then( (res) => {
        if(res ==="ok"){
            alert("등록되었습니다.");
            props.history.push("/")
            
        }
    })
    }


    return (
        <div>
            <Container>
            <h1>PT 등록</h1>
            </Container>
            <InputBox>
            <Form id="ptForm">
            <Input type="text" name="pt_name" placeholder="이름을 등록하세요" /> 
            <Input type="text" name="pt_address" placeholder="주소를 등록하세요" /> 
            <Input type="text" name="pt_content" placeholder="내용을 등록하세요" /> 
            <Input type="text" name="pt_price" placeholder="1개월 가격"  /> 
            <Input type="text" name="pt_price" placeholder="3개월 가격"  />
            <Input type="text" name="pt_price" placeholder="6개월 가격"  />
            <Input type="text" name="pt_price" placeholder="P.T 1회 가격"  />
            <Input type="text" name="pt_price" placeholder="그룹 P.T 1회 가격"  />
            <Input type="file" name="pt_img" placeholder="사진 등록" accept="image/png , image/jpeg" /> <br/>
            </Form>

            <Buttons>
            <button type="submit" onClick={submitPt}>버튼</button> 
            <button type="reset">취소</button>
            </Buttons>
            </InputBox>
        </div>
    );
};

export default PtRegister;