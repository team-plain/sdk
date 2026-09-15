const agentCreatedBy = {
  actorType: "user",
  userId: "u_01HD44FHDPG82VQ4QNHDR4N2T0",
};

const agentAssignee = {
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
};

export default {
  timestamp: "2026-09-11T11:00:00.142Z",
  workspaceId: "w_01GST0W989ZNAW53X6XYHAY87P",
  payload: {
    eventType: "task.task_status_transitioned",
    previousTask: {
      id: "tsk_01HD44FHDPG82VQ4QNHDR4N2TD",
      ref: "TSK-098",
      title: "Investigate elevated error rate on webhook delivery",
      description: "Error rate crossed 2% threshold for webhook deliveries over the last hour.",
      status: "TODO",
      priority: 0,
      companyId: null,
      tenantId: "tn_01HD44FHDPG82VQ4QNHDR4N2TE",
      assignee: agentAssignee,
      assignedAt: "2026-09-01T09:00:00.000Z",
      sourceLinks: [
        {
          id: "tsl_01HD44FHDPG82VQ4QNHDR4N2TG",
          sourceType: "UNKNOWN_TASK_LINK_SOURCE_TYPE",
          sourceId: "src_01HD44FHDPG82VQ4QNHDR4N2TH",
        },
      ],
      createdAt: "2026-09-01T09:00:00.000Z",
      createdBy: agentCreatedBy,
      updatedAt: "2026-09-01T09:00:00.000Z",
      updatedBy: agentCreatedBy,
      deletedAt: null,
      deletedBy: null,
    },
    task: {
      id: "tsk_01HD44FHDPG82VQ4QNHDR4N2TD",
      ref: "TSK-098",
      title: "Investigate elevated error rate on webhook delivery",
      description: "Error rate crossed 2% threshold for webhook deliveries over the last hour.",
      status: "IN_PROGRESS",
      priority: 0,
      companyId: null,
      tenantId: "tn_01HD44FHDPG82VQ4QNHDR4N2TE",
      assignee: agentAssignee,
      assignedAt: "2026-09-01T09:00:00.000Z",
      sourceLinks: [
        {
          id: "tsl_01HD44FHDPG82VQ4QNHDR4N2TG",
          sourceType: "UNKNOWN_TASK_LINK_SOURCE_TYPE",
          sourceId: "src_01HD44FHDPG82VQ4QNHDR4N2TH",
        },
      ],
      createdAt: "2026-09-01T09:00:00.000Z",
      createdBy: agentCreatedBy,
      updatedAt: "2026-09-11T11:00:00.000Z",
      updatedBy: agentCreatedBy,
      deletedAt: null,
      deletedBy: null,
    },
  },
  id: "pEv_01HD44FHDPMZ3YJB5GEB1EZKQY",
  webhookMetadata: {
    webhookTargetId: "whTarget_01HD4400VTDJQ646V6RY37SR7K",
    webhookTargetVersion: "2026-09-11",
    webhookDeliveryAttemptId: "whAttempt_01HD44FJ45FJKVFHM3MDVYPGRW",
    webhookDeliveryAttemptNumber: 1,
    webhookDeliveryAttemptTimestamp: "2026-09-11T11:00:00.531Z",
  },
  type: "task.task_status_transitioned",
};
