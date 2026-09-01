const agentCreatedBy = {
  actorType: "user",
  userId: "u_01HD44FHDPG82VQ4QNHDR4N2T0",
};

export default {
  timestamp: "2026-08-31T12:00:00.142Z",
  workspaceId: "w_01GST0W989ZNAW53X6XYHAY87P",
  payload: {
    eventType: "discussion.discussion_created",
    discussion: {
      id: "thd_01HD44FHDPG82VQ4QNHDR4N2T1",
      type: "AGENT_SESSION",
      status: "OPEN",
      threadId: null,
      agent: {
        id: "mu_01HD44FHDPG82VQ4QNHDR4N2T3",
        fullName: "Support Agent",
        publicName: "Support Agent",
        description: null,
        createdAt: "2026-08-01T09:00:00.000Z",
        createdBy: agentCreatedBy,
        updatedAt: "2026-08-01T09:00:00.000Z",
        updatedBy: agentCreatedBy,
        deletedAt: null,
        deletedBy: null,
      },
    },
  },
  id: "pEv_01HD44FHDPMZ3YJB5GEB1EZKQV",
  webhookMetadata: {
    webhookTargetId: "whTarget_01HD4400VTDJQ646V6RY37SR7K",
    webhookTargetVersion: "2026-08-31",
    webhookDeliveryAttemptId: "whAttempt_01HD44FJ45FJKVFHM3MDVYPGRS",
    webhookDeliveryAttemptNumber: 1,
    webhookDeliveryAttemptTimestamp: "2026-08-31T12:00:00.861Z",
  },
  type: "discussion.discussion_created",
};
