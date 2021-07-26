import styled from 'styled-components';

/**
 * @param btnBgColor: #000
 * @param hrBgColor: #fff
 */

const FooterWrapper = styled.div`
    position: sticky;
    bottom: 0;
    width: 100%;
        
    .add__button__wrapper {
        position: absolute;
        width: 60px;
        height: 60px;
        right: 0px;
        bottom: 0px;
        transform: translate(-20%, -20%);
        background-color: ${props => props.btnBgColor};
        border-radius: 50%;
        cursor: pointer;
        opacity: 0.7;
        transition: transform 0.3s;

        &:hover {
            transform: translate(-20%, -20%) scale(1.035);
            opacity: 1;
        }

        .hr {
            position: absolute;
            width: 30px;
            height: 3px;
            left: 50%;
            top: 50%;
            transform: translate(-50%, -50%);
            background-color: ${props => props.hrBgColor};

            &.vr {
                transform: translate(-50%, -50%) rotate(90deg);
            }
        }
    }
`;

export default FooterWrapper;