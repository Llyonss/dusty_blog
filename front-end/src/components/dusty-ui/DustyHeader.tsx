import { Component, JSXElement, Show } from "solid-js";

const DustyHeader: Component<{ left: JSXElement, right: JSXElement, center: JSXElement }> = (props) => {
  return (
    <div class='dusty-menu'>
      <Show when={props.left}>
        <div class='dusty-menu-left'>{props.left}</div>
      </Show>
      <Show when={props.center}>
        <div class='dusty-menu-center'>{props.center}</div>
      </Show>
      <Show when={props.right}>
        <div class='dusty-menu-right'>{props.right}</div>
      </Show>
      <style jsx>{`
        .dusty-menu{
          display: grid;
          grid-template-areas:'left center right';
          width: 100%;
          z-index: 1000;
        }
        .dusty-menu-left{
          grid-area: left;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .dusty-menu-center{
          grid-area: center;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .dusty-menu-right{
          grid-area: right;
          display: flex;
          align-items: center;
           justify-content: center;
        }
      `}</style>
    </div>
  );
};
export default DustyHeader