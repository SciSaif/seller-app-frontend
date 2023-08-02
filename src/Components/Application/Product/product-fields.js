import { countries } from "../../../Constants/countries";
import { PRODUCT_CATEGORY } from "../../../utils/constants";

export const allProductFieldDetails = [
  {
    id: "productCode",
    title: "Product Code",
    placeholder: "Product Code",
    type: "input",
    required: true,
  },
  {
    id: "productName",
    title: "Product Name",
    placeholder: "Product Name",
    type: "input",
    required: true,
  },
  {
    id: "MRP",
    title: "MRP",
    placeholder: "MRP",
    type: "number",
    required: true,
    valueInDecimal: true,
  },
  {
    id: "retailPrice",
    title: "Retail Price",
    placeholder: "Retail Price",
    type: "number",
    required: true,
    valueInDecimal: true,
  },
  {
    id: "purchasePrice",
    title: "Purchase Price",
    placeholder: "Purchase Price",
    type: "number",
    required: true,
    valueInDecimal: true,
  },
  {
    id: "HSNCode",
    title: "HSN Code",
    placeholder: "HSN Code",
    type: "input",
    required: true,
  },
  {
    id: "GST_Percentage",
    title: "GST Percentage",
    placeholder: "Please Select GST Percentage",
    type: "select",
    options: [
      { key: "0", value: 0 },
      { key: "5", value: 5 },
      { key: "12", value: 12 },
      { key: "18", value: 18 },
      { key: "28", value: 28 },
    ],
    required: true,
  },
  {
    id: "productCategory",
    title: "Product Category",
    placeholder: "Please Select Product Category",
    options: Object.entries(PRODUCT_CATEGORY).map(([key, value]) => {
      return { key: value, value: key };
    }),
    type: "select",
    disableClearable: true,
    required: true,
  },
  {
    id: "productSubcategory1",
    title: "Product SubCategory",
    placeholder: "Please Select Product SubCategory",
    options: [],
    type: "select",
    disableClearable: true,
    required: true,
  },

  {
    id: "manufacturerOrPackerName",
    title: "Manufacturer Or Packer Name",
    placeholder: "Manufacturer Or Packer Name",
    type: "input",
    required: true,
  },
  {
    id: "manufacturerOrPackerAddress",
    title: "Manufacturer Or Packer Address",
    placeholder: "Manufacturer Or Packer Address",
    type: "input",
    required: true,
  },
  {
    id: "commonOrGenericNameOfCommodity",
    title: "Common Or Generic Name Of Commodity",
    placeholder: "Common Or Generic Name Of Commodity",
    type: "input",
    required: true,
  },
  {
    id: "monthYearOfManufacturePackingImport",
    title: "Month Year Of Manufacture Packing Import",
    placeholder: "Month YearOf Manufacture Packing Import",
    type: "date-picker",
    required: true,
    format: "MM/YYYY",
    views: ["year", "month"],
  },
  {
    id: "importerFSSAILicenseNo",
    title: "Importer FSSAI License No",
    placeholder: "Importer FSSAI License No",
    type: "number",
    maxLength: 14,
    required: true,
  },
  {
    id: "brandOwnerFSSAILicenseNo",
    title: "Brand Owner FSSAI License No",
    placeholder: "Brand Owner FSSAI License No",
    type: "number",
    maxLength: 14,
    required: true,
  },

  {
    id: "quantity",
    title: "Quantity",
    placeholder: "Quantity",
    type: "number",
    required: true,
  },
  {
    id: "barcode",
    title: "SKU",
    placeholder: "SKU",
    type: "number",
    maxLength: 12,
    required: true,
  },
  {
    id: "maxAllowedQty",
    title: "Max Allowed Quantity",
    placeholder: "Max Allowed Quantity",
    type: "number",
    required: true,
    min: 1,
    maxLength: 10,
  },
  {
    id: "UOM",
    title: "UOM",
    placeholder: "UOM",
    type: "select",
    required: true,
    options: [
      { key: "unit", value: "unit" },
      { key: "dozen", value: "dozen" },
      { key: "gram", value: "gram" },
      { key: "kilogram", value: "kilogram" },
      { key: "tonne", value: "tonne" },
      { key: "litre", value: "litre" },
      { key: "millilitre", value: "millilitre" },
    ],
  },
  {
    id: "UOMValue",
    title: "UOM value",
    placeholder: "UOM value",
    type: "input",
    required: true,
  },
  {
    id: "length",
    title: "Length(cm)",
    placeholder: "Length",
    type: "input",
    maxLength: 6,
    required: true,
  },
  {
    id: "breadth",
    title: "Breadth(cm)",
    placeholder: "Breadth",
    type: "input",
    maxLength: 6,
    required: true,
  },
  {
    id: "height",
    title: "Height(cm)",
    placeholder: "Height",
    type: "input",
    maxLength: 6,
    required: true,
  },
  {
    id: "weight",
    title: "Weight",
    placeholder: "Weight",
    type: "input",
    maxLength: 3,
    required: true,
  },
  {
    id: "returnWindow",
    title: "Return Window (in hours)",
    placeholder: "Return Window (in hours)",
    type: "number",
    maxLength: 3,
    required: true,
  },
  {
    id: "manufacturerName",
    title: "Manufacturer Name",
    placeholder: "Manufacturer Name",
    type: "input",
    maxLength: 50,
    required: true,
  },
  {
    id: "manufacturedDate",
    title: "Manufactured Date",
    placeholder: "Manufactured Date",
    type: "date-picker",
    required: true,
  },
  {
    id: "nutritionalInfo",
    title: "Nutritional Info",
    placeholder: "Nutritional Info",
    type: "input",
    required: true,
  },
  {
    id: "additiveInfo",
    title: "Additive Info",
    placeholder: "Additive Info",
    type: "input",
    required: true,
  },
  {
    id: "instructions",
    title: "Instructions",
    placeholder: "Instructions",
    type: "input",
    required: true,
  },
  {
    id: "longDescription",
    title: "Long Description",
    placeholder: "Long Description",
    type: "input",
    required: true,
    multiline: true,
  },
  {
    id: "description",
    title: "Short Description",
    placeholder: "Short Description",
    type: "input",
    required: true,
    multiline: true,
  },
  {
    id: "vegNonVeg",
    title: "Veg/Non-Veg/Egg",
    placeholder: "Select Food Category",
    type: "select",
    options: [
      { key: "Veg", value: "VEG" },
      { key: "Non Veg", value: "NONVEG" },
      { key: "Egg", value: "EGG" },
    ],
    disableClearable: true,
    required: true,
  },
  {
    id: "isCancellable",
    title: "Cancellable",
    type: "radio",
    options: [
      { key: "Yes", value: "true" },
      { key: "No", value: "false" },
    ],
    required: true,
  },
  {
    id: "isReturnable",
    title: "Returnable",
    type: "radio",
    options: [
      { key: "Yes", value: "true" },
      { key: "No", value: "false" },
    ],
    required: true,
  },
  {
    id: "availableOnCod",
    title: "Available On Cash On Delivery",
    type: "radio",
    options: [
      { key: "Yes", value: "true" },
      { key: "No", value: "false" },
    ],
    required: true,
  },
  {
    id: "images",
    title: "Images (Select minimum 3 files with maximum size of 2Mb for each file)",
    type: "upload",
    multiple: true,
    file_type: "product_image",
    required: true,
  },
  {
    id: "fulfillmentOption",
    title: "Fulfilment Option",
    placeholder: "Available Fulfillment Options",
    type: "select",
    required: true,
    options: [],
    disableClearable: true,
  },
  {
    id: "countryOfOrigin",
    title: "Country Of Origin",
    placeholder: "Country Of Origin",
    type: "select",
    options: countries,
    required: true,
  },
];

export const categoryFields = ["productCategory", "productSubcategory1"];

export const productDetailsFields = [
  "productCode",
  "productName",
  "description",
  "longDescription",
  "countryOfOrigin",
  "HSNCode",
  "GST_Percentage",
  "maxAllowedQty",
  "length",
  "breadth",
  "height",
  "weight",
  "returnWindow",
  "manufacturerName",
  "manufacturedDate",
  "nutritionalInfo",
  "additiveInfo",
  "instructions",
  "vegNonVeg",
  "isReturnable",
  "isCancellable",
  "availableOnCod",
  "manufacturerOrPackerName",
  "manufacturerOrPackerAddress",
  "commonOrGenericNameOfCommodity",
  "monthYearOfManufacturePackingImport",
  "importerFSSAILicenseNo",
  "brandOwnerFSSAILicenseNo",
  "UOM",
  "fulfillmentOption",
];

export const variationCommonFields = ["MRP", "retailPrice", "purchasePrice", "quantity", "barcode", "images"];

export const UOMVariationFields = ["UOMValue"];
