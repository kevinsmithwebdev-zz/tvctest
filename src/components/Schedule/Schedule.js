import React, { Component } from 'react';

import ScheduleRow from './ScheduleRow/ScheduleRow'

import { members, roles } from '../../constants/initial.js'

import styles from './Schedule.css'

const renderRole = (role, members, i) => {
  console.log('renderRole', role)
  return <ScheduleRow key={i} role={role} members={members} />
}

class Schedule extends Component {
  render() {
    return (
      <div className={styles.wrapper}>
        {roles.map((role, i) => renderRole(role, members, i))}
      </div>
    )
  }
}

export default Schedule
