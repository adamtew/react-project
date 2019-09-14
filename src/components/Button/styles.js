import styled from 'styled-components';
import { THEME } from '../../lib/theme';

export const Button = styled.div`
  background: ${({ primary }) => primary ? THEME.PRIMARY_1 : THEME.SECONDARY}
  border-radius: 15px;
  color: ${({ primary }) => primary ? THEME.SECONDARY : THEME.PRIMARY_1}
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px;

	font-size: 16px;
	font-weight: 500;
	line-height: 19px;
`

