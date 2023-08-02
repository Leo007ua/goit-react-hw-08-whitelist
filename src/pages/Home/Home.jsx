import React from 'react';
import { HomeStyled } from './styled';
import { HiBookOpen } from "react-icons/hi2"
import { iconsSize } from 'components/Icon/IconSize';


export default function Home() {
  return (
    <HomeStyled>
      <h1>Welcome to whitelist</h1>
      <HiBookOpen size={iconsSize.large} />
    </HomeStyled>
  );
}
