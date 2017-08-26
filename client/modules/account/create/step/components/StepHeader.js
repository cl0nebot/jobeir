import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router';
import PrimaryNavLogo from '../../../../nav/primary-nav/components/PrimaryNavLogo';

const StepHeader = () =>
  <StepHeaderContainer>
    <PrimaryNavLogo />
    <StepStyledLink to="/account/jobs">Exit</StepStyledLink>
  </StepHeaderContainer>;

export default StepHeader;

const StepHeaderContainer = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex: 1;
  padding-top: 45px;
  margin: 0 50px;
  height: 70px;
`;

const StepStyledLink = styled(Link)`
  text-decoration: none;
  color: ${props => props.theme.colors.black};
`;
