export const roles = [ 'roleId1', 'roleId2', 'roleId3', 'roleId4', 'roleId5', 'roleId6']

export const members = []

for (let i=1; i<=20; i++) {
  let numStr = (i<10)?('0'+i):(''+i)
  let member = {
    memberId: i,
    firstName: 'First' + numStr,
    LastName: 'Last' + numStr,
    email: 'member' + numStr + '@email.com',
    exempt: false,
    comment: 'comment ' + numStr,
    phoneNumber: '510-111-11' + numStr,
    active: true,
    lastServedDate: '',
    exclusions: [],
    lastServedRole: 'role' + (i%6 + 1)
  }
  members.push(member)
}

members[7].exempt='true'
members[17].exempt='true'
members[1].exclusions = ['roleId1', 'roleId2']
members[2].exclusions = ['roleId3', 'roleId4']
members[3].exclusions = ['roleId5', 'roleId6']
