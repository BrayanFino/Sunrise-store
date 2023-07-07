import { Brand_Save, Brand_delete, Brands } from "@/graphql/brand";
import { Category, Category_save } from "@/graphql/category";
import { Genders } from "@/graphql/gender";
import { Porduct_save, Product_delete, Products } from "@/graphql/product";
import { Size_save, Sizes } from "@/graphql/size";
import { SubCategory_save, Subcategories } from "@/graphql/subcategory";
import { useMutation, useQuery } from "@apollo/client";
import { useState } from "react";

export const useProduct = () => {
  //State
  const [brandImage, setBrandImage] = useState("");
  console.log(brandImage);
  const [productImage, setProductImage] = useState("");
  const [sizeData, setSizeData] = useState({
    name: "",
    stock: 0,
  });
  const [newSizes, setNewSizes] = useState([]);
  const [CategoryId, setCategoryId] = useState("");

  //Query
  const { data: brands } = useQuery(Brands);
  const { data: categories } = useQuery(Category);
  const { data: products } = useQuery(Products);
  const { data: subCategories } = useQuery(Subcategories, {
    variables: {
      filters: {
        categoryId: CategoryId,
      },
    },
  });
  const { data: gender } = useQuery(Genders);
  const { data: size } = useQuery(Sizes);

  //Mutation
  const [createProduct, { data: isCraeteProduct }] = useMutation(Porduct_save, {
    refetchQueries: [
      {
        query: Products,
      },
    ],
  });

  const [createBrand, { data: isCreateBrand }] = useMutation(Brand_Save, {
    refetchQueries: [
      {
        query: Brands,
      },
    ],
  });

  const [createCategory, { data: iscreateCategory }] = useMutation(
    Category_save,
    {
      refetchQueries: [
        {
          query: Category,
        },
      ],
    }
  );

  const [createSubCategorie, { data: isCreateSubCategorie }] = useMutation(
    SubCategory_save,
    {
      refetchQueries: [
        {
          query: Subcategories,
        },
      ],
    }
  );

  const [createSize, { data: iscreateSize }] = useMutation(Size_save);

  const [deleteBrand, { data: isDeleteBrand }] = useMutation(Brand_delete);

  const [deleteProduct, { data: isDeleteProduct }] =
    useMutation(Product_delete);

  //Initial val
  const initialValProduct = {
    name: "",
    price: "",
    genderId: "",
    brandId: "",
    image: "",
    categoryId: "",
    subCategoryId: "",
  };

  const initialValBrand = {
    name: "",
    image: "",
  };

  const initialValCategory = {
    name: "",
  };

  const initialValSubCategory = {
    name: "",
    categoryId: "",
  };

  const initialValSize = {
    name: "",
  };

  //Handle

  const handleChangeSize = (e, action) => {
    if (action === "sizeName") {
      setSizeData({
        ...sizeData,
        name: e,
      });
    }
    if (action === "sizeStock") {
      setSizeData({
        ...sizeData,
        stock: e,
      });
    }
  };

  const handleNewSizes = () => {
    const sizeFound = newSizes.find((e) => e.name === sizeData.name);
    if (sizeFound?.name || sizeFound === {}) {
      console.log("ya existe");
    } else {
      setNewSizes([...newSizes, sizeData]);
    }
  };

  const handleDeleteSize = (sizeName) => {
    const deletedSize = newSizes.filter((obj) => obj.name !== sizeName);
    setNewSizes(deletedSize);
  };

  const handleSaveImageB = (e) => {
    if (e?.target?.validity && e?.target?.files) {
      setBrandImage(e?.target?.files[0]);
    }
  };

  const handleSaveImageP = (event) => {
    if (event?.target?.validity && event?.target?.files) {
      setProductImage(event?.target?.files[0]);
    }
  };

  const handleCraeteProduct = (values, { resetForm }) => {
    resetForm();
    createProduct({
      variables: {
        productData: {
          name: values.name,
          price: parseInt(values.price),
          size: newSizes,
          genderId: values.genderId,
          brandId: values.brandId,
          categoryId: values.categoryId,
          subCategoryId: values.subCategoryId,
          image: productImage,
        },
      },
    });
    setNewSizes([]);
  };

  const handleCreateBrand = (values, { resetForm }) => {
    resetForm();
    createBrand({
      variables: {
        brandData: {
          name: values.name,
          image: brandImage,
        },
      },
    });
  };

  const handleCreateCategory = (values, { resetForm }) => {
    resetForm();
    createCategory({
      variables: {
        categoryData: {
          name: values.name,
        },
      },
    });
  };

  const handleCreateSubCategorie = (values, { resetForm }) => {
    resetForm();
    createSubCategorie({
      variables: {
        subCategoryData: {
          name: values.name,
          categoryId: values.categoryId,
        },
      },
    });
  };

  const handleCreateSize = (values, { resetForm }) => {
    resetForm();
    createSize({
      variables: {
        sizeData: {
          name: values.name,
        },
      },
    });
  };

  const handleDeleteBrand = (id) => {
    deleteBrand({
      variables: {
        id,
      },
    });
  };

  const handleDeleteProduct = (id) => {
    deleteProduct({
      variables: {
        id,
      },
    });
  };

  return {
    //Products
    products,
    productImage,
    handleSaveImageP,
    initialValProduct,
    handleDeleteProduct,
    handleCraeteProduct,

    //Brands
    brands,
    brandImage,
    initialValBrand,
    handleSaveImageB,
    handleCreateBrand,
    handleDeleteBrand,

    //Categories
    categories,
    initialValCategory,
    handleCreateCategory,
    CategoryId,
    setCategoryId,

    //Subcategories
    subCategories,
    initialValSubCategory,
    handleCreateSubCategorie,

    //Genders
    gender,

    //Sizes
    size,
    newSizes,
    initialValSize,
    handleDeleteSize,
    handleCreateSize,
    handleChangeSize,
    handleNewSizes,
  };
};
