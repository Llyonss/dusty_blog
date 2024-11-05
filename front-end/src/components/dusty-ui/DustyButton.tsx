import { Component, JSX } from "solid-js";

const DustyButton: Component<{ children: JSX.Element,style?: string}> =
    (props) => {
        return (
            <div class='dusty-button' {...props}>
                {props.children}
                <style jsx>{`
                .dusty-button {
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    padding:8px 12px;
                    width: 100%;
                    height: 100%;
                    border-radius: 8px;
                    background-color: #323232;
                    color: #fff;
                    font-size: 1.2rem;
                    font-weight: 600;
                    cursor: pointer;
                }
            `}</style>
            </div>
        );
    };

export default DustyButton;