import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { Badge } from '@material-ui/core'

const useStyles = makeStyles({
  root: {
    minWidth: 320,
    marginBottom: 15,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

export default function OutlinedCard(props) {
  const classes = useStyles();

  return (
    <Badge color="error" badgeContent="x">
    <Card className={classes.root} variant="outlined">
      <CardContent>
        <Typography variant="h5" component="h2">
          {props.word}
        </Typography>
        {/* <Typography className={classes.pos} color="textSecondary">
          adjective
        </Typography> */}
        <Typography variant="body2" component="p">
          {props.meaning}
          <br />
        </Typography>
        <Typography variant="body2" component="p">
          {props.add_time}
          <br />
        </Typography>
        <Typography variant="body2" component="span">
        


        </Typography>
      </CardContent>
    </Card></Badge>
  );
}
