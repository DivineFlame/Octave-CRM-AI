import { Img } from '@react-email/components';

const logoStyle = {
  marginBottom: '40px',
};

export const Logo = () => {
  return (
    <Img
      src="https://app.twenty.com/images/brand/octave-mark.png"
      alt="Octave CRM AI logo"
      width="40"
      height="40"
      style={logoStyle}
    />
  );
};
