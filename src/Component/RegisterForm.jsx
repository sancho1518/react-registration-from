import React, { Component } from 'react';

class RegisterForm extends Component {
    render() {
        return (

            
    <form className="abdul">
        <div className="out sadiq">
        <h1>Codetrain Registration Form</h1>
        <h5>
            This from is the first step to register for codetrain's program staring on 25th July 2020. Our admissions team will reach out to you after successfull submitting your form.
        </h5>
        <h5><span style={{color: "red"}}>*Required</span></h5>
        </div>
        <div className="form-input sadiq">
                <label>Email address<span style={{color: "red"}}>*</span></label>
                <br />
                <input placeholder="your Emailaddress" type="text" name="Email address" />
        </div>

        <div className="mine sadiq">
            <label>Fullname<span style={{color: "red"}}>*</span></label>
            <br />
            <input placeholder="your answer" type="text" name="Fullname" />
        </div>

        <div className="her sadiq">
            <label>Phone Number<span style={{color: "red"}}>*</span></label>
            <br />
            <input placeholder="your answer" type="text" name="Phone Nmuber" />
        </div>

        <div className="who sadiq">
        <label>Phone number of next of kin</label>
            <h5>Phone number of someone we can reach out to in case your phone os off or not reachable. Eg, your parent, guardian or sibling, or spouse
            </h5>
        <br />
        <input placeholder="your answer" type="text" name="Phone number of next of kin" />
        </div>

        <div className="they sadiq">
            <h5>Can you pay 60% or more of the full Codetrain fees (GHS6000 for Ghanaian applicants or $1,200 for international applicants)<span style={{color: "red"}}>*</span> </h5>
            <label for="Yes">Yes</label>
            <input type="radio" value="Yes" />
            <br />
            <label for="No">No</label>
            <input type="radio" value="No" />
        </div>

        <div className="these sadiq">
            <h5>Please indicate who is going to pay your fees <span style={{color: "red"}}>*</span></h5>
            <label>Yourself</label>
            <input type="radio" />
            <br />
            <label>Parent / Sponsor</label>
            <input type="radio" />
            <br />
            <label>Organization</label>
            <input type="radio" />
            <br />
        </div>
            
        <div className="where sadiq">
            <label>Location<span style={{color: "red"}}>*</span></label>
            <br />
            <input placeholder="your answer" type="text" name="Location" />
        </div>
            
        <div className="when sadiq">
            <label>Current or previous school<span style={{color: "red"}}>*</span> </label>
            <br />
            <input placeholder="your answer" type="text" />
        </div>

        <div className="how sadiq">
            <label>Why do you want to join Codetrian<span style={{color: "red"}}>*</span></label>
            <br />
            <input placeholder="your answer" type="text" />
        </div>

        <div className="we sadiq">
            <label>How did you hear about Codetrain?<span style={{color: "red"}}>*</span></label>
            <br />
            <input placeholder="your answer" type="text" />
        </div>
            <br />
            <h4>A copy of your responses will be emailed to the address that you provided.</h4>
            <br />

            <div className="greenbar">
                <label>				
                ---------------------------------------</label><label>Page 1 of 1</label><br />
                
                </div>
            <br />

            <div className=" come wahab" >
                <input type="submit" name="submit form" />
            </div>
            <br />
            <h6>Never submit passwords through Google Forms.</h6>

	</form>
        );
    }
}

export default RegisterForm;
