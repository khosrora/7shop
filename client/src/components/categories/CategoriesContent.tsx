import React from "react";
import Content from "../partials/Content";

import {
  FormControl,
  TextField,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Grid,
} from "@material-ui/core";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import AttributeGroup from "./attribute/AttributeGroup";
import { AddBox, Save } from "@material-ui/icons";
import { useCategoriesState } from "./context";
import { v4 as uuid } from "uuid";
import Http from "./../../services/Http";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    formRow: {
      margin: theme.spacing(2, "auto"),
    },
  })
);

export default function CategoriesContent() {
  const styles = useStyles();
  const { state, dispatch } = useCategoriesState();
  const [title, setTitle] = React.useState<string>("");
  const [open, setOpen] = React.useState<boolean>(false);
  const handleClose = (e: React.MouseEvent) => {
    setOpen(false);
  };
  const openDialog = (e: React.MouseEvent) => {
    setOpen(true);
  };
  const handleConfirm = (e: React.MouseEvent) => {
    if (title !== "") {
      dispatch({
        type: "ADD_ATTRIBUTE_CATEGORY",
        payload: {
          hash: uuid(),
          title,
        },
      });
      setOpen(false);
    }
  };

  const updateTitle = (title: string) => {
    dispatch({
      type: "UPDATE_TITLE",
      payload: { title },
    });
  };

  const updateSlug = (Slug: string) => {
    dispatch({
      type: "UPDATE_SLUG",
      payload: { Slug },
    });
  };

  const saveCategory = () => {
    const httpClient = new Http();
    httpClient.post("api/v1/categories", { ...state }).then((response) => {
      console.log(response);
    });
  };

  return (
    <Content title="ویرایش / اضافه کردن دسته بندی">
      <Dialog open={open} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">
          عنوان دسته بندی خاصیت ها
        </DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            id="attributes_group_title"
            label="عنوان دسته بندی خاصیت ها"
            type="text"
            fullWidth
            onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
              setTitle(event.currentTarget.value);
            }}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            بستن
          </Button>
          <Button onClick={handleConfirm} color="primary">
            تایید
          </Button>
        </DialogActions>
      </Dialog>
      <FormControl fullWidth className={styles.formRow}>
        <TextField
          variant="outlined"
          id="title"
          label="عنوان - فارسی"
          onBlur={(e: React.FocusEvent<HTMLInputElement>) =>
            updateTitle(e.currentTarget.value)
          }
          defaultValue={state.title}
        />
      </FormControl>
      <FormControl fullWidth className={styles.formRow}>
        <TextField
          variant="outlined"
          id="slug"
          label="اسلاگ - انگلیسی"
          onBlur={(e: React.FocusEvent<HTMLInputElement>) =>
            updateSlug(e.currentTarget.value)
          }
          defaultValue={state.slug}
        />
      </FormControl>
      {state.groups.map((group) => (
        <AttributeGroup key={group.hash} {...group} />
      ))}
      <FormControl className={styles.formRow}>
        <Button
          onClick={openDialog}
          color="primary"
          variant="contained"
          startIcon={<AddBox />}
        >
          اضافه کردن دسته بندی ویژگی ها
        </Button>
      </FormControl>
      <Grid container justify="flex-end">
        <Button
          onClick={saveCategory}
          color="default"
          variant="contained"
          startIcon={<Save />}
        >
          ذخیره سازی{" "}
        </Button>
      </Grid>
    </Content>
  );
}
