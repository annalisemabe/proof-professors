import React from "react";
import CMS from "netlify-cms-app";

// Import main site styles as a string to inject into the CMS preview pane
import styles from "!to-string-loader!css-loader!postcss-loader!sass-loader!../css/main.css";

import HomePreview from "./cms-preview-templates/home";
import ProductsPreview from "./cms-preview-templates/services";
import PersonalStatements from "./cms-preview-templates/personal-statements";
import OurProcess from "./cms-preview-templates/our-process";
import ProfessionalWriting from "./cms-preview-templates/professional-writing";
import TestimonialsPreview from "./cms-preview-templates/testimonials";
import AboutPreview from "./cms-preview-templates/about";
import ContactPreview from "./cms-preview-templates/contact";

CMS.registerPreviewStyle(styles, { raw: true });
CMS.registerPreviewTemplate("home", HomePreview);
CMS.registerPreviewTemplate("products", ProductsPreview);
CMS.registerPreviewTemplate("our-process", OurProcess);
CMS.registerPreviewTemplate("personal-statements", PersonalStatements);
CMS.registerPreviewTemplate("professional-writing", ProfessionalWriting);
CMS.registerPreviewTemplate("testimonials", TestimonialsPreview);
CMS.registerPreviewTemplate("about", AboutPreview);
CMS.registerPreviewTemplate("contact", ContactPreview);
CMS.init();
