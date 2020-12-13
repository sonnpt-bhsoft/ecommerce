import React from "react";
import {
  Card,
  CardMedia,
  CardContent,
  CardActions,
  Typography,
  IconButton,
} from "@material-ui/core";
import { AddShoppingCart } from "@material-ui/icons";
import useStyles from "./style";

const Product = ({ product }) => {
console.log(product)
  const classes = useStyles();
  return (
    <Card className={classes.root}>
      <CardMedia className={classes.media} image={product.media.source} title={product.name} />
      <CardContent className={classes.content}>
        <div>
          <Typography variant="h5" gutterBottom>
            {product.name}
          </Typography>
          <Typography variant="h5">{product.price.formatted_with_code}</Typography>
        </div>
        <Typography variant="body2" color="textSecondary">
          {product.description}
        </Typography>
      </CardContent>
      <CardActions disableSpacing className={classes.cardActions}>
        <IconButton aria-label="Add to cart">
          <AddShoppingCart />
        </IconButton>
      </CardActions>
    </Card>
  );
};

export default Product;