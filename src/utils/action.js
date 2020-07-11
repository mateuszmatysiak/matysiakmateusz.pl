export const getAction = (type) => {
    switch (type) {
      case 'Email':
        return 'mailto:';
      case 'Telefon':
        return 'tel:';
      case 'Twitter':
        return 'https://twitter.com/';
      default:
        return null;
    }
  };