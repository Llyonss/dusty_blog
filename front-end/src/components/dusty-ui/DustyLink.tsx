import { Router, useNavigate } from "@solidjs/router";
import { Component, JSXElement } from "solid-js";

const DustyLink: Component<{ children: JSXElement, to: string }> = (props) => {
    const navigate = useNavigate();
    return <div on:click={() => {
        if (!props.to) return
        navigate(props.to)
    }}>{props.children}</div>;
};

export default DustyLink;