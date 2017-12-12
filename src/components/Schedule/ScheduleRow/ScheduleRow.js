import React, { Component } from 'react';

import '../styles.css'

class ScheduleRow extends Component {

  constructor(props) {
    super(props);
    this.state = {
      selectedMemberIndex : props.index
    }
  }

  handleSelectChange(event) {
    this.setState({ selectedMemberIndex: event.target.value })
  }


// className={excluded1?"excluded":""}


  renderSelectMember(members, index, role) {
    return (
      <select
        onChange={this.handleSelectChange.bind(this)}
        value={this.state.selectedMemberIndex}
        className={members[this.state.selectedMemberIndex].exclusions.includes(role)
          ?"schedule-option-excluded"
          :"schedule-option-not-excluded"
        }
      >
      {members.map((member, i) => {
        return (
          <option
            key={i}
            value={i}
            className={member.exclusions.includes(role)
              ?"schedule-option-excluded"
              :"schedule-option-not-excluded"
            }
          >
            {member.firstName + " " + member.lastName}
          </option>
        )
      })}
      </select>
    )
  }

  render() {
    return (
      <div className="row">
        <div className="memberDetail">
          {this.props.role}
        </div>
        <div className="memberDetail">
          {this.renderSelectMember(this.props.members, this.props.index, this.props.role)}
        </div>
        <div className="memberDetail">
          {this.props.members[this.state.selectedMemberIndex].lastServedRole}
        </div>
        <div className="memberDetail">
          {this.props.members[this.state.selectedMemberIndex].comment}
        </div>
        <div className="memberDetail">
          {this.props.members[this.state.selectedMemberIndex].email}
        </div>
      </div>
    )
  }
}

export default ScheduleRow
