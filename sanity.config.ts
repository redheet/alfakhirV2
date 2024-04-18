import { defineConfig } from "sanity";
import { deskTool } from "sanity/desk";
import { schemaTypes } from "./schemas";

export default defineConfig({
  name: "default",
  title: "al-fakhir",

  projectId: "vcaarauj",
  dataset: "production",
  basePath: "/admin",
  plugins: [deskTool()],

  schema: {
    types: schemaTypes,
  },
});
