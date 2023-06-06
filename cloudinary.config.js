import cloudinary from "cloudinary";

export function configureCloudinary() {
  cloudinary.config({
    cloud_name: "dhrfu31jp",
    api_key: "978158725675579",
    api_secret: "SWU5VaByhiWDAWYh_71x6m8ExB4",
  });

  return cloudinary;
}
