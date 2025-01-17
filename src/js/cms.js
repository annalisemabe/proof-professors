import React from "react";
import CMS from "netlify-cms-app";

// Import main site styles as a string to inject into the CMS preview pane
import styles from "!to-string-loader!css-loader!postcss-loader!sass-loader!../css/main.css";

import HomePreview from "./cms-preview-templates/home";
import Services from "./cms-preview-templates/services";
import TestimonialsPreview from "./cms-preview-templates/testimonials";
import AboutPreview from "./cms-preview-templates/about";
import ContactPreview from "./cms-preview-templates/contact";
import TermsAndConditionsPreview from "./cms-preview-templates/terms";

CMS.registerPreviewStyle(styles, { raw: true });
CMS.registerPreviewTemplate("home", HomePreview);
CMS.registerPreviewTemplate("services", Services);
CMS.registerPreviewTemplate("testimonials", TestimonialsPreview);
CMS.registerPreviewTemplate("about", AboutPreview);
CMS.registerPreviewTemplate("contact", ContactPreview);
CMS.registerPreviewTemplate("terms", TermsAndConditionsPreview);
CMS.init();
