import Styled from 'styled-components';
import { baseDisplay } from './home';

export const Base = Styled.div`
     width: 100%;
     ${baseDisplay}
     padding: 2rem;
`;

export const BaseEntry = Styled.div`
    margin: 1rem;
    box-shadow: 2px 2px 2px 2px gray;
    ${baseDisplay};
    justify-content: stretch;
`;
export const EntryHead = Styled.div`
    width: 100%;
    padding: 1rem;
    border-bottom: .1px solid rgba(198,198,198,0.5);
    color: #1280a5;
    font-family: Impact, fantacy;
    font-size: 16px;
`;

export const EntryDesc = Styled.div`
    width: 40%;
    border-right: .1px solid gray;
    padding: 1rem;
    text-align: center;
    font-family: serifs
    font-size: 18px;
    color: #282c34;
`;

export const EntryData = Styled.div`
    flex: 1 1 30%; 
    padding: 1rem;
`;

export const ContentDesc = Styled.div`
    font-family: Open-Sans-reg,impact;
    font-size: 14px;
`;
export const Components = Styled.div`
    border-radius: 2px;
    box-shadow: 2px 2px 2px 2px gray;
    border-top: 10px solid #1280a5;
`;

export const SetUpBtns = Styled.div`
    border: .1px solid gray;
    padding: .5rem 4rem .5rem .5rem;
    :hover {
        padding: .8rem 1.5rem;
        background-color: beige;
        cursor: pointer;
    }
`;

export const HeadDesc = Styled.div`
    border-bottom: .1px solid #1280a5;
    font-family: impact, fantacy;
`;

export const FieldDesc = Styled.div` 
    padding: .5rem;
    font-family: Arial;
    font-size: 14px;
`;
export const Updater = Styled.div`
    margin-left: 2rem;
    flex: 1 1 40%;
`;
export const Avator = Styled.div`
    width: 200px;
    background-color: #282c34;
    text-align: center;
    border-radius: 50%;
    padding: 1rem .5rem;
    position: relative;
    left: 90%;
`;

export const SuccessCard = Styled.p`
    text-align: center;
    color: green;
    font-style: italic;
`;

export const Editor = Styled.div`
   position: relative;
   font-weight: bold;
   color: green;
   cursor: pointer;
   top: 5px;
   width: 100px;
   left: 3rem;
`;

export const LogOut = Styled.div`
    padding: 1.5rem;
    text-align: center;
    box-shadow: 2px 2px 2px 2px rgba(198, 198, 198, 0.4);
    :hover {
        box-shadow: 2px 2px 2px 2px rgba(198, 198, 198, 0.9);
        cursor:pointer;
    }
`;
