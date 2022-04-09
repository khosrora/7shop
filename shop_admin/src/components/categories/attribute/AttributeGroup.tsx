import React, { useState } from "react";
import {
  Box,
  Typography,
  Divider,
  FormControl,
  Button,
} from "@material-ui/core";
import Attribute from "./Attribute";
import AttributeItem from "./AttributeItem";
import { AddBox } from "@material-ui/icons";

interface AttributeGroupProps {
  title: String;
}

const AttributeGroup: React.FC<AttributeGroupProps> = ({
  title,
}: AttributeGroupProps) => {
  const [attributes, setAttributes] = useState<AttributeItem[]>([]);

  const addnewAttribute = (e: React.MouseEvent) => {
    e.preventDefault();
    setAttributes((prev) => {
      return [
        ...attributes,
        {
          title: "",
          slug: "",
          type: 1,
          filterable: true,
          hasPrice: false,
        },
      ];
    });
  };

  return (
    <Box>
      <Typography variant="h6">{title}</Typography>
      <Divider />
      {attributes.map((attributes: AttributeItem, index) => (
        <Attribute key={index} />
      ))}
      <FormControl style={{ marginTop: "1rem" }}>
        <Button
          onClick={addnewAttribute}
          variant="contained"
          color="primary"
          startIcon={<AddBox />}
        >
          اضافه کردن ویژگی جدید
        </Button>
      </FormControl>
    </Box>
  );
};

export default AttributeGroup;
