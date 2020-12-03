import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import styled from 'styled-components';
import PaymentIcon from '@material-ui/icons/Payment';

 
 
const useStyles = makeStyles({
    root: {
      maxWidth: 345,
    },
    media: {
      height: 140,
    },
  });

  const CardBox = styled.div`
  
    margin-top : 65px;
    margin-bottom:50px;
  `;

  const CardContainer = styled.div`
    
        margin : 0px 20px;
        
  `;

const ButtonStyle = styled.button`
      background: 0 0;
    border: 0;
`;

const Grid = styled.div`

        display:grid;
        grid-template-columns: 1fr 1fr 1fr 1fr;
        grid-gap : 30px;
        width : 100%;

`;

const Cart = () => {
    const classes = useStyles();

    const[cartList, setCartList] = useState([]);

    useEffect(()=>{
      fetch("http://10.100.102.27:8000/user/info",{
        headers:{
          "Authorization":localStorage.getItem("Authorization"),
        }
      })
        .then((res) => res.json())
        .then((res) => {
          setCartList(res.wishs);
        });
    },[]);

    const removeItem =(wishNo)=>{
      

      fetch("http://10.100.102.27:8000/wish/"+wishNo , {
      method: "delete",
      headers: {
        "Authorization":localStorage.getItem("Authorization"),
      },
      })
      .then(function (res) {
        console.log(res);
        return res.text();
      })
      .then((res) => {
        if (res === "ok") {
          let newCartList = cartList.filter((cart) => cart.wishNo !== wishNo);
          setCartList(newCartList);
        }
      
      });
      }
      
    
    return (
        <div>
            <CardBox>
            <h1>장바구니</h1>
            </CardBox>
            <form id="ptType"><input type="hidden" name="type" value="pt"/></form>
            <Grid>
            {cartList.map( (carts) => (
              
            <CardContainer> 
            <Card className={classes.root}>
         <CardActionArea>
           <CardMedia
             className={classes.media}
             image={carts.pt.pt_img}
             title="Contemplative Reptile"
           />
           <CardContent>
             <Typography gutterBottom variant="h5" component="h2">
               {carts.pt.pt_name}
             </Typography>
             <Typography variant="body2" color="textSecondary" component="p">
             {carts.pt.pt_address}
             </Typography>
           </CardContent>
         </CardActionArea>

         <CardActions>
           <Button size="small" color="primary" onClick={()=>removeItem(carts.wishNo)}>
           <span class="fr66n"><ButtonStyle class="wpO6b " type="button"><div class="QBdPU "><span class="FY9nT"><svg aria-label="좋아요 취소" class="_8-yf5 " fill="#ed4956" height="24" viewBox="0 0 48 48" width="24"><path d="M34.6 3.1c-4.5 0-7.9 1.8-10.6 5.6-2.7-3.7-6.1-5.5-10.6-5.5C6 3.1 0 9.6 0 17.6c0 7.3 5.4 12 10.6 16.5.6.5 1.3 1.1 1.9 1.7l2.3 2c4.4 3.9 6.6 5.9 7.6 6.5.5.3 1.1.5 1.6.5s1.1-.2 1.6-.5c1-.6 2.8-2.2 7.8-6.8l2-1.8c.7-.6 1.3-1.2 2-1.7C42.7 29.6 48 25 48 17.6c0-8-6-14.5-13.4-14.5z"></path></svg></span></div></ButtonStyle></span>
    
           </Button>
           
         </CardActions>
       </Card>
       </CardContainer>
       
       ))}
       </Grid>
       <Button size="small" color="primary">
          <PaymentIcon/>
        </Button>
        </div>
       
    );
}

export default Cart;