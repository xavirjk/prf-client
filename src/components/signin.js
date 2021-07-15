import Styled from 'styled-components';
import { ClassicBtn1 } from './home';

export const Form = Styled.form`
    text-align: left;
    width: 100%;
    box-shadow: 2px 1.5px 2px 1px lightblue;
    padding-top: 1rem;
`;

export const Input = Styled.input`
    border: 0;
    border-bottom: 1px solid black;
    width: 80%;
    padding: 1rem 1rem .2rem 2rem;
    :focus {
        border: 0;
    }
`;

export const InpField = Styled.div`
    width: 100%;
    padding: .6rem .5rem;
`;

export const SmediaFields = Styled(InpField)`
    width: 70%;
    padding: .4rem .2rem;
`;
export const SMInputs = Styled(Input)`
   padding: .5rem 0 0 2rem;
   border-bottom: .1px solid grey;
   margin-bottom: 5px;
`;
export const IconF = Styled.div`
    position: relative;
    top: -23px;
    width: 30px;
    margin-left: 2px;
`;
export const SMIconF = Styled.i`
    position: absolute;
`;
export const Login = Styled(ClassicBtn1)``;

export const ErrorCard = Styled.div`
    text-align: center;
    font-style: italic;
    width: 90%;
    color: red;
`;

export const CustomForm = Styled(Form)`
     width: 80%;
     margin-top: 10px;
`;

export const CustomLogin = Styled(Login)`
    padding: .5rem;
    margin: .5rem;
`;
