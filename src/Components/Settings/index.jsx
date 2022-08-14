import { useContext } from "react";
import { Context } from "../../Context";
import { Option } from "./style";
import Switch from "react-js-switch";

const Settings = () => {
    const state = useContext(Context);
    const [isLight, setTheme] = state;
    return (
        <div>
            <div>
                <Option>
                    <div><i className={isLight ? 'bx bxs-sun' : 'bx bxs-moon'}></i><span>{isLight ? "Light" : "Dark"}</span></div>
                    <Switch onChange={()=>setTheme(!isLight)} value={isLight} backgroundColor={{on: '#f9f9f9', off: '#757575'}} borderColor={{on: '#ccc', off: '#e6e6e6'}}/>
                </Option>
                <Option>
                    <div><i className='bx bx-hive'></i><span>Language</span></div>
                    <div>English</div>
                </Option>
                <Option>
                    <div><i className='bx bx-world'></i><span>Region</span></div>
                    <div>USA</div>
                </Option>
            </div>
            <hr/>
            <div>
                <Option>
                    <div><i className='bx bx-edit'></i><span>Edit Profile</span></div>
                </Option>
                <Option>
                    <div><i className='bx bxs-lock'></i><span>Security</span></div>
                </Option>
                <Option>
                    <div><i className='bx bx-code-block'></i><span>Advanced Settings</span></div>
                </Option>
                <Option>
                    <div><i className='bx bx-trash'></i><span>Wipe Data</span></div>
                </Option>
            </div>
        </div>
    )
}

export default Settings;