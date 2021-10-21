import { Paper } from '@mui/material';
import Link from 'next/link';
import styled from 'styled-components';


export const CardContainer = styled(Paper)`
  width: 240px;
  height: 330px;
  background: linear-gradient(0deg, #242424 0%, rgba(80, 80, 80, 0.6) 100%);
  border-radius: 10px;
  padding: 5px;
  padding-top: 10px;
  color: white;
  transition: all 0.15s ease;
  :hover {
    background-color: #9b9b9b;
    cursor: pointer;
  }
`;

export const LinkTag = styled(Link)`
  :hover {
    cursor: pointer;
  }
`;
export const Tag = styled.a`
  text-decoration: none;
  color: inherit;
  margin: 15px;
`;