import { sizes, breakpoints } from './vars';

const mixins = {
    gradientText: `
        text-fill-color: transparent;
        -webkit-text-fill-color: transparent;
        background-clip: text;
        -webkit-background-clip: text;
    `,
    visuallyHidden: `
        position: absolute;
        overflow: hidden;
        clip: rect(0 0 0 0);
        height: 1px;
        width: 1px;
        margin: -1px;
        padding: 0;
        border: 0;
    `,
    wrapper: `
    padding: 0 ${sizes.marginMobile};
    max-width: ${sizes.contentWidth};
    margin: 0 auto;
    @media (min-width: ${breakpoints.bpMain}) {
        padding: 0 30px;
    }
    @media (min-width: ${breakpoints.screenLg}) {
        padding: 0 ${sizes.marginDesktop};
    }
    `
}

export default mixins;