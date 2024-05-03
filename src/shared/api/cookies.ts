const cookieMap = new Map();

export const parseCookie = () => {
  const parsedCookie = document.cookie.split(";").filter(Boolean);

  parsedCookie.forEach((item) => {
    const [k, rawValue] = item.split("=");

    const key = k.trim();

    let value = decodeURIComponent(rawValue.trim());

    try {
      value = JSON.parse(value);
    } catch (e) {
      const isEmpty = value === "undefined" || !value;

      if (isEmpty && Cookies.has(key)) {
        Cookies.remove(key);

        return;
      }
    }

    cookieMap.set(key.trim(), value);
  });
};

const get = (key: string) => {
  parseCookie();

  return cookieMap.get(key);
};

const set = (key: string, value: string, expires: number) => {
  cookieMap.set(key, value);

  document.cookie = `${key}=${value};expires=${new Date(
    Date.now() + expires
  ).toUTCString()};`;
};

const remove = (key: string) => {
  cookieMap.delete(key);

  document.cookie = `${key}=;Max-Age=0;`;
};

const has = (key: string) => {
  return cookieMap.has(key);
};

const Cookies = {
  get,
  set,
  remove,
  has,
};

export default Cookies;
