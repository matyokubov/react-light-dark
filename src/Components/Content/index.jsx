import { Profile, Info } from "./style";
import avatar from "./avatar.jpg";

const Content = () => {
    return (
        <Profile>
            <Info>
                <img src={avatar} alt="avatar"/>
                <h2>John Doe</h2>
                <h3>America</h3>
            </Info>
        </Profile>
    )
}

export default Content;