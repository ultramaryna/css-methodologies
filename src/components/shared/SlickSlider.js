import styled from 'styled-components';
import { breakpoints, colors } from '../../styles/vars';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const SlickSlider = styled(Slider)`
    .slick-next, .slick-prev {
        width: 46px;
        height: 46px;
        top: 133px;
        @media (min-width: ${breakpoints.bpMain}) {
            top: 37%;
        }
        &:before {
            content: '\E800';
            font-family: 'fontello';
            font-size: 28px;
            opacity: 1;
            @media (min-width: ${breakpoints.bpMain}) {
                font-size: 46px;
            }
        }
    }

    .slick-prev {
        transform: rotate(90deg);
        left: 0;
        @media (min-width: ${breakpoints.bpMain}) {
            left: -40px;
            transform: rotate(90deg) translateY(-50%);
        }
        @media (min-width: ${breakpoints.screenmd}) {
            left: -90px;
        }
    }

    .slick-next {
        transform: rotate(-90deg);
        right: 0;
        @media (min-width: ${breakpoints.bpMain}) {
            right: -40px;
            transform: rotate(-90deg) translateY(-50%);
        }
        @media (min-width: ${breakpoints.screenmd}) {
            right: -90px;
        }
    }

    .slick-dots {
        position: relative;
        bottom: auto;
        margin-top: 44.5px;
        li {
            margin: 0 5px;
            @media (min-width: ${breakpoints.bpMain}) {
                margin: 0 12px;
            }
            button {
                margin: 0;
                width: 17px;
                height: 17px;
                border: 3px solid ${colors.purpleLighter};
                transform: rotate(45deg);
                @media (min-width: ${breakpoints.bpMain}) {
                    width: 20px;
                    height: 20px;
                }
                &:before {
                    display: none;
                }
            }
        }

        .slick-active {
            button {
                background-color: ${colors.purpleLighter};
            }
        }
    }
`;

export default SlickSlider;