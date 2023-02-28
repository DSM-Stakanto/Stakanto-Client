import { keyframes } from "styled-components";

export const AnswerAnimation = (y: number) => keyframes`
  0% {
    transform: translateX(120%) translateY(-${y > 0 ? y - 120 : 0}%);
    
  }
  50% {
    transform: translateX(0) translateY(-${y > 0 ? y - 120 : 0}%);
  }
  100% {
    transform: translateY(-${y}%);
  }
`;

export const WaveAnimation = keyframes`
    0% {
        transform: scale(1,1) ;
        opacity: 0.6;
    }
    100% {
        transform: scale(3,3) ;
        opacity: 0;
    }
`;

export const Shake = keyframes`
0%, 100% {
  filter: invert(0%);
}
10%, 90% {
  transform: translate3d(-1px, 0, 0);
}

20%, 80% {
  filter: invert(16%) sepia(89%) saturate(6054%) hue-rotate(358deg) brightness(97%) contrast(113%);
  transform: translate3d(2px, 0, 0);
}

30%, 50%, 70% {
  transform: translate3d(-4px, 0, 0);
}

40%, 60% {
  transform: translate3d(4px, 0, 0);
}
`;
export const BitAniamtion = keyframes`
0%, 60% {
    transform: scale(1,1);
}
70% {
    transform: scale(1.1,1.1);
}
90% {
    transform: scale(0.95, 0.95);
}
`;



export const AnswerAnimationUp = (y: number) => keyframes`
  0%, 50% {
    transform: translateY(-${y > 0 ? y - 120 : 0}%);
  }
  100% {
    transform: translateY(-${y}%);
  }
`;

export const AnswerAnimationNone = (y: number) => keyframes`
  0% {
    transform: translateX(0%) translateY(-${y > 0 ? y - 120 : 0}%);
  }
  50%, 100% {
    transform: translateX(120%) translateY(-${y > 0 ? y - 120 : 0}%);
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


export const FadeInDataList = keyframes`
    0% {
        transform: translateY(-50px);
        opacity: 0;
    }100% {
        transform: translateY(0);
        opacity: 1;
    }
`;

export const BarAnimation = (d: number, h: number) => keyframes`
  0% {
    height: ${d}%;
  }
  100% {
    height: ${d + h}%;
  }
`

export const FadeIn = keyframes`
    0% {
        opacity: 0;
    }
    100% {
        opacity: 1;
    }
`;