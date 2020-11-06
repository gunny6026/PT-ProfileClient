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


const Cart = () => {
    const classes = useStyles();
    
    const [cart, setCart] = useState([]);
    console.log("안녕")
    useEffect( () => {
      fetch("http://10.100.102.27:8000/admin/userList",{
        headers:{
          "Authorization":localStorage.getItem("Authorization"),
        }
      } )
      .then(res => res.json())
      .then(res=>{
        setCart(res);
        console.log("ㅎㅇㅎㅇ")
        console.log(res);
      });
    },[]);
    return (
        <div>
            <CardBox>
            <h1>장바구니</h1>
            </CardBox>
            <CardContainer> 
            <Card className={classes.root}>
         <CardActionArea>
           <CardMedia
             className={classes.media}
             image="/"
             title="Contemplative Reptile"
           />
           <CardContent>
             
             <Typography gutterBottom variant="h5" component="h2">
               title
             </Typography>
             <Typography variant="body2" color="textSecondary" component="p">
               content
             </Typography>
           </CardContent>
         </CardActionArea>
         <CardActions>
           <Button size="small" color="primary">
             Share
           </Button>
           <Button size="small" color="primary">
             Learn More
           </Button>
         </CardActions>
       </Card>
       </CardContainer>
        </div>
       
    );
}

export default Cart;