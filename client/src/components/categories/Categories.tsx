import React from "react";
import Content from "../partials/Content";
import Http from "../../services/Http";
import {
  TableContainer,
  TableHead,
  TableRow,
  TableCell,
  Table,
  Paper,
  TableBody,
} from "@material-ui/core";

import SkeletonTable from "./../utils/SkeletonTable";

interface CategoryItem {
  hash: string;
  title: string;
  slug: string;
}

export default function Categories() {
  const [categories, setCategories] = React.useState<CategoryItem[]>([]);
  const [isLoading, setIsLoading] = React.useState<boolean>(true);
  React.useEffect(() => {
    const http = new Http();
    http
      .get("api/v1/categories")
      .then((response) => {
        setCategories(response.data);
        setIsLoading(false);
      })
      .catch((error) => {
        console.log(error.message);
        setIsLoading(false);
      });
  }, []);
  console.log(categories);
  return (
    <Content title="دسته بندی ها">
      {isLoading && <SkeletonTable />}
      {!isLoading && (
        <TableContainer component={Paper}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>عنوان</TableCell>
                <TableCell>slug</TableCell>
                <TableCell>عملیات</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
                {categories.map((category) => {
                  return <TableRow key={category.hash}>
                    <TableCell>{category.title}</TableCell>
                    <TableCell>{category.slug}</TableCell>
                    <TableCell></TableCell>
                  </TableRow>
                })}
            </TableBody>
          </Table>
        </TableContainer>
      )}
    </Content>
  );
}
