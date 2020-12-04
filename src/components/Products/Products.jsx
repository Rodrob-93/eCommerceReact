import React from 'react';
import { Grid } from '@material-ui/core';

import Product from './Product/Product';

const products = [
    { id: 1, name: 'Shoes', description: 'Running shoes.', price: '$5', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZzeRACAIE9PEzFodedXBsvlA1w5FdWr1UZA&usqp=CAU'},
    { id: 2, name: 'Macbook', description: 'Apple macbook.', price: '$10', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRwreJPA9T_u9v4DeGKKu9s_I1hvyfaM35JLapuLyb4GnnoDwbwYi0NgW926BzzO6aWfovzXO4&usqp=CAc'},
];

const Products = () => {
    return(
        <main>
            <Grid container justify="center" spacing={4}>
                {products.map((product) => (
                    <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
                        <Product product={product} />
                    </Grid>    
                ))}
            </Grid>
        </main>
    )
    
}
 
export default Products;