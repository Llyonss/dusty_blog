import { Component, JSX } from "solid-js"

const DustyHero: Component<{ title: JSX.Element, subtitle?: JSX.Element, cta: JSX.Element }> =
    (props) => {
        return (
            <>
                <div class='hero'>
                    <div class='hero-text'>
                        <div class='title'>{props.title}</div>
                        <div class='subtitle'>{props.subtitle}</div>
                    </div>
                    <div class='hero-cta'>
                        {props.cta}
                    </div>
                </div>
                <style jsx>{`
                    .hero{
                        width:100%;
                        height:500px;
                        display:flex;
                        justify-content:center;
                        align-items:center;
                        flex-direction:column;
                        gap:48px;
                    }
                    .title{
                        font-size: 128px;
                    }
                    .sub-title{

                    }
                    .hero-text{
                    }
                    .hero-cta{
                        display:flex;
                        justify-content:center;
                        align-items:center;
                        width:230px;
                    }
                `}</style>
            </>
        )
    }

export default DustyHero