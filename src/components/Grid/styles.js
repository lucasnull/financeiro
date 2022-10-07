import styled from "styled-components";

export const Table = styled.table`
    width: 98%;
    background-color: #90A955;
    padding: 20px;
    box-shadow: 0px 0px 5px #ECF39E
    border-radius: 5px;
    margin: 20px auto;
`

export const Thead = styled.thead``;

export const Tbody = styled.tbody``;

export const Tr = styled.tr``;

export const Th = styled.th`
    border-bottom: inset;
    border-color: #ECF39E;
    padding-bottom: 5px;
    text-align: ${(props) => (props.alignCenter ? "center" : "start")};
    width: ${(props) => (props.width ? props.width + "%" : "auto")};
`;