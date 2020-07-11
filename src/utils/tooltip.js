export const getTooltipMessage = (type) => {
  switch (type) {
    case 'Email':
      return 'Kliknij, aby wysłać do mnie wiadomość.';
    case 'Telefon':
      return 'Kliknij, aby zadzwonić do mnie.';
    case 'Twitter':
      return 'Kliknij, aby przejść na moje konto twitterowe.';
    default:
      return null;
  }
};

export const getTooltip = () => {
  return `&[title]:hover:after {
      content: attr(title);
      position: absolute;
      display: none;
  }`;
};
