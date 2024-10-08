import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-evenly;
  padding: 3%;
`;
export const Wrapper = styled.div`
  width: 100%;
  display: inherit;
  justify-content: inherit;
`;

export const StatsBlock = styled.button`
  width: 30%;
  height: 100px;
  padding: 15px;
  display: grid;
  background-color: lightseagreen;
  border: lightseagreen;
  border-radius: 15px;

  &:hover {
    background-color: lightcoral;
  }
`;
export const ModalWrapper = styled.div`
  background: white;
  display: flex;
  justify-content: center;
`;
