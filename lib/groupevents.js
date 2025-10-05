// lib/groupevents.js

module.exports = {
  onMemberJoin: async (conn, group, member) => {
    console.log(`🟢 Member joined group: ${group.name} (${member.id})`);
    // You can add a welcome message here later if needed
  },

  onMemberLeave: async (conn, group, member) => {
    console.log(`🔴 Member left group: ${group.name} (${member.id})`);
    // You can add a goodbye message here later if needed
  },

  onPromote: async (conn, group, member) => {
    console.log(`⭐ ${member.id} was promoted in ${group.name}`);
  },

  onDemote: async (conn, group, member) => {
    console.log(`⬇️ ${member.id} was demoted in ${group.name}`);
  }
};
