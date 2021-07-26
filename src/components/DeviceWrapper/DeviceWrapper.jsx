import React from 'react';
import styled from 'styled-components';

/**
 * @param containerBgColor: #eaeaea
 * @param shadowColor: rgba(0, 0, 0, 0.25)
 * @param bgColor: #f3f3f3
 * @param borderColor: #fff
 */

const Container = styled.div`
    height: 100vh;
    width: 100vw;
    background-color: ${props => props.containerBgColor};
    display: flex;
    align-items: center;
    justify-content: center;
`;

const DeviceWrapper = styled.div`
    box-sizing: border-box;
    height: 800px;
    width: 375px;
    overflow: hidden;
    border-radius: 40px;
    box-shadow: 2px 12px 20px 2px ${props => props.shadowColor};
    border: 4px solid ${props => props.borderColor};

    .device {
        box-sizing: border-box;
        height: 100%;
        width: 100%;
        background: ${props => props.bgColor};
        display: flex;
        flex-direction: column;
        overflow-y: scroll;
        position: relative;
    }
`;

const Device = ({containerBgColor, shadowColor, borderColor, bgColor, children}) => (
    <Container containerBgColor={containerBgColor}>
        <DeviceWrapper
            shadowColor={shadowColor}
            borderColor={borderColor}
            bgColor={bgColor}
        >
            <div className="device">
                {children}
            </div>
        </DeviceWrapper>
    </Container>
);

export default Device;