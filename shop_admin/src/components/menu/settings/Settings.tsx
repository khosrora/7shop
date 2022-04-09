import React, { useState } from 'react'
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles'
import {
  List,
  ListItem,
  ListItemText,
  Collapse
} from '@material-ui/core'
import {
  ExpandLess,
  ExpandMore,
} from '@material-ui/icons'

const useStyles = makeStyles((theme:Theme) => createStyles({
  nested: {
    paddingLeft: theme.spacing(5)
  },
  nestedText: {
    fontSize: '.99em !important'
  }
}))

const Settings = () => {
  const [open, setOpen] = useState(true)
  const classes = useStyles()
  return <React.Fragment>
    <ListItem button onClick={e => { setOpen(!open) }}>

      <ListItemText primary="تنظیمات"/>
      {open ? <ExpandLess/> : <ExpandMore/>}
    </ListItem>
    <Collapse in={open} timeout="auto" unmountOnExit>
      <List disablePadding component="div">
        <ListItem button className={classes.nested}>
          <ListItemText classes={{ primary: classes.nestedText }} primary="عمومی"/>
        </ListItem>
        <ListItem button className={classes.nested}>
          <ListItemText classes={{ primary: classes.nestedText }} primary="اطلاع رسانی"/>
        </ListItem>
      </List>
    </Collapse>
  </React.Fragment>
}

export default Settings
