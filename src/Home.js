import React, { Component } from "react";

export class Home extends Component {
  render() {
    return (
      <div>
        <h1>Mission Statement</h1>
        <p className="mission">
          The mission of the Security and Offices Services Department is to
          protect the people, property and reputation of New York Public Radio.
          This department also monitors and maintains the office experience
          through providing the equipment, materials and resources necessary to
          support the organization by providing a highly functioning operation,
          a clean and friendly office atmosphere while delivering superior
          customer service to staff and guests.
        </p>
        <h1>Purpose</h1>
        <p className="purpose">
          The purpose of this manual is to provide the personnel of the Security
          and Office Services Department a comprehensive and uniformed approach
          in supporting company operations. This manual consists of departmental
          policies, administrative policies, protocols, and procedures; and is
          designed to provide guidance to Security and Office Services team
          members; outlining their responsibilities in directing and managing
          programs, projects, and vendors. <br />
          <br />
          All staff are required to review this document in its entirety to have
          a clear understanding of its content. Further, as this is a living
          document which will require regular updates, all personnel are
          requested to provide suggestions if they identify areas in which
          content should be updated, amended, and/or restructured. <br />
          <br />
          Note, as with any standards manual, exceptions to policies, protocols,
          and/or procedures are allowable when justifications for the exception
          are documented and properly processed for approval through the normal
          channels and department leadership. <br />
          <br />
          <strong>
            This Manual is intended for New York Public Radio internal use only
            and may not be distributed or disseminated in whole or in part to
            any organization and/or persons.
          </strong>
        </p>
      </div>
    );
  }
}

export default Home;
