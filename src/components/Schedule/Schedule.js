import React, { Component } from 'react';

import ScheduleRow from './ScheduleRow/ScheduleRow'

import { members, roles } from '../../constants/initial.js'

import './styles.css'

const titles = ['Role', 'Member', 'Last Role', 'Comment', 'Contact']

const titleBar = () => {
  return (
    <div className='row'>
      {titles.map((title, i) => (
        <div key={i} className="memberDetail titleBar">
          {title}
        </div>
      ))}
    </div>
  )
}

const renderRole = (role, members, i) => {
  return <ScheduleRow key={i} index={i} role={role} members={members} />
}


class Schedule extends Component {
  render() {

    console.log(members)
    const viableMembers = members.filter(member => (member.active && !member.exempt))
    console.log(viableMembers)
    return (
      <div className='wrapper'>
        {titleBar()}
        {roles.map((role, i) => renderRole(role, viableMembers, i))}
      </div>
    )
  }
}

export default Schedule
