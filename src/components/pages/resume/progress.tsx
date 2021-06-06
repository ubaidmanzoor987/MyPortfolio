import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import LinearProgress, {
  LinearProgressProps,
} from "@material-ui/core/LinearProgress";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";

function LinearProgressWithLabel(
  props: LinearProgressProps & { value: number }
) {
  return (
    <Box display="flex" alignItems="center">
      <Box width="100%" mr={1}>
        <LinearProgress variant="determinate" {...props} color="primary" />
      </Box>
      <Box minWidth={35} width={100}>
        <Typography variant="body2" color="textSecondary">{`${Math.round(
          props.value
        )}%`}</Typography>
      </Box>
    </Box>
  );
}

const useStyles = makeStyles({
  root: {
    width: "100%",
  },
});

type PropsType = {
  percent: number;
};

export default function LinearWithValueLabel(props: PropsType) {
  const classes = useStyles();
  const [progress, setProgress] = React.useState(props.percent);

  React.useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prevProgress) => prevProgress);
    }, 800);
    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <div className={classes.root}>
      <LinearProgressWithLabel value={progress} style={{ width: "100%" }} />
    </div>
  );
}
