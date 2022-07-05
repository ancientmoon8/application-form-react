import React from "react";
import { useState } from "react";
import '../css/mainComponent.css';
import PersonalDetails from "./personalDetailsComponent";

const Main = () => {
    const [advtIsSelected, setAdvtIsSelected] = useState();

    const selectAdvt = (e) => {
        if (e.target.value === "none") {
            setAdvtIsSelected(false);
        }
        else {
            setAdvtIsSelected(true);
        }
    };

    return (
        <React.Fragment>
            <section><div className="advno">
                <form>
                    <label htmlFor="adv">Select Advt.No.</label><br />
                    <select name="adv" id="adv" onChange={selectAdvt}>
                        <option value="none">--Select--</option>
                        <option value="1/2021/52">1/2021/52</option>
                        <option value="1/2021/53">1/2021/53</option>
                    </select>
                </form>
            </div>
            </section>
            {advtIsSelected ? <PersonalDetails /> : null}
        </React.Fragment>
    );
};

export default Main;