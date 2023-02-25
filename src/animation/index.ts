import { keyframes } from "styled-components";

export const AnswerAnimation = (y: number) => keyframes`
  0% {
    transform: translateX(120%) translateY(-${y > 0 ? y - 100 : 0}%);
    
  }
  50% {
    transform: translateX(0) translateY(-${y > 0 ? y - 100 : 0}%);
  }
  100% {
    transform: translateY(-${y}%);
  }
`;

export const AnswerAnimationUp = (y: number) => keyframes`
  0%, 50% {
    transform: translateY(-${y > 0 ? y - 100 : 0}%);
  }
  100% {
    transform: translateY(-${y}%);
  }
`;

export const AnswerAnimationNone = (y: number) => keyframes`
  0% {
    transform: translateX(0%) translateY(-${y > 0 ? y - 100 : 0}%);
  }
  50%, 100% {
    transform: translateX(120%) translateY(-${y > 0 ? y - 100 : 0}%);
  }
`;

export const AnswerShow = keyframes`
0%, 100% {
  opacity: 0;
}
20%, 80% {
  opacity: 1;
}
`;

export const TextBoxAnimation = keyframes`
0% {
  transform: translateX(-120%);
}
100% {
  transform: translateX(0%);
}
`;

export const TextBoxAnimationReverse = keyframes`
0% {
  transform: translateX(0%);
}
100% {
  transform: translateX(-120%);
}
`;

export const PlusAnimation = keyframes`
0% {
  opacity: 0;
  transform: translateY(100%);
}
50%,100% {
  opacity: 1;
  transform: translateY(0);
}
`;
