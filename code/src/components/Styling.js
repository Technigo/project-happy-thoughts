import styled, { keyframes } from 'styled-components';

export const MainContainer = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

// Loading Spinner
const loading = keyframes`
  from { transform: rotate(0deg) }
  to { transform: rotate(360deg) }
`;

export const Loader = styled.div`
  width: 100px;
  height: 100px;
  margin: 50px 0;
  border: 10px solid #F2F0F0;
  border-radius: 50%;
  border-top: 10px solid #FFADAD;;
  animation: ${loading} 4s linear infinite;
`;

// FormInput

export const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  width: 90%;
  margin: 20px;
  background-color: #F2F0F0;
  box-shadow: 7px 7px #000;
  border: 1px solid #868585;
  @media ( min-width: 768px) {
    width: 60%;
  }
  @media ( min-width: 1025px) {
    width: 30%;
  }
`;

export const FormTitle = styled.h1`
  margin: 15px;
  font-size: 14px;
  color: #2C2C2C;
  :focus {
    outline: 2px solid #868585; 
  }
`;

export const NameInput = styled.input`
  padding: 5px 5px 5px 10px;
  border: 1px solid #C4C4C4;
  margin: 0 15px 5px 15px;
  width: 50%;
  font-family: Monospace, "Courier New";
  :focus {
    outline: 3px solid #868585;
}
`;
  
export const MessageInput = styled.textarea`
  margin: 0 15px 0 15px;
  border: 1px solid #C4C4C4;
  padding: 10px;
  outline: none;
  :focus {
    outline: 3px solid #868585;
}`;

// Error message and character count
export const ErrorContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 3px 17px 6px 17px;
`;

export const ErrorMessage = styled.p`
  color: red;
  font-size: 11px;
  margin: 0;
  font-family: "Roboto", sans-serif;
  @media ( min-width: 768px) {
    font-size: 13px;
  }
`;
  
export const CharacterCount = styled.p`
  text-align: right;
  margin: 0;
  color: #868585;
  font-size: 12px;
  font-family: "Roboto";
  ${props => props.counter 
    ? `color: red;`
    : `color: black;`
  }
`;

// Buttons
export const Button = styled.button`
  border: none;
  outline: none;
  cursor: pointer;
  font-weight: bold;
  background-color: #FFADAD;
  color: #2C2C2C;
  :focus {
    outline: 2px solid #EB5562;
  }
  @media (hover:hover) {
    :hover {
      opacity: 0.7; 
    }
  }
`;

export const SubmitButton = styled(Button)`
  display: flex;
  align-items: center;
  margin: 2px 0 15px 15px;
  width: fit-content;
  padding: 10px 15px;
  height: fit-content;
  border-radius: 50px;
  font-weight: bold;
  font-size: 13px; 
  @media ( min-width: 768px) {
    padding: 12px 15px;
    font-size: 14px;
  }
`;

export const Heart = styled.span`
  font-size: 15px;
  margin: 0 4px;
`;
  
export const SortButton = styled(Button)`
  margin: 0 5px;
  padding: 7px 10px;
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
`;

export const LikeButton = styled(Button)`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  width: 43px;
  height: 43px;
  background-color: #EAEAEA;
  font-size: 15px;
  margin-right: 10px;
  ${props => props.liked 
    ? `background-color: #FFADAD;`
    : `background-color: #EAEAEA;`
  };
  @media (min-width: 768px) {
    width: 46px;
    height: 46px;
  }
`;

// Animation for when posting message
const sending = keyframes`
  from { transform: translateY(0) }
  to { transform: translateY(1000px) }
`;

export const MessageAnimation = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 100px;
  z-index: 1;
  animation: ${sending} 1s 1s;
`;

export const HeartEnvelope = styled.span`
`;

const heart = keyframes`
  0% {
    opacity: 0.8;
    transform: translateY(-10px);
  }
  100% {
    transform: scale(0.6) translateY(60px);
    opacity: 1;
  }
`;

export const HeartIcon = styled.span`
  color: #EB5562;
  position: absolute;
  margin-bottom: 40px;
  margin-left: 20px;
  font-size: 60px;
  opacity: 0;
  animation: ${heart} 1.5s 0.3s;
`;
  
const letter = keyframes`
  0% { transform: scale(1.5) }
  50% { transform: scale(1.0) }
  100% { transform: rotateX(50deg) }
`;

export const LetterIcon = styled.span`
  font-size: 100px;
  animation: ${letter} 0.6s;
`;

// MessageList and Element
export const SortButtonContainer = styled.div`
  display: flex;
  padding: 3px;
`;

export const MessageContainer = styled.section`
  display: flex;
  flex-direction: column;
  width: 90%;
  margin: 15px;
  box-shadow: 7px 7px #000;
  border: 1px solid #868585;
  @media ( min-width: 768px) {
    width: 60%;
  }
  @media ( min-width: 1025px) {
    width: 30%;
  }
`;

export const MessageTitle = styled.h4`
  font-size: 16px;
  word-wrap: break-word;
  color: #2C2C2C;
  margin: 15px 15px 5px 15px;
  font-family: Monospace, "Courier New";
  @media ( min-width: 768px) {
    font-size: 18px;
  }
`;

export const MessageName = styled.h5`
  font-size: 12px;
  color: #2C2C2C;
  margin: 0 0 15px 15px;
  font-family: Monospace, "Courier New";
`;

// Container with the likes and date when posted
export const LikeAndDateContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 15px 5px 15px;
`;

export const LikesText = styled.p`
  display: flex;
  align-items: center;
  color: #8F8F8F;
  font-size: 13px;
`;

export const DateText = styled.p`
  color: #C2C2C2;
  font-size: 12px;
  font-family: "Roboto";
  @media ( min-width: 768px) {
    font-size: 13px;
  }
`;

export const PaginationContainer = styled.div`
  margin: 12px 10px 25px 10px;
`;


