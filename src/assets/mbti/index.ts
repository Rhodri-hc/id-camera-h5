const files = import.meta.globEager('./*.png');
const modules: Record<string, any> = {};

Object.keys(files).forEach((fileName) => {
  const name = fileName.replace(/\.\/|\.png/g, '');
  modules[name] = files[fileName].default;
});
export default modules;
