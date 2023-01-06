const StorageUtil = () => {
  if (typeof window === "undefined") {
    return {
      length: 0,
      key: () => "",
      getItem: () => "",
      setItem: () => {},
      removeItem: () => {},
      clear: () => {},
    };
  }

  return {
    length: window?.localStorage?.length ?? 0,
    key: (i: number) => window?.localStorage?.key(i),
    getItem: (key: string) => window?.localStorage?.getItem(key),
    setItem: (key: string, value: string) =>
      window?.localStorage?.setItem(key, value),
    removeItem: (key: string) => window?.localStorage?.removeItem(key),
    clear: () => window?.localStorage?.clear(),
  };
};

export default StorageUtil;
