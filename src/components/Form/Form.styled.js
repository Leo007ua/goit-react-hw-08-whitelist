import styled from '@emotion/styled';

export const StyledForm = styled.form`
  display: flex;
  align-items: center;
  flex-direction: column;
  max-width: 350px;
  width: 100%;
  margin: 20px auto 25px;
  gap: 16px;

  .form-label {
    display: flex;
    flex-direction: column;
    gap: 10px;
  }

  .form-btn {
    width: 100px;
    height: 30px;
    background-color: aqua;
    border: none;
    border-radius: 5px;
    box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px,
        rgba(60, 64, 67, 0.15) 0px 2px 6px 2px;;
    cursor: pointer;
    &:active {
      background-color: green;
      color: white;
    }
    &:hover{
        background-color: lightgreen;
    }
    transition: background-color 0.5s;
  }
`;
