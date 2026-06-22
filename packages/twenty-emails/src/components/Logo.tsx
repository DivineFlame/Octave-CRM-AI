import { Img } from '@react-email/components';

const logoStyle = {
  marginBottom: '40px',
};

export const Logo = () => {
  const serverUrl = process.env.SERVER_URL?.replace(/\/$/, '') ?? '';

  return (
    <Img
      src={`${serverUrl}/images/brand/octave-mark.png`}
      alt="Octave CRM AI logo"
      width="40"
      height="40"
      style={logoStyle}
    />
  );
};
