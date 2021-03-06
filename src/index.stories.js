import "@lwc/synthetic-shadow";
import "https://unpkg.com/@salesforce-ux/design-system@2.13.1/assets/styles/salesforce-lightning-design-system.min.css";
import { createElement } from "lwc";
import parentComponent from "./parentComponent";

export const story = () => createElement("c-parentComponent", { is: parentComponent });
