import React from "react";
import {
  TextField,
  Switch,
  FormControlLabel,
  Box,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from "@material-ui/core";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    attributeItem: {
      margin: theme.spacing(0, 1),
    },
    Box: {
      padding: theme.spacing(2),
    },
    FormContol: {
      margin: theme.spacing(1),
      minWidth: 120,
    },
  })
);

function Attribute() {
  const styles = useStyles();

  return (
    <Box className={styles.Box}>
      <TextField
        variant="outlined"
        label="عنوان فارسی"
        id="attribute_title_fa"
        className={styles.attributeItem}
      />
      <TextField
        variant="outlined"
        label="عنوان انگلیسی"
        id="attribute_title_en"
        className={styles.attributeItem}
      />
      <FormControl className={styles.FormContol}>
        <InputLabel id="attribute_type_label">نوع داده</InputLabel>
        <Select labelId="attribute_type_label" id="attribute_type">
          <MenuItem value={10}>عددی</MenuItem>
          <MenuItem value={20}>متنی</MenuItem>
          <MenuItem value={30}>متنی چند گزینه ای</MenuItem>
        </Select>
      </FormControl>
      <FormControlLabel
        label="استفاده از فیلتر ها"
        control={<Switch color="primary" id="attribute_filterable" />}
        className={styles.attributeItem}
      />
      <FormControlLabel
        label="استفاده از قیمت "
        control={<Switch color="primary" id="attribute_filterable" />}
        className={styles.attributeItem}
      />
    </Box>
  );
}

export default Attribute;
