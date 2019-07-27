import styled from 'styled-components';
import { breakpoints, sizes, colors } from '../../../../../styles/vars';
import mixins from '../../../../../styles/mixins';
import Subtitle from '../../../../shared/Subtitle';

export const PostContent = styled.div`
    ${mixins.wrapper}
    max-width: ${sizes.postWidth};
    padding-top: 40px;
    padding-bottom: 40px;

    @media (min-width: ${breakpoints.bpMain}) {
      padding-top: 102px;
      padding-bottom: 102px;
    }

    ${Subtitle} {
        color: ${colors.black};
        font-size: 26px;
        line-height: 1.25;
        margin: 40px 0 20px;
        @media (min-width: ${breakpoints.bpMain}) {
            margin-top: 62px;
            font-size: 38px;
        }
    }

    p {
      margin-bottom: 20px;
    }
`;

export const ArtistPostContent = styled(PostContent)`
  ${Subtitle} {
    span {
      background-image: linear-gradient(to right, ${colors.pinkLighter}, ${colors.pinkLighter});
    }
  }
`;

export const ArticlePostContent = styled(PostContent)`
  ${Subtitle} {
    span {
      background-image: linear-gradient(to right, ${colors.tealLighter}, ${colors.tealLighter});
    }
  }
`;