import React, { Component } from "react";
import Fade from "react-reveal/Fade";

export class Receptionist extends Component {
  render() {
    return (
      <div className="receptionist">
        <h1>Receptionist</h1>
        <h3>Roles</h3>
        <Fade>
          <div className="rolesDiv">
            <p className="roles">
              Maintains security by following procedures and controlling access
              via the reception desk (monitor logbook, security system). Serves
              visitors by greeting, welcoming, directing and announcing them
              appropriately. Answers, screens and forwards any incoming phone
              calls while providing basic information when needed. Updates
              appointment calendars and schedule meetings/appointments. Performs
              other clerical receptionist duties such as filing, photocopying,
              collating, faxing etc. Reports to the Security and Office Services
              Operations Manager and is responsible for the security,
              cleanliness, and orderly operation of the Reception area and
              providing each employee and guest with a professional, vibrant,
              welcoming and overall exceptional customer service experience.
            </p>
          </div>
        </Fade>
        <h3>Responsibilities</h3>
        <Fade>
          <div className="parentDiv">
            <div className="parent">
              <p>1. Opening reception area</p>
              <p id="firstIndent"> a. Lights</p>
              <p id="secondIndent">
                i. (3) behind desk on wall; (1) next to piano
              </p>
              <p id="firstIndent">b. Tv</p>
              <p id="firstIndent">c. Radio</p>
              <p id="firstIndent">d. Computer log-on</p>
              <p id="firstIndent">e. Sign-in book</p>
              <p id="secondIndent">
                i. Highlight columns{" "}
                <em>Date, Name, Department or Person Visited, &amp; Time In</em>
                . Cross out all others.
              </p>
              <p id="firstIndent">f. Gate</p>
              <p id="firstIndent">g. Phone - Avaya System</p>
              <p id="firstIndent">
                h. Forward messages <strong>(see no. 4)</strong>
              </p>
              <p id="firstIndent">i. Outlook</p>
              <p>
                <em>2. </em>
                Registering Guests-{" "}
                <em>
                  <u>We need to place the proxyclick instructions here.</u>
                </em>
              </p>
              <p id="firstIndent">
                a. Always select <em>Pre-Register Groups</em>
              </p>
              <p id="secondIndent">
                i. For <em>Group Name</em>, enter the name of the employee
                requesting the guest.
              </p>
              <p id="secondIndent">ii. Guest information - include:</p>
              <p id="thirdIndent">1. First Name, Last Name</p>
              <p id="thirdIndent">2. Date, Time Frame</p>
              <p id="fourthIndent">
                a. It's a good idea to add (15) minutes to the request arrival
                time. (i.e., If an employee tells you they're expecting guest at
                12:00pm, enter 11:45am to ensure that they adequate time to
                arrive.)
              </p>
              <p id="fourthIndent">
                b. If an employee does not give you a departure time, you can
                make the call of how much time to add - 2 hours from arrival
                time is usually adequate.
              </p>
              <p id="thirdIndent">
                3. Under <em>Destinations</em> select "New York Public Radio - 8{" "}
                <sup>th</sup> Floor"
              </p>
              <p id="firstIndent">
                b. Ensure that if any of the guests are{" "}
                <strong>
                  high-profile persons with armed-security details
                </strong>{" "}
                with them that the Security and Office Services Ops. Manager
                knows, at ext. 4489. He will accompany/escort those individuals
                in and out of the building.
              </p>
              <p id="firstIndent">c. Registering Employees without badges</p>
              <p id="secondIndent">
                i. If there is a new employee or an employee without a badge,
                the Receptionist should reference the Employee Directory in
                UltiPro to verify employment, before registering (or call Human
                Resources).
              </p>
              <p id="secondIndent">
                ii. If an employee does not have their ID, please also let John
                Daniels know. This excludes new hires if they have yet to
                receive a temporary badge.
              </p>
              <p>3. Answering/Screening Calls</p>
              <p id="firstIndent">
                a. General information, membership, donations, etc. should be
                forwarded to Listener Services. They are open Mon-Fri 10-3.
                Outside of that callers can leave voicemails, and someone will
                return their call once the department opens up. All other calls
                can go to the individual.
              </p>
              <p id="firstIndent">b. Most names can be found in Outlook</p>
              <p id="secondIndent">
                i. Click <em>New Email</em>
              </p>
              <p id="secondIndent">
                ii. Click <em>To</em>
              </p>
              <p id="secondIndent">iii. Type in and search for the name</p>
              <p id="secondIndent">
                iv. Phone numbers are listed under <em>Business Phone</em>
              </p>
              <p id="firstIndent">
                c. A cheat sheet of regularly used extensions will remain at the
                Reception desk
              </p>
              <p>4. Forwarding Voicemail Messages</p>
              <p id="firstIndent">a. Select Voicemail ext.</p>
              <p id="firstIndent">b. Enter mailbox number 4401#</p>
              <p id="firstIndent">c. Enter password 147852#</p>
              <p id="firstIndent">
                d. Dial 2 to hear first message
                <em>
                  (If you don't press 2, you'll be given the caller's phone
                  number, date &amp; time of call-you must press 2 to actually
                  hear the voicemail)
                </em>
              </p>
              <p id="firstIndent">e. Dial 0 to move to the voicemail</p>
              <p id="firstIndent">
                <em>f. </em>
                After listening to the voicemail, determine where it should be
                forwarded to.{" "}
                <em>
                  (Most of the time the message will go Listener Services @
                  x4000)
                </em>
              </p>
              <p id="firstIndent">
                g. Dial 1, 2, 4 and then enter destination mailbox address +
                #,#,#
              </p>
              <p id="secondIndent">
                i. **If it's about membership, general info, or you're unsure,
                send to x4000. Otherwise listen for a name they mention (i.e.,
                "This call is for <em>Jane Doe</em>" - dial x4253)
              </p>
              <p id="firstIndent">h. Dial *3 to delete</p>
              <p id="firstIndent">
                i. Repeat steps <strong>d-h </strong>as necessary.
              </p>
              <p>5. Booking rooms</p>
              <p id="firstIndent">a. Select the room/calendar on Outlook</p>
              <p id="firstIndent">
                b. Click <em>New Meeting </em>and then <em>Meeting with All</em>
              </p>
              <p id="firstIndent">
                c. Include main employee(s)/recipients in the{" "}
                <strong>
                  <em>To</em>
                </strong>
                line.
              </p>
              <p id="firstIndent">d. Add in the requested time frame.</p>
              <p id="firstIndent">
                e. For <em>Subject</em>, include the primary
                employee(s)/recipients names.
              </p>
              <p id="firstIndent">f. Send</p>
              <p>6. Closing reception area</p>
              <p id="firstIndent">a. **same as #1</p>
              <p>7. Hotel Reservations</p>
              <p id="firstIndent">
                a. Acquire credit card information from the Security and Office
                Services Ops. Manager
              </p>
              <p id="firstIndent">
                b. Contact the hotel and reserve rooms for designated employees.
              </p>
              <p id="firstIndent">
                c. Send confirmation e-mail to the employee, their supervisor,
                and the Security and Office Services Ops. Manager
              </p>
              <p>8. Dispersing WIFI Information</p>
              <p id="firstIndent">
                a. Prior to the 1<sup>st</sup> of each month, be in contact with
                IT (ext. 4111; helpdesk@nypublicradio.org) to get the new WIFI
                login information.
              </p>
              <p id="firstIndent">
                b. Log that information into the template (attached), cut &amp;
                fold, and put into the following rooms:
              </p>
              <p id="secondIndent">i. 7FL Blue</p>
              <p id="secondIndent">ii. 7FL Green</p>
              <p id="secondIndent">iii. 8FL Blue</p>
              <p id="secondIndent">iv. 8FL Green Room</p>
              <p id="secondIndent">v. 8FL White</p>
              <p id="secondIndent">vi. 9FL Blue</p>
              <p id="secondIndent">vii. 9FL Green</p>
              <p id="secondIndent">viii. 9FL Library</p>
              <p id="secondIndent">ix. 10FL Blue</p>
              <p id="secondIndent">x. Reception</p>
            </div>
          </div>
        </Fade>
      </div>
    );
  }
}

export default Receptionist;
