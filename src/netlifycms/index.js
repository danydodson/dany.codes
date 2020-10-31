import CMS from "netlify-cms-app";
import cloudinary from 'netlify-cms-media-library-cloudinary';

CMS.init({
  config: {
    backend: {
      name: "git-gateway",
    },
  },
});

CMS.registerMediaLibrary(cloudinary);