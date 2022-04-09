import React, { useState } from "react";
import Content from "../partials/Content";
import {
  FormControl,
  TextField,
  Button,
  Dialog,
  DialogActions,
  DialogTitle,
  DialogContent,
} from "@material-ui/core";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import AttributeGroup from "./attribute/AttributeGroup";
import { initState, reducer } from "./state";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    formRow: {
      margin: theme.spacing(2, "auto"),
    },
  })
);

const EditCategory = () => {
  const styles = useStyles();
  const [state, dispatch] = React.useReducer(reducer, initState);

  const [title, setTitle] = React.useState<string>("");
  const [open, setOpen] = useState<boolean>(false);

  const handleConfirm = (e: React.MouseEvent) => {
    e.preventDefault();
    if (title !== "") {
      dispatch({
        type: "ADD_ATTRIBUTE_CATEGORY",
        payload: {
          title,
        },
      });
    }
    setOpen(false);
  };
  const handleClose = (e: React.MouseEvent) => {
    setOpen(false);
  };
  const openDialog = (e: React.MouseEvent) => {
    setOpen(true);
  };

  return (
    <Content title="ویرایش / اضافه کردن دسته بندی">
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>عنوان دسته بندی خاصیت ها</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            id="attributes_group_title"
            label="عنوان دسته بندی"
            type="text"
            fullWidth
            onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
              setTitle(event.currentTarget.value);
            }}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>بستن</Button>
          <Button onClick={handleConfirm}>تایید</Button>
        </DialogActions>
      </Dialog>
      <FormControl fullWidth className={styles.formRow}>
        <TextField
          variant="outlined"
          label="عنوان دسته بندی - فارسی"
          id="category_title_fa"
        />
      </FormControl>
      <FormControl fullWidth className={styles.formRow}>
        <TextField
          variant="outlined"
          label="عنوان دسته بندی - انگلیسی"
          id="category_title_en"
        />
      </FormControl>
      {state.groups.map((group, index) => (
        <AttributeGroup key={index} title={group.title} />
      ))}
      <FormControl>
        <Button
          color="primary"
          variant="contained"
          style={{ marginTop: "1rem" }}
          onClick={openDialog}
        >
          اضافه کردن دسته بندی ویژگی ها
        </Button>
      </FormControl>
    </Content>
  );
};

export default EditCategory;
