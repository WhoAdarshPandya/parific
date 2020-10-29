import { projectStorage } from "./firebaseconfig";
import { setImagedownloadUrl } from "./imgData";
export const UploadImage = async (file) => {
  let url = "";
  const storageRef = projectStorage.ref(file.name);
  storageRef.put(file).on(
    "state_changed",
    (snap) => {},
    (err) => {},
    async () => {
      url = await storageRef.getDownloadURL();
      await setImagedownloadUrl(url);
    }
  );
};
