import React, { Component } from 'react';

// import { members, roles } from '../../../constants/initial.js'


import styles from './ScheduleRow.css'

class ScheduleRow extends Component {
  render() {
    console.log('ScheduleRow.render')
    console.log(styles)
    return (
      <div className={styles.row}>
        <div className={styles.memberDetail}>
          role id
        </div>
        <div className={styles.memberDetail}>
          pulldown
        </div>
        <div className={styles.memberDetail}>
          email
        </div>
      </div>
    )
  }
}

export default ScheduleRow
