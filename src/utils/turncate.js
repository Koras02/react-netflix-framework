export const truncate = (str, n) => {
    return str?.length > n ? str.substr(0, n - 100) + "..." : str;
  };
  