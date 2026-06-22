import { type I18n } from '@lingui/core';
import { MainText } from 'src/components/MainText';
import { SubTitle } from 'src/components/SubTitle';

type WhatIsTwentyProps = {
  i18n: I18n;
};

export const WhatIsTwenty = ({ i18n }: WhatIsTwentyProps) => {
  return (
    <>
      <SubTitle value={i18n._('What is Octave CRM AI?')} />
      <MainText>
        {i18n._(
          "It's an AI-powered CRM that helps businesses manage customer data, relationships, and workflows efficiently.",
        )}
      </MainText>
    </>
  );
};
