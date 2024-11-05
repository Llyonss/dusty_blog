export default () => {
    return (
        <>
            <div class='dusty-logo'>
                <ruby>
                    尘 <rt>Dusty</rt>
                </ruby>
                <ruby>
                    码 <rt>Coder</rt>
                </ruby>
            </div>
            <style jsx>{`
                ruby {
                    font-size: 1em;
                    font-weight: bold;
                }
                rt{
                    font-size: 0.35em;
                    font-weight: normal;
                }
            `}</style>
        </>
    )
}