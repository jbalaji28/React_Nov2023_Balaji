import * as React from 'react';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
import YouTubeIcon from '@mui/icons-material/YouTube';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import { Container, Typography, Button, AppBar, Toolbar } from '@mui/material';
import "./HomePage.css"
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { red } from '@mui/material/colors';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

const StyledTitle = styled(Typography)({
  marginBottom: (theme) => theme.spacing(2),
});

const HomePage = () => {
  return (
    
      <body className='bb'>
        <div>
        <div  style={{ backgroundColor: "black", color: "white", borderBottom: "5px solid white" }} >
          <Toolbar>
            <Typography variant="h6">Paramesh Glam mart </Typography>
            <div style={{ marginLeft: 'auto' }}>
              <Button color="inherit" href='/login'>Login</Button>
              <Button color="inherit" href='/registration'>Sign Up</Button>
            </div>
          </Toolbar>
        </div>
      <div className='hi'>
          <StyledTitle variant="h2" align="center" color={'orange'} style={{ marginTop: "1em",padding:"10px" }}>
           paramesh ocean of cosmestics
          </StyledTitle>
          <Typography variant="body1" align="center" color={'white'} sx={{padding:"100px"}}>
            Explore the cosmestics loaded with nasty stuff and made with zero Intrest !
          </Typography>
          <Button variant="contained" color="primary" href="/explore" sx={{padding:"15px"}}>
            Explore Now
          </Button>
        </div>

    <Box sx={{ flexGrow: 1 }}><a href='hh'>
      <Grid container spacing={2}>
        <Grid item xs={12} md={3}>
          <img src="https://t4.ftcdn.net/jpg/04/32/07/73/240_F_432077397_3JnJMFzj2MbpCNU2z8TubEpROI8EA8L4.jpg" style={{width:"200px",height:"200px"}}></img>
          <h1 style={{color:'white'}}>lipstick</h1>
        </Grid>
        <Grid item xs={12} md={3}>
          <img src="https://t4.ftcdn.net/jpg/00/44/97/35/240_F_44973562_v2ed8VZQL98emMtpB7NAAYKrcGT80f4m.jpg"style={{width:"200px",height:"200px"}}></img>
          <h1 style={{color:'white'}}>Kajal</h1>
        </Grid>
        <Grid item xs={12} md={3}>
          <img src="https://t4.ftcdn.net/jpg/02/19/27/53/240_F_219275322_oCFJgZbukzaAQPaY6CpwcKyjJt2PTx08.jpg" style={{width:"200px",height:"200px"}}></img>
          <h1 style={{color:'white'}}>face products</h1> 
        </Grid>
        <Grid item xs={12} md={3}>
          <img src="https://t4.ftcdn.net/jpg/05/02/74/45/240_F_502744563_LrrpeY8H7k1CYsTauweq5tedOIUBnkxi.jpg" style={{width:"200px",height:"200px"}}></img>
          <h1 style={{color:'white'}}>Skin care</h1>
        </Grid>
      </Grid></a>
    </Box>
        </div>
        <footer class="site-footer" >
          <div class="social-icons">
              <a href="https://www.instagram.com/sem/campaign/emailsignup/?campaign_id=13530338610&extra_1=s|c|547419127610|e|instagram%20%27|&placement=&creative=547419127610&keyword=instagram%20%27&partner_id=googlesem&extra_2=campaignid%3D13530338610%26adgroupid%3D126262414014%26matchtype%3De%26network%3Dg%26source%3Dnotmobile%26search_or_content%3Ds%26device%3Dc%26devicemodel%3D%26adposition%3D%26target%3D%26targetid%3Dkwd-1321618851291%26loc_physical_ms%3D9300009%26loc_interest_ms%3D%26feeditemid%3D%26param1%3D%26param2%3D&gclid=Cj0KCQiApOyqBhDlARIsAGfnyMq9CODqkE_Ca6RZ0yxten-NYOe4DmqofmMNdFPKtGdtMxUoiLiarX4aAgZAEALw_wcB" class="text-white"><InstagramIcon style={{height:"50px",width:"70px"}}/></a>
              <a href="https://www.facebook.com/login/" class="text-white1"><FacebookIcon style={{height:"50px",width:"70px"}}/></a>
              <a href="#" class="text-white1"><LinkedInIcon style={{height:"50px",width:"70px"}}/></a>
              <a href="https://twitter.com/i/flow/login?input_flow_data=%7B%22requested_variant%22%3A%22eyJsYW5nIjoiZW4ifQ%3D%3D%22%7D" class="text-white1"><TwitterIcon style={{height:"50px",width:"70px"}}/></a>
              <a href="https://www.youtube.com/" class="text-white2"><YouTubeIcon style={{height:"50px",width:"70px"}}/></a>
              <a href="#" class="text-white3"><WhatsAppIcon style={{height:"50px",width:"70px"}}/></a>
          </div>
        </footer>



      </body>

  );
};

export default HomePage;