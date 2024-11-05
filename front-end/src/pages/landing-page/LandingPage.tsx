import DustyHero from "../../components/dusty-landing/DustyHero"
import DustyLogo from "../../components/dusty-landing/DustyLogo"
import DustyButton from "../../components/dusty-ui/DustyButton"

export default () => {
    return (
        <div>
            <DustyHero title={<DustyLogo></DustyLogo>} cta={<DustyButton >为我发电</DustyButton>}></DustyHero>
        </div>
    )
}