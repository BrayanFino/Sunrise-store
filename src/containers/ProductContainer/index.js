import {
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  TabIndicator,
  Box,
  Grid,
} from "@chakra-ui/react";
import { useProductsContainer } from "@/hooks/useHeroContainer";

export const ProductsConatiner = () => {
  const {
    //Products
    products,
    productImage,
    handleSaveImageP,
    initialValProduct,
    handleCraeteProduct,
    handleDeleteProduct,

    //Brands
    brands,
    brandImage,
    initialValBrand,
    handleSaveImageB,
    handleCreateBrand,
    handleDeleteBrand,

    //Categories
    categories,
    CategoryId,
    setCategoryId,
    initialValCategory,
    handleCreateCategory,

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
    handleCreateSize,
    handleNewSizes,
    handleChangeSize,
    handleDeleteSize,
  } = useProductsContainer();
  return (
    <Tabs position="relative" variant="unstyled" m={5}>
      <TabList>
        <Tab>Productos</Tab>
        <Tab>Marcas</Tab>
        <Tab>Categorías</Tab>
        <Tab>Subcategorías</Tab>
        <Tab>Tallas</Tab>
      </TabList>
      <TabIndicator mt="-1.5px" height="2px" bg="blue.500" borderRadius="1px" />
      {/* <TabPanels>
        <TabPanel>
          <Grid>
            <ProductForm
              newSizes={newSizes}
              CategoryId={CategoryId}
              setCategoryId={setCategoryId}
              handleChangeSize={handleChangeSize}
              handleNewSizes={handleNewSizes}
              productImage={productImage}
              brand={brands?.Brands}
              gender={gender?.Genders}
              categories={categories?.Categories}
              subCategories={subCategories?.SubCategories}
              size={size?.Sizes}
              onChange={handleSaveImageP}
              initialValues={initialValProduct}
              onSubmit={handleCraeteProduct}
              handleDeleteSize={handleDeleteSize}
            />
            <ProductCard
              products={products?.Products}
              delete={handleDeleteProduct}
            />
          </Grid>
        </TabPanel>
        <TabPanel>
          <Grid gap={5}>
            <BrandForm
              brandImage={brandImage}
              initialValues={initialValBrand}
              onSubmit={handleCreateBrand}
              onChangeBrand={handleSaveImageB}
            />
            <GeneralCard
              brands={brands?.Brands}
              deleteBrand={handleDeleteBrand}
            />
          </Grid>
        </TabPanel>
        <TabPanel>
          <Grid>
            <CategoryForm
              initialValues={initialValCategory}
              onSubmit={handleCreateCategory}
            />
          </Grid>
        </TabPanel>
        <TabPanel>
          <SubcategoryForm
            categories={categories?.Categories}
            initialValues={initialValSubCategory}
            onSubmit={handleCreateSubCategorie}
          />
        </TabPanel>
        <TabPanel>
          <SizeForm
            categories={categories?.Categories}
            initialValues={initialValSize}
            onSubmit={handleCreateSize}
          />
        </TabPanel>
      </TabPanels> */}
    </Tabs>
  );
};
