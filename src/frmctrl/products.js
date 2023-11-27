import React from 'react';
import { Grid, Card, CardMedia, CardContent, Typography } from '@mui/material';

const cosmeticsData = [
  {
    id: 1,
    name: 'Lipstick',
    image: '://rubysorganics.store/cdn/shop/products/burgundy.png?v=16745710https19',
    
  },
  {
    id: 2,
    name: 'Kajal',
    image: 'https://www.lakmeindia.com/cdn/shop/products/eyeconiccombo_800x.jpg?v=1681120026',
  },
  {
    id: 3,
    name: 'Face Products',
    image: 'https://www.credihealth.com/media/x0cq4zu1yvty4zg7deub1f77flql/woman-applying-face-cream',
  },
  {
    id: 4,
    name: 'Skin Care',
    image: 'https://files.themomsco.com/site-images/800x800/46b0bac0-487a-11ec-b6c5-957ebacf6f5e1.jpg',
  },
  {
    id: 5,
    name: 'Perfume',
    image: 'https://cr7fragrances.store/cdn/shop/products/CR7-EDT-100ml-2048x2048_800x.jpg?v=1632409157',
  },
  {
    id: 6,
    name: 'Hair Care',
    image: 'https://femina.wwmindia.com/content/2019/mar/beauty-tips-for-hair-1553594791.jpg',
  },
  {
    id: 7,
    name: 'Body care',
    image: 'https://thebeautyco.in/cdn/shop/files/DSCF1318f_1500x.jpg?v=1666157628',
  },
  {
    id: 8,
    name: 'dark spots control',
    image: 'https://assets.vogue.in/photos/6050665cd4bdd6d4ee0f3044/master/w_1600%2Cc_limit/Neutrogena.jpg',
  },
  {
    id: 9,
    name: 'sun screen',
    image: 'https://www.lotusherbals.com/cdn/shop/products/SPF30_Front.jpg?v=1688808135',
  },
  {
    id: 10,
    name: 'night cream',
    image: 'https://m.media-amazon.com/images/I/61j0ZZ5ZxgL.jpg',
  },
  {
    id: 11,
    name: 'lotion',
    image: 'https://hips.hearstapps.com/hmg-prod/images/ghi-facemoisturizer-1669653153.png?crop=0.502xw:1.00xh;0.245xw,0&resize=640:*',
  },
  {
    id: 10,
    name: 'maskara',
    image: 'https://5.imimg.com/data5/SELLER/Default/2021/11/MN/GN/UT/141860047/maybelline-washable-eye-maskara.jpg',
  },
];

const Product = () => {
  return (
    <Grid container spacing={2}>
      {cosmeticsData.map((cosmetic) => (
        <Grid item xs={12} md={4} key={cosmetic.id}>
          <Card>
            <CardMedia
              component="img"
              alt={cosmetic.name}
              height="140"
              image={cosmetic.image}
            />
            <CardContent>
              <Typography variant="h6" component="div">
                {cosmetic.name}
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
};

export default Product;