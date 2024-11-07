import { For } from "solid-js"
import DustyHero from "@/components/dusty-landing/DustyHero"
import DustyLogo from "@/components/dusty-landing/DustyLogo"
import DustyButton from "@/components/dusty-ui/DustyButton"
import routes from "@/routes"
import DustyHeader from "@/components/dusty-ui/DustyHeader"
import DustyLink from "@/components/dusty-ui/DustyLink"

export default () => {
    return (
        <div>
            <DustyHeader
                left={<DustyLink to='/'><DustyLogo></DustyLogo></DustyLink>}
                center={<For each={routes}>{({ path, name }) => (
                    <DustyLink to={path}>{name}</DustyLink>
                )}</For>}
                right={<DustyButton>为我发电</DustyButton>}
            ></DustyHeader>
            <DustyHero title={<DustyLogo></DustyLogo>} cta={<DustyButton >为我发电</DustyButton>}></DustyHero>
        </div>
    )
}